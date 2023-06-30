## 원티드 프리온보딩 프론트엔드 인턴십 - 1주차 과제

- 배포링크 : [바로가기]()
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

- [주제 links]()
- [주제 links]()



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

<details>
<summary>폴더구조</summary>
<div markdown="1">
  
```bash

📦 src
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

## Libraries
- React 
- TypeScript
- SCSS
- React Router
- Axios 
- Axios


## 데모 영상

### Home

| TOKEN❌                        | TOKEN⭕️          |
| -------------------------------------------------------- | -------------------------------------------------------------- |
| <img src="https://github.com/Yang-ah/wanted-pre-onboarding-frontend/assets/97151214/01128ec0-8143-434b-aa77-1fafcae4587a" /> | <img src="https://github.com/Yang-ah/wanted-pre-onboarding-frontend/assets/97151214/8210be6e-f0dc-4b7b-a76b-5928cc5335d5"/> |
| · `시작하기` 클릭 시 /signin 경로 이동                                                                                       | · `시작하기` 클릭 시 /todo 경로로 이동                                                                                      |

<br>

### Sign up & Sign in

| Sign up 성공                                                                                                                | Sign in 성공                                                                                                                | 유효성 검사                                                                                                                  |
| --------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- |
| <img src="https://github.com/Yang-ah/wanted-pre-onboarding-frontend/assets/97151214/f4808efa-4bf2-4d7a-894c-e404b69bab7a"/> | <img src="https://github.com/Yang-ah/wanted-pre-onboarding-frontend/assets/97151214/7877f5b9-2831-4d6c-9695-bca8c1f52d04"/> | <img src="https://github.com/Yang-ah/wanted-pre-onboarding-frontend/assets/97151214/c03f09b5-d67f-4d18-8451-e084122b0e55" /> |
| · /signin 경로로 이동                                                                                                       | · /todo 경로로 이동 <br> · 응답받은 JWT 로컬 스토리지에 저장                                                                | · 이메일 조건: @포함 <br> · 비밀번호 조건 : 8자 이상 <br> · 유효성 검사 통과 시 버튼 활성화                                  |

<br>

### To do list

| 데모 영상                                                                                                                              | 기능                                                                                                                                                                                                                                                                                                                                                          |
| -------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <img width=600 src="https://github.com/Yang-ah/wanted-pre-onboarding-frontend/assets/97151214/9349f1d6-079a-49d1-9e44-8ce90c1ef3c3" /> | · 투두 리스트 목록 조회 <br> · 🍋 아이콘을 통해 `To do` 완료 여부 표시 <br> · `+` 버튼을 클릭하여 새로운 `To do` 추가 <br> · `수정` 버튼을 클릭 시, 수정모드 활성화 <br> · 수정모드에서 `제출`버튼 클릭 시, 수정한 내용 업데이트 <br> · 수정모드에서 `취소` 버튼 클릭 시, 수정한 내용 초기화 및 수정모드 비활성화 <br> · `삭제` 버튼 클릭 시 해당 아이템 삭제 |

<br>

### Nav & Redirect

| 데모 영상                                                                                                                              | 기능                                                                                                                                   |
| -------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- |
| <img width=600 src="https://github.com/Yang-ah/wanted-pre-onboarding-frontend/assets/97151214/f543d05d-0a44-4fce-8ace-bfbe9eea9ea2" /> | · `TOKEN⭕️` : /signin, /signup 경로 접속 시 /todo 경로로 리다이렉트 <br> · `TOKEN❌` : /todo 경로로 접속 시 /signin 경로로 리다이렉트 |

