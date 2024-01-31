const { exec } = require('child_process');

// 악보 이름
const nodeVariable_musicTitle = "octop.png"; // 전달할 변수 값
process.env.NODE_VARIABLE_MUSIC_TITLE = nodeVariable_musicTitle; // 시스템 환경변수 설정

const powershellScriptPath = `.\\script.ps1`;
const pythonScriptPath = '.\\translator.py';

// PowerShell 스크립트 실행 (File 옵션 사용)
exec(`powershell -Command "${powershellScriptPath}"`, (error, stdout, stderr) => {
  if (error) {
    console.error(`Error executing PowerShell script: ${error}`);
    return;
  }

  // PowerShell 스크립트의 결과 출력
  console.log(`PowerShell script output:\n${stdout}`);

  // Python 가상환경 활성화 및 스크립트 실행
  const virtualEnvPath = '.\\myenv'; // 가상환경 경로
  const activateCommand = `${virtualEnvPath}\\Scripts\\activate`; // 윈도우 환경일 경우 'activate'로 변경
  const pythonCommand = `${activateCommand} && python ${pythonScriptPath}`;

  exec(pythonCommand, (pythonError, pythonStdout, pythonStderr) => {
    if (pythonError) {
      console.error(`Error executing Python script: ${pythonError}`);
      return;
    }

    console.log(`Python script output: ${pythonStdout}`);
    console.error(`Python script errors: ${pythonStderr}`);
  });
});
