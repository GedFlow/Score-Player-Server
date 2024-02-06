# 악보 재생기 ( Score player) 서버용 코드 저장소

- oemer 버전: 0.1.7

- 파이썬 가상환경 만들어서 사용할 것을 추천
  - 현재 세팅상 가상환경의 이름은 "newenv"임. 편하게 테스트 해보고 싶으면 newenv로 만들고, 다른 이름으로 쓰고 싶으면 main.js 코드 수정해서 사용할 것.

### 이 아래부턴 순서대로 할 것(conda를 통한 가상환경 구축)

- conda를 사용해 가상환경 구축
  - python 3.9버전
  - 이름은 "omr_01"

Nvidia cuda관련 라이브러리 설치목록
  - CUDA 버전 11.8
  - cuDNN 버전 8.5.0.96
  설치 이후 nvcc -V 를 통해 버전 확인

pip gpu연동 테스트(순서중요)
  - numpy 설치
  - pip install torch==<desired_version>+cu118 torchvision torchaudio -f https://download.pytorch.org/whl/cu118/torch_stable.html
  위 명령어를 통해 pytorch 설치(일반적인 pytorch가 아니라 gpu사용이 가능한 torch이며, cuda 11.8버전과 호환되는 라이브러리)

그외 pip 설치 목록
  - onnxruntime==1.16
  - onnxruntime-gpu==1.16
  - opencv-python-headless>=4.5.3.56
  - matplotlib
  - pillow
  - scipy
  - scikit-learn>=1.2

마지막으로 pip install oemer 후 main.js 실행
