# 원티드 프리온보딩 프론트엔드 12기 - 1선발 과제 Best Practice 도출

## 1. 팀원 프로필

| <img src="https://avatars.githubusercontent.com/ha-il" width=150px><br />[김형우](https://github.com/ha-il) | <img src="https://avatars.githubusercontent.com/kimxminsu" width=150px><br />[김민수](https://github.com/kimxminsu) | <img src="https://avatars.githubusercontent.com/2duckchun" width=150px><br />[김태수](https://github.com/2duckchun) | <img src="https://avatars.githubusercontent.com/NEARworld" width=150px><br />[신승식](https://github.com/NEARworld) | <img src="https://avatars.githubusercontent.com/somin00" width=150px><br />[오소민](https://github.com/somin00) |
| :---------------------------------------------------------------------------------------------------------: | :-----------------------------------------------------------------------------------------------------------------: | :-----------------------------------------------------------------------------------------------------------------: | :-----------------------------------------------------------------------------------------------------------------: | :-------------------------------------------------------------------------------------------------------------: |
|                                            팀장<br />라우터 설정                                            |                                                   API 설정<br />                                                    |                                                  Todo 페이지<br />                                                  |                                                폼 유효성 검증<br />                                                 |                                            프로젝트 환경 설정<br />                                             |

## 2. 디렉터리 구조

```
 ├ .husky # git hook 설정 자동화를 위한 husky 설정
 ├ src
 │ ├ apis
 │ │ ├ config.ts # 용도 구분을 위해 각 도메인 axios 인스턴스 분리하여 설정
 │ │ ├ todo.ts
 │ │ └ user.ts
 │ ├ components
 │ │ ├ auth # 폼 유효성 검증 관련 컴포넌트 폴더
 │ │ ├ layout # 페이지 레이아웃 관련 컴포넌트 폴더
 │ │ └ todo # TodoList 관련 컴포넌트 폴더로 Todo페이지의 컴포넌트를 분리하기 위해 생성
 │ ├ hooks
 │ │ └ useForm.tsx # 폼 재사용성 증대를 위한 커스텀 훅
 │ ├ pages
 │ │ ├ ErrorBoundary.tsx # 라우터 에러 처리를 위한 컴포넌트
 │ │ ├ Signin.tsx # 로그인 페이지
 │ │ ├ Signup.tsx # 회원가입 페이지
 │ │ └ Todo.tsx # TodoList 페이지
 │ ├ router # App 컴포넌트에서 라우터관련 코드를 분리하기 위한 라우터 관련 폴더
 │ ├ store
 │ │ └ authContext.tsx # 로그인 여부를 전역으로 관리하기 위한 ContextAPI
 │ ├ App.tsx
 │ └ index.tsx
 ├ .eslintrc # 코드 스타일 통일을 위한 esLint 설정
 └ .prettierrc # 코드 포맷팅을 위한 prettier 설정
```

## 3. 추가한 라이브러리

| 목적        | 이름             | 버전     | 링크                                                                                             |
| ----------- | ---------------- | -------- | ------------------------------------------------------------------------------------------------ |
| HTTP Client | axios            | ^1.4.0   | [https://www.npmjs.com/package/axios](https://www.npmjs.com/package/axios)                       |
| 라우터 설정 | react-router-dom | ^6.14.2  | [https://www.npmjs.com/package/react-router-dom](https://www.npmjs.com/package/react-router-dom) |
| 스타일      | @emotion/styled  | ^11.11.0 | [https://www.npmjs.com/package/@emotion/styled](https://www.npmjs.com/package/@emotion/styled)   |
| 환경 설정   | eslint           | ^8.47.0  | [https://www.npmjs.com/package/eslint](https://www.npmjs.com/package/eslint)                     |
| 환경 설정   | prettier         | ^3.0.2   | [https://www.npmjs.com/package/prettier](https://www.npmjs.com/package/prettier)                 |
| 환경 설정   | husky            | ^8.0.3   | [https://www.npmjs.com/package/husky](https://www.npmjs.com/package/husky)                       |
| 환경 설정   | lint-staged      | ^14.0.1  | [https://www.npmjs.com/package/lint-staged](https://www.npmjs.com/package/lint-staged)           |

<br />

## 4. Best Practice 도출 과정 요약

Best Practice 도출 과정의 상세 설명은 해당 [링크](https://distinct-attraction-cde.notion.site/1-986fafa06b93411ba359df94b059cb94?pvs=4)에서 확인하실 수 있습니다.

### 4.1 폼 유효성 검사

- 담당: 신승식
- useInputValidation 훅스 이름을 useForm으로 변경하여 전체적인 form 기능을 담당하도록 훅스의 범위를 확장
- handleChange 함수를 useForm에 위치시켜 signin, signup 컴포넌트가 View 기능만 담당하도록 변경

### 4.2 라우터 설정과 사용자 로그인 여부에 따른 리다이렉트

- 담당: 김형우
- createBrowserRouter 함수에 errorElement 속성을 설정하여 예상치 못한 경로로 접근했을 시의 대처 방안을 마련
- ContextAPI로 사용자 로그인 여부를 전역 상태로 관리하여 로컬스토리지 참조 코드의 중복을 제거
- 페이지 간 이동할 수 있는 PageNavigation 컴포넌트 추가하여 사용자의 페이지 이동의 편의성을 증대

### 4.3 TODO LIST

- 담당: 김태수
- 코드 가독성 향상 및 선언적인 page 관리를 위해 page와 component를 분리
- 컴포넌트 내부에서도 재사용 가능한 부분을 component화하여 유지보수성을 증대

### 4.4 API 설정

- 담당: 김민수
- 공통 사용되던 axiosInstance를 userInstance, todoInstance로 분리하여 용도에 맞는 도메인 별 api 설정
- Instance에서 중복된 코드(axios.Create)를 함수화(axiosCreate)하여 중복 코드 제거

### 4.5 프로젝트 환경 설정

- 담당: 오소민
- eslint, prettier, husky 도입하여 코드 스타일 통일과 git hook 자동화로 작업 효율성 증대
- git 관련 작업의 통일성을 위해 commit message와 branch 컨벤션 설정
- Pull Request 템플릿 설정하여 원활한 코드 리뷰가 가능하도록 유도

<br />

## 5. 프로젝트 배포 링크

**배포 링크**: [https://pre-onboarding-12th-1-14.netlify.app](https://pre-onboarding-12th-1-14.netlify.app)

<br />

## 6. 개발 환경에서 프로젝트 실행 방법

1. 터미널에서 이 저장소를 git clone 하거나, 이 저장소의 파일을 다운받아 압축을 해제한 뒤 터미널로 열어주세요.
   <br/>
2. 터미널에 아래와 같이 명령어를 입력합니다.

   ```
   # git clone 한 경우
   cd pre-onboarding-12th-1-14

   # 파일을 다운받은 경우
   cd pre-onboarding-12th-1-14-main
   ```

3. 터미널에 `npm install`을 입력하여 의존성을 설치합니다.
   <br/>
4. `npm start`를 입력하여 애플리케이션을 실행합니다.

<br />

## 7. 데모 영상

### 7.1 회원 가입하기

|                                                      회원 가입                                                       |
| :------------------------------------------------------------------------------------------------------------------: |
|                      메일 주소 입력 → 비밀번호 입력 → 회원가입 버튼 클릭 → 로그인 페이지로 이동                      |
| ![signup](https://github.com/somin00/pre-onboarding-12th-1-14/assets/108077643/61d3f96c-79aa-4641-9f5d-c68f90c240b6) |

### 7.2 로그인하기

|                                                        로그인                                                        |
| :------------------------------------------------------------------------------------------------------------------: |
|                      메일 주소 입력 → 비밀번호 입력 → 로그인 버튼 클릭 → TodoList 페이지로 이동                      |
| ![signin](https://github.com/somin00/pre-onboarding-12th-1-14/assets/108077643/c01f0843-baab-444a-b402-b777f88bdcc5) |

### 7.3 Todo 추가하기

|                                                       Todo 추가                                                        |
| :--------------------------------------------------------------------------------------------------------------------: |
|                              Todo 입력 → 추가 버튼 클릭 → 해당 Todo가 추가된 목록 렌더링                               |
| ![add-todo](https://github.com/somin00/pre-onboarding-12th-1-14/assets/108077643/69b2d38c-53fb-4675-8651-8e8aca4e73e7) |

### 7.4 Todo 완료하기

|                                                        Todo 완료                                                         |
| :----------------------------------------------------------------------------------------------------------------------: |
|                                        체크박스 클릭 → 해당 Todo 상태 완료로 변경                                        |
| ![check-todo](https://github.com/somin00/pre-onboarding-12th-1-14/assets/108077643/96c8eefb-5afb-4c05-9582-8e8dbc1bb783) |

### 7.5 Todo 수정하기

|                                                         Todo 수정                                                         |
| :-----------------------------------------------------------------------------------------------------------------------: |
|                                    1. 수정 버튼 클릭 → 취소 버튼 클릭 → 변경 사항 취소                                    |
|                            2. 수정 버튼 클릭 → 제출 버튼 클릭 → 해당 Todo가 수정된 목록 렌더링                            |
| ![modify-todo](https://github.com/somin00/pre-onboarding-12th-1-14/assets/108077643/81531022-42a3-42d5-9515-54d18abef6ad) |

### 7.6 Todo 삭제하기

|                                                         Todo 삭제                                                         |
| :-----------------------------------------------------------------------------------------------------------------------: |
|                                      삭제 버튼 클릭 → 해당 Todo가 삭제된 목록 렌더링                                      |
| ![delete-todo](https://github.com/somin00/pre-onboarding-12th-1-14/assets/108077643/b62c163d-01d2-4a43-a1ff-389e333e99d9) |
