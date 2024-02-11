# 악보 재생기 ( Score player) 서버용 코드 저장소

- oemer 버전: 0.1.7

- 파이썬 가상환경 만들어서 사용할 것을 추천 (translator.py 를 실행하기 위한 환경)
  - 현재 세팅상 가상환경의 이름은 "newenv"임. 편하게 테스트 해보고 싶으면 newenv로 만들고, 다른 이름으로 쓰고 싶으면 main.js 코드 수정해서 사용할 것.

## 이 아래부턴 순서대로 할 것(conda를 통한 가상환경 구축)

### 1. conda를 사용해 가상환경 구축
- python 3.9버전
- 이름은 "omr_01"

### 2. Nvidia cuda관련 라이브러리 설치목록
  - CUDA 버전 11.8
  - cuDNN 버전 8.5.0.96 설치
  - 이후 nvcc -V 를 통해 cuda버전 확인

### 3. pip install 목록
- 만들어둔 conda환경 activate, requirements.txt를 사용해 필요한 패키지 인스톨

### 4. pip gpu연동 테스트(순서중요)
- 터미널에서 파이썬 실행
- 파이썬 REPL에서 torch import.
- torch.cuda.is_available() 명령어 입력 -> true로 나오는지 확인
- true면 OK, false면 지우고 다시 할 것.

### 5. 사운드 폰트 설치
- 사운드폰트 다운받아 translator.py 내부에서 경로를 잘 설정해줄 것.
- 현재 리포엔 'C:\\Program Files\\SynthFont2\\GMGSx.sf2' 라고 설정되어있는데, 이는 주인장 PC환경이므로 경로를 잘 설정하기 바람.

### 6. oemer 설치
```
pip install oemer
```


## 악보재생기 실행하기
- socre 디렉토리에 악보사진을 넣는다.
- core.js 악보이름 문자열에 해당 악보사진 파일의 이름을 넣어줄 것(확장자까지).
- core.js를 실행한다.

```
node core.js
```

<br />
<br />

> 이 설치가이드는 Nvidia GPU를 기반으로 한다. <br />
> 다른 gpu(Amd or Apple Silicon)를 사용하고 있다면, 그에 맞는 라이브러리를 설치하기 바람.