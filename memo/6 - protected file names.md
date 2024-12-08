# 보호된 파일명
- Next.js에서 보호받는 파일 이름들.
- 이들은 `app/` 산하에 있을 때에만 보호를 받는다. `app/` 폴더 밖에 있으면 보호받지 못한다.

## page.js
- 파일 경로 기반 라우팅 페이지 생성.
- 예: `/koishi/aggie` 페이지를 생성하려면 `app/koishi/aggie/page.js` 파일을 생성해야 한다.

## layout.js
- 소속된 경로 자체를 포함한 하위 루트의 페이지 컴포넌트를 감싸는 레이아웃 생성.
- 예: `app/koishi/aggie/layout.js`는 `/koishi/aggie` 페이지를 포함한 하위 경로 페이지, 즉 `app/koishi/aggie/page.js`와 `app/koishi/{하위경로}/page.js`의 레이아웃을 담당한다.

## not-found.js
- 소속된 경로 자체를 포함한 하위 루트의 페이지를 찾을 수 없을 때(Not Found 에러가 발생할 때) 표시하는 에러 페이지.

## error.js
- 소속된 경로 자체를 포함한 하위 루트 페이지에서 발생한 기타 에러를 표시하는 페이지.

## loading.js
- 소속된 경로 자체를 포함한 하위 루트 페이지가 로딩될 때를 기다리는 동안 표시할 폴백 페이지.

## route.js
- API 엔드포인트 생성.
- `app/api/route.js`에 `GET` async 함수를 정의하면 `GET /api` API 엔드포인트를 호출할 수 있다.

## 이외에도 보호받는 파일명을 알아보려면?
- https://nextjs.org/docs/app/api-reference/file-conventions
