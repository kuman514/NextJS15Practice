# Next.js 에러 처리 방법
- 해당하는 페이지에 `error.js`를 추가하여 에러 처리를 렌더링할 수 있게 한다.
- 이 때 `error.js`의 컴포넌트는 무조건 클라이언트 컴포넌트여야 한다.
- 이는 Next.js에서, 페이지가 서버에서 로딩된 후, 클라이언트 사이드에서 발생하는 오류를 포함한, 해당 컴포넌트에서 발생하는 모든 오류를 잡을 수 있도록 보장하기 때문이라고 한다.
