# Hydration 에러

## 우선, Hydration이란?
- 서버에서 요청한 데이터와 미리 생성한 HTML 파일을 브라우저에서 불러온 후, 받아온 HTML과 JavaScript를 이어주는 과정을 말한다.
- 즉, __메마른__ HTML에 JavaScript라는 __수분을 공급한다는__ 뜻이다.
- 참고
  - https://jaehan.blog/posts/nextjs/Hydration-Error-:-Minified-React-Error-%ED%95%B4%EA%B2%B0%ED%95%98%EA%B8%B0
  - https://nextjs.org/docs/pages/building-your-application/rendering
  - https://react.dev/reference/react-dom/client/hydrateRoot

## Hydration 에러의 원인과 위험
- 서버에서 미리 렌더링되었던 React Tree와 실제로 렌더링된 React Tree에 차이가 존재하면 발생한다.
- 즉, 서버 사이드 렌더링에 의해 만들어진 Tree와 클라이언트 사이드 렌더링에 의해 만들어진 Tree가 서로 다르다는 뜻.
- 이렇게 될 경우, React Tree가 DOM과 동기화에 실패할 수 있으며, 예기치 못한 컨텐츠가 나타날 가능성이 있다.
- 근거: https://nextjs.org/docs/messages/react-hydration-error

## 발생 유형
- 잘못된 HTML 네스팅.
  - `<p>` 태그 안에 `<div>` 태그를 넣는 경우.
  - `<ul>`이나 `<ol>` 안이 아닌 곳에 `<li>`를 넣는 경우.
- 렌더링에 브라우저 전용 객체나 API를 사용함.
  - `window`, `localStorage` 사용.
    - `window` 객체 존재에 따라 (즉, 실행 환경이 브라우저냐 Node냐에 따라) 렌더링이 달라지는 경우.
      - `const Background = () => <div style={{ backgroundColor: window ? 'red' : 'blue' }} />;`
  - `typeof window !== 'undefined'`로 실행 환경 체킹.
- 렌더링에 `new Date()`같은 시간 의존적 API를 사용함.
- CSS-in-JS 관련 설정이 잘못됨.
- 브라우저 확장(Browser Extension)이 HTML을 변경하는 경우.
- Edge나 CDN이 HTML을 변경하는 경우.
- 근거: https://nextjs.org/docs/messages/react-hydration-error#common-causes

## 해결 방법
- `useEffect`를 사용하여 클라이언트 사이드에서만 동작시키도록 만들기.
- `next/dynamic`의 `dynamic` 등등을 통해 특정 컴포넌트의 서버 사이드 렌더링을 비활성화한다.
- 태그에 `suppressHydrationWarning` 속성을 추가하여 Hydration 불일치 경고를 비활성화한다.
- 근거: https://nextjs.org/docs/messages/react-hydration-error#possible-ways-to-fix-it
