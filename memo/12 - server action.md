# 서버 액션 (Server Action)
- 반드시 서버에서 동작한다고 보장해주는 함수.
- 비동기 함수여야 한다.
- Next.js 13.4에서 시범 운용을 시작하여, Next.js 14에서 정식으로 추가됨.

## 서버 컴포넌트에서의 사용 방법
- 서버 컴포넌트 내에서 비동기 함수를 선언한다.
- 해당 비동기 함수 내 최상단 줄에 `'use server'` 추가.
- DB 등등 서버 자원에 직접 접근하는 등 서버용 로직 작성.

## 클라이언트 컴포넌트에서의 사용 방법
- 따로 모듈을 만들어 서버 액션 함수를 선언한다.
- 모듈의 최상단 줄에 `'use server'` 추가.
- DB 등등 서버 자원에 직접 접근하는 등 서버용 로직 작성.
- 클라이언트 컴포넌트에서 해당 서버 액션이 든 모듈을 import하여 사용.

## 사용처
- 주로 서버 form 컴포넌트의 action 속성에 쓰인다.
- 그 외에도, button 컴포넌트의 formAction 속성에 쓰일 수 있음.
