# 개요

![youtube-skip-main](https://github.com/user-attachments/assets/12ae0e72-fde0-4c70-b33f-9797cae137c3)

> 다보기엔 너무 지루한 유튜브영상을 텍스트로 요약해주는 웹서비스!

해당 프로젝트의 프론트 서버 레포지토리 입니다.
## 작동법 

<details>
  <summary>작동법</summary>

  ### 라이브러리 설치 
  ```bash
 npm install 
  ```
---
### 프론트 서버 시동

```bash
 npm start
  ```

프론트 서버 시동시 3000의 포트로 서버 자동실행

[백엔드 서버 시동법](https://github.com/Dev-KUN-F/youtube-skip-server) 

</details>

### 기술스택 
- React
- JavaScript
- Styled-commponents
- Node.js
- Axios


### 문제점 
![youtube-skip1](https://github.com/user-attachments/assets/18a95b94-ca8a-43f5-9fc8-cc9d6a98bb94)

요약 기능 자체는 사진과 같이 정상적으로 작동한다.

> 하지만 문제는 비용이다!

청크를 나누어 요청을 날려도 영상의 길이가 길어질수록 요약을하거나 음성인식으로 텍스트 변환해야되는 요청의 횟수가 기하급수적으로 늘어나다 보니 1시간 짜리 영상을 요약하면 1.98달러치의 요청이 진행되는것을 확인 하였다... 이런 이유로 인해 현재 이런 서비스를 만들어 봤다 로만 생각하고 배포는 잠정 중단 하기로 하였다. 

### 차후 개선 예정 사항
현재 openai 의 뒤를 바짝쫒고있는 딥시크의 개발을 확인 하였다. 가격도 훨씬 저렴하다고 한다. 
이를 사용할려고 해보았지만 아직 딥시크는 챗모델은 api로써 서비스 중이지만 음성을 인식해 텍스트로 변환하는 
open ai의 whisper 모델같은 음성인식 모델은 서비스를 하고있지않은것을 확인 하였다. 
![deepseek api](https://github.com/user-attachments/assets/1fbbac91-aa89-43b5-aebc-1f74bb3d0aba)
이후 딥시크에서도 음성인식 모델을 서비스하거나 타서비스에서 비슷한 서비스를 보다 저렴한 가격에 제공시 본프로젝트에 적용을 검토 할것이다.
