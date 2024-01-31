$nodeVariable_musicTitle = $env:NODE_VARIABLE_MUSIC_TITLE

conda activate omr_01
oemer ./score/$nodeVariable_musicTitle -o ./musicxml
conda deactivate
