#!/bin/bash

tts --text "hi my name is uncle eye-row" \
    --model_name "tts_models/en/vctk/vits" \
    --out_path output.wav \
    --speaker_idx p229 \