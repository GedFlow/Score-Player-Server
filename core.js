import { promisify } from 'util';
import { exec } from 'child_process';

const execAsync = promisify(exec);

const Core = async ( musicTitle ) => {

  // 악보 이름
  process.env.NODE_VARIABLE_MUSIC_TITLE = musicTitle; // 악보이름을 시스템 환경변수로 설정
  
  try {
    // PowerShell 스크립트 실행 (conda 가상환경 실행 및 oemer 실행)
    const { stdout: psResult } = await execAsync(`powershell -Command ".\\script.ps1"`);
    console.log(`파워쉘(oemer) 실행결과:\n${psResult}`);
    
    // Python 스크립트 실행 (musicxml -> wav 변환 스크립트 실행)
    const { stdout: pyResult } = await execAsync(`.\\newenv\\Scripts\\activate && python .\\translator.py`)
    console.log(`파이썬(translator) 실행결과: ${pyResult}`);

    return musicTitle.split(".")[0];

  } catch (error) {
    console.log("에러가 발생했습니다! : ", error);
    return "Error";
  }
}

export default Core;
