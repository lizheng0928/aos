import Foundation
import Vision
import ImageIO

let directory = URL(fileURLWithPath: CommandLine.arguments[1])
let files = try FileManager.default.contentsOfDirectory(at: directory, includingPropertiesForKeys: nil).sorted { $0.lastPathComponent < $1.lastPathComponent }
var findings: [[String: Any]] = []
var scanned = 0
var failures: [String] = []
for file in files {
    autoreleasepool {
        do {
            let request = VNRecognizeTextRequest()
            request.recognitionLevel = .accurate
            request.recognitionLanguages = ["en-US", "zh-Hans", "zh-Hant"]
            request.usesLanguageCorrection = false
            try VNImageRequestHandler(url: file).perform([request])
            scanned += 1
            let matches = (request.results ?? []).compactMap { observation -> [String: Any]? in
                guard let candidate = observation.topCandidates(1).first,
                      candidate.string.range(of: "\\p{Han}", options: .regularExpression) != nil else { return nil }
                let box = observation.boundingBox
                return ["text": candidate.string, "confidence": candidate.confidence, "box": [box.origin.x, box.origin.y, box.width, box.height]]
            }
            if !matches.isEmpty { findings.append(["image": file.lastPathComponent, "matches": matches]) }
        } catch { failures.append(file.lastPathComponent + ": " + error.localizedDescription) }
    }
}
let result: [String: Any] = ["scanned": scanned, "failures": failures, "findings": findings]
let data = try JSONSerialization.data(withJSONObject: result, options: [.prettyPrinted, .sortedKeys])
try data.write(to: URL(fileURLWithPath: CommandLine.arguments[2]))
print("Scanned \(scanned) images; \(findings.count) contain OCR candidates; \(failures.count) failures.")
