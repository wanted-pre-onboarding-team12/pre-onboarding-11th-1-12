## 원티드 프리온보딩 프론트엔드 인턴십 - 1주차 과제

- 배포링크 : [바로가기](https://tiny-sawine-0a08a4.netlify.app/)
- 과제 : 동료학습을 통해서 팀에서 생각한 원티드 프리온보딩 프론트엔드 인턴십 선발 과제의 **`Best Pratice`** 를 만들고 제출해주세요.

<details>
<summary>진행</summary>
<div markdown="1">

1. 팀원 모두 과제를 수행한다.
2. 팀원들이 각자의 구현방법을 설명하고 토론했을 때, 팀 안에서 가장 효율적이라고 판단되는 방법을 정하고 팀의 **`Best Practice`** 로 삼는다.

- 팀원의 과제 전체를 Best Practice로 선정하는 것이 아닌 과제의 각 부분이나 중점을 둬야할 부분을 단위를 나눈뒤, 각 단위마다의 **`Best Practice`** 를 토론하고, 단위별로 Best Practice를 모아서 팀의 최종 결과물을 만들어내는 방식으로 진행한다.
</div>
</details>


<br>


## 프로젝트 시작하기 

```plain text
$ npm install
$ npm start
```

<br>


## 토론
- [협업 Tool 정리](https://github.com/wanted-pre-onboarding-team12/pre-onboarding-11th-1-12/discussions/31)
- [Best Practice를 선정한 이유](https://github.com/wanted-pre-onboarding-team12/pre-onboarding-11th-1-12/discussions/4)
- [Git-flow 정의](https://github.com/wanted-pre-onboarding-team12/pre-onboarding-11th-1-12/discussions/7)
- [Best Practice 선정](https://github.com/wanted-pre-onboarding-team12/pre-onboarding-11th-1-12/discussions/5)
- [Coding Conventions 정의](https://github.com/wanted-pre-onboarding-team12/pre-onboarding-11th-1-12/discussions/1)
- [6/30 회의](https://github.com/wanted-pre-onboarding-team12/pre-onboarding-11th-1-12/discussions/18)
- [6/29 회의](https://github.com/wanted-pre-onboarding-team12/pre-onboarding-11th-1-12/discussions/3)
- [6/28 회의](https://github.com/wanted-pre-onboarding-team12/pre-onboarding-11th-1-12/discussions/2)



<br>

## 프로젝트 진행을 위한 Flow
- [Git Flow를 정하기 위한 토론](https://github.com/wanted-pre-onboarding-team12/pre-onboarding-11th-1-12/discussions/7)
- **`Flow`** : 개인브랜치 -> `main`브랜치로 pull request -> 3명 이상의 승인 -> `main` 브랜치로 merge -> `release` 브랜치로 merge 후 배포


- **`Branch`** : 기능/이름
  - ex) `todo/kyg`, `api/kyg`
 
    
- **`Commit Convention`**
```
Feat : 기능 (새로운 기능)
Fix : 버그 (버그 수정)
Design : CSS 등 사용자 UI 디자인 변경
Style : 스타일 (코드 형식, 세미콜론 추가: 비즈니스 로직에 변경 없음)
Refactor: 리팩토링
Comment : 필요한 주석 추가 및 변경
Docs : 문서 (문서 추가, 수정, 삭제)
Test : 테스트 (테스트 코드 추가, 수정, 삭제: 비즈니스 로직에 변경 없음)
Chore : 기타 변경사항 (빌드 스크립트, 패키지 매니저 설정 수정 등)
Rename : 파일 혹은 폴더명을 수정하거나 옮기는 작업만인 경우
Remove : 파일을 삭제하는 작업만 수행한 경우
!HOTFIX : 급하게 치명적인 버그를 고쳐야하는 경우
!BREAKING CHANGE : CHANGE 커다란 API 변경의 경우
```



<br>

## 폴더구조 

- 프로젝트 규모를 고려하여 디렉토리/index 규칙 대신 유형별로 디렉토리를 분류하여 폴더구조화
- React 컴포넌트 파일명을 파스칼 케이스로 작성

<details>
<summary>폴더구조</summary>
<div markdown="1">
  
```
📂src
├── 📂 assets
├── 📂 components
│   ├── 📂 common
│   │   ├── 📂 utils
│   │   │   └── 📄 valid.js
│   │   ├── 📄 Layout.tsx
│   │   ├── 📄 Nav.tsx
│   │   ├── 📄 layout.module.scss
│   │   └── 📄 nav.module.scss
│   ├── 📄 Modal.tsx
│   ├── 📄 TodoItem.tsx
│   ├── 📄 modal.module.scss
│   └── 📄 todoItem.module.scss
├── 📂 hooks
│   └── 📄 useinput.ts
├── 📂 models
│   └── 📄 api.ts
├── 📂 pages
│   ├── 📄 Home.tsx
│   ├── 📄 NotFound.tsx
│   ├── 📄 SignIn.tsx
│   ├── 📄 SignUp.tsx
│   ├── 📄 Todo.tsx
│   ├── 📄 auth.module.scss
│   ├── 📄 home.module.scss
│   └── 📄 todo.module.scss
├── 📂 routes
│   ├── 📄 PrivateRoute.tsx
│   └── 📄 Router.tsx
├── 📂 service
│   ├── 📄 auth.ts
│   ├── 📄 config.ts
│   └── 📄 todo.ts
├── 📂 styles
│   ├── 📂 constants  
│   ├── 📂 fonts/NanumSquareRound
│   ├── 📂 mixins
│   │   ├── 📄 _flexbox.scss
│   │   ├── 📄 _index.scss
│   │   └── 📄 _styles.scss
│   ├── 📄 _base.scss
│   ├── 📄 _fonts_face.scss
│   ├── 📄 _index.scss
│   ├── 📄 _reset.scss
│   └── 📄 global.scss
├── 📄 App.tsx
└── 📄 index.tsx
```

</div>
</details>

<br>
</div>
</details>

## 개발 툴  

- 타입스크립트를 적용한 리액트로 개발
- module.scss를 활용하여 컴포넌트별 스타일 관리
- scss 변수, mixins 활용하여 자주 사용하는 스타일 재사용 
- Eslint, Prettier, Husky 활용하여 코드 컨벤션&문법 확인 자동화 

React|TypeScript|Scss|Eslint|Prettier|
| :--: | :--: | :--: | :--: | :--: |
| <img src="https://techstack-generator.vercel.app/react-icon.svg" alt="react" width="65" height="65" /> | <img src="https://techstack-generator.vercel.app/ts-icon.svg" alt="icon" width="65" height="65" /> | <img src="https://techstack-generator.vercel.app/sass-icon.svg" alt="sass" width="65" height="65" /> | <img src="https://techstack-generator.vercel.app/eslint-icon.svg" alt="eslint" width="65" height="65" /> | <img src="https://techstack-generator.vercel.app/prettier-icon.svg" alt="icon" width="65" height="65" /> 


<br>


## 커뮤니케이션 툴 


Notion|Github|Discord|
| :--: | :--: | :--: |
| <img alt="Notion logo" src="https://www.notion.so/cdn-cgi/image/format=auto,width=640,quality=100/front-static/shared/icons/notion-app-icon-3d.png" height="65" width="65">| <img alt="github logo" src="https://techstack-generator.vercel.app/github-icon.svg" width="65" height="65">| <img alt="Discord logo" src="https://assets-global.website-files.com/6257adef93867e50d84d30e2/62595384e89d1d54d704ece7_3437c10597c1526c3dbd98c737c2bcae.svg" height="65" width="65"> |


- Discord
  - 채널을 개설하여 깃허브 레포지토리와 연결하여 커밋&풀리퀘스트 상태 공유
  - 디스코드 화면공유 & 음성통화 활용

- Github
  - 깃허브를 통해 다수의 작업을 통합 관리
  - Discussions를 통해 작업 방침(코딩 컨벤션 등), 팀원별 작업할 내용을 관리

- Notion
  - 동시에 다수가 편집/작성 가능한 노션을 통해 구술로 설명하기 힘든 부분을 노션에 작성함으로서 원활한 토론 진행
  - 코드 블록이나 여러 항목의 비교 테이블표 등의 서식을 활용하여 빠른 의사결정




<br>

| 이름   | Github                     | 포지션 및 역할   |
| ------ | ------------------------------- | ---------------- |
| 나규태 | https://github.com/ncb6206      | FE               |
| 박인우 | https://github.com/eatdrink0507 | FE               |
| 주양아 | https://github.com/Yang-ah      | FE               |
| 이찬영 | https://github.com/dokimion24   | FE               |
| 최예희 | https://github.com/YaeheeChoe   | FE (사정상 불참) |
| 김영건 | https://github.com/Goldenprevue | PL,FE            |

<br>


## 데모 영상

### Home

| TOKEN❌                        | TOKEN⭕️          |
| -------------------------------------------------------- | -------------------------------------------------------------- |
| <img src="https://github.com/wanted-pre-onboarding-team12/pre-onboarding-11th-1-12/assets/62326659/677fbd2f-169c-43ef-982f-c8eaadf737e2" /> | <img src="https://github.com/wanted-pre-onboarding-team12/pre-onboarding-11th-1-12/assets/62326659/f75d0e3d-f0a9-46e8-b016-db613091d42c"/> |
| · `시작하기` 클릭 시 /signin 경로 이동                                                                                       | · `시작하기` 클릭 시 /todo 경로로 이동                                                                                      |

<br>

### Sign up & Sign in

| Sign up 성공                                                                                                                | Sign in 성공                                                                                                                | 유효성 검사                                                                                                                  |
| --------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- |
| <img src="https://github.com/wanted-pre-onboarding-team12/pre-onboarding-11th-1-12/assets/62326659/9f77891a-9ea8-46b7-bfbd-861a1571af83"/> | <img src="https://github.com/wanted-pre-onboarding-team12/pre-onboarding-11th-1-12/assets/62326659/03d7c03b-f844-460c-836c-3688e0a81722"/> | <img src="https://github.com/wanted-pre-onboarding-team12/pre-onboarding-11th-1-12/assets/62326659/c5632d52-4dca-4104-b83c-df7959cd6424" /> |
| · /signin 경로로 이동                                                                                                       | · /todo 경로로 이동 <br> · 응답받은 JWT 로컬 스토리지에 저장                                                                | · 이메일 조건: @포함 <br> · 비밀번호 조건 : 8자 이상 <br> · 유효성 검사 통과 시 버튼 활성화                                  |

<br>

### To do list

| 데모 영상                                                                                                                              | 기능                                                                                                                                                                                                                                                                                                                                                          |
| -------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <img width=600 src="https://github.com/wanted-pre-onboarding-team12/pre-onboarding-11th-1-12/assets/62326659/abc81c27-aebd-4df0-bd7e-988ca5682624" /> | · 투두 리스트 목록 조회 <br> · 🍋 아이콘을 통해 `To do` 완료 여부 표시 <br> · `+` 버튼을 클릭하여 새로운 `To do` 추가 <br> · `수정` 버튼을 클릭 시, 수정모드 활성화 <br> · 수정모드에서 `제출`버튼 클릭 시, 수정한 내용 업데이트 <br> · 수정모드에서 `취소` 버튼 클릭 시, 수정한 내용 초기화 및 수정모드 비활성화 <br> · `삭제` 버튼 클릭 시 해당 아이템 삭제 |

<br>

### Nav & Redirect

| 데모 영상                                                                                                                              | 기능                                                                                                                                   |
| -------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- |
| <img width=600 src="https://github.com/wanted-pre-onboarding-team12/pre-onboarding-11th-1-12/assets/62326659/b62174da-1fc4-447e-a410-cd6db9b1d0a4" /> |Router에서 redirect 관리를 하여 깜빡임 에러를 해결하였습니다. <br> PrivateRouter컴포넌트에서 토큰의 존재 여부에 따라 사용자를 Redirect 시킵니다.<br><br> · `TOKEN⭕️` : /signin, /signup 경로 접속 시 /todo 경로로 리다이렉트 <br> · `TOKEN❌` : /todo 경로로 접속 시 /signin 경로로 리다이렉트 |


