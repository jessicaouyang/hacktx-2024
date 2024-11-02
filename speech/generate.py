import subprocess

# define the dynamic text input, model, speaker
text_input = "hi my name is uncle eye-row" 
model_name = "tts_models/en/vctk/vits"
output_path = "output.wav"
speaker_idx = "p229"

# run the shell command
result = subprocess.run([
    "tts",
    "--text", text_input,
    "--model_name", model_name,
    "--out_path", output_path,
    "--speaker_idx", speaker_idx])