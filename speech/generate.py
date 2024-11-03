from flask import Flask, send_file, request, jsonify

import subprocess
import sys

app = Flask(__name__)

# test get command
# http://127.0.0.1:5000/generate_audio?text=Hello%20my%20name%20is%20uncle%20eye-row

@app.route('/generate_audio', methods=['GET'])
def generate_audio():
    # get the text input from the query parameters
    text_input = request.args.get('text')
    text_input = str(text_input)
    text_input = text_input.replace("%20", " ")
    if not text_input:
        return "No text input provided", 400
    
    # tts input params
    model_name = "tts_models/en/vctk/vits"
    output_path = "output.wav"
    speaker_idx = "p229"

    # shell command to generate audio
    result = subprocess.run([
        "tts",
        "--text", text_input,
        "--model_name", model_name,
        "--out_path", output_path,
        "--speaker_idx", speaker_idx
    ])

    if result.returncode != 0:
        return "Error generating audio", 500

    return send_file(output_path, as_attachment=True)

# test post command:
# curl -X POST -H "Content-Type: application/json" -d "{"text": "Hello there my name is uncle eye-row“}" --output output.wav http://127.0.0.1:5000/test_generate 

@app.route('/test_generate', methods=['POST'])
def test():
    # get the text input from the JSON request body
    data = request.get_json()
    text_input = data.get('text') if data else None
    if not text_input:
        return jsonify({"error": "No text input provided"}), 400
    else:
        return jsonify({"text_output": text_input}), 200

if __name__ == '__main__':
    app.run(debug=True)