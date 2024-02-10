const { exec } = require('child_process');

// 악보 이름
const nodeVariable_musicTitle = "light.jpg"; // 악보이름
process.env.NODE_VARIABLE_MUSIC_TITLE = nodeVariable_musicTitle; // 악보이름을 시스템 환경변수로 설정

// PowerShell 스크립트 실행
exec(`powershell -Command ".\\script.ps1"`, (error, stdout) => {
  if (error) {
    console.error(`Error executing PowerShell script: ${error}`);
    return;
  }

  // PowerShell 스크립트의 결과 출력
  console.log(`PowerShell script output:\n${stdout}`);

  // Python 가상환경 활성화 및 스크립트 실행
  const pythonCommand = `.\\newenv\\Scripts\\activate && python .\\translator.py`;
  exec(pythonCommand, (pythonError, pythonStdout, pythonStderr) => {
    if (pythonError) {
      console.error(`Error executing Python script: ${pythonError}`);
      return;
    }
  
    console.log(`Python script output: ${pythonStdout}`);
    console.error(`Python script errors: ${pythonStderr}`);
  });
});
