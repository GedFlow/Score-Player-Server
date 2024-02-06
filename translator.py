from music21 import *
import subprocess
import os

node_variable_music_title = os.environ.get('NODE_VARIABLE_MUSIC_TITLE')
music_title = node_variable_music_title.split('.')[0]

# musicxml파일을 midi파일로 변환하는 함수
def convert_musicxml_to_midi(musicxml_file, midi_file):
    score = converter.parse(musicxml_file)
    mf = midi.translate.music21ObjectToMidiFile(score)

    mf.open(midi_file, 'wb')
    mf.write()
    mf.close()

# midi파일을 wav파일로 변환하는 함수
def convert_midi_to_wav(midi_file, wav_file):
    subprocess.run(['fluidsynth', '-ni', 'C:\Program Files\SynthFont2\GMGSx.sf2', midi_file, '-F', wav_file])


musicxml_file_path = './musicxml/'+music_title+'.musicxml'
midi_file_path = './midi/'+music_title+'.mid'
wav_file_path = './wav/'+music_title+'.wav'

convert_musicxml_to_midi(musicxml_file_path, midi_file_path)
convert_midi_to_wav(midi_file_path, wav_file_path)
