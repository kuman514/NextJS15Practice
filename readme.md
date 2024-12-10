# NextJS15Practice
- Next.js 15를 연습하기 위한 레포지토리.
- [이 강의](https://www.udemy.com/course/nextjs-react-incl-two-paths/?srsltid=AfmBOorE4VmZw9jYvO_4-tKIa8KfsU0MVrhglq49uX-fXsiFXKmGHSMz)에서 배운 것들을 바탕으로, Next.js 15를 연마한다.

## Next.js 15에서 새로워진 점
- 변경점
  - @next/codemod CLI를 통해 Next.js 패키지와 React 패키지를 더욱 간편하게 업그레이드할 수 있다.
  - <중요> 비동기 요청 API (Async Request APIs)
    - 데이터 요청이 필요한 컴포넌트에 한해서 비동기로 처리함으로써 초기 로딩 속도를 개선한다.
    - cookies, headers, draftMode, params, searchParams가 영향을 받음.
  - <중요> 캐싱 기본값 변경
    - GET 라우팅 핸들러와 클라이언트 라우터가 더 이상 기본적으로 캐싱하지 않음.
    - export dynamic = 'force-static' 구문으로 다시 캐싱을 활성화할 수 있음.
  - <중요> React 19 지원
    - React 18을 사용한 Pages Router 하위 호환.
    - React Compiler (시범 단계)
    - Hydration 에러 표시 개선.
  - 터보팩 성능 및 안정성 향상
  - 개발 환경에서 정적 라우팅 표시
    - 개발 환경에서 페이지가 사전에 렌더링되는지를 화면의 하단 모서리에 표시해준다.
  - unstable_after API 추가 (시범 단계)
    - 스트리밍 완료 후 추가적으로 실행할 작업을 비동기적으로 실행할 수 있는 API이다.
  - instrumentation.js API 안정화
    - Next.js 서버의 생명주기에서 성능이나 오류를 모니터링할 수 있게 만드는 API이다.
  - Form (next/form) 컴포넌트
    - HTML의 form에서 확장된 최적화 컴포넌트.
    - 제출(submit) 대상 경로를 미리 불러오고(fetch) 제출한 데이터를 queryString으로 보존시킴.
    - https://nextjs.org/docs/app/api-reference/components/form
  - next.config.ts 지원
    - TypeScript로 Next.js 설정 파일을 작성할 수 있다.
    - 자동 완성 및 타입 안정성을 제공한다.
  - 자체 호스팅 (Self-hosting) 개선
    - 자체 호스팅에서의 캐시 제어(Cache-Control)를 더 많이 제어할 수 있음.
    - 자체 호스팅에서 이미지 최적화 성능이 향상됨.
  - 서버 액션 보안 강화
    - 서버 액션이 공개 엔드포인트가 되는 것을 방지하게 해주는 기능 추가.
  - 외부 패키지 번들링 최적화
  - ESLint 9 지원
  - 빌드 시간 단축 및 개발 환경 성능 향상
- 출처
  - https://nextjs.org/blog/next-15
  - https://www.heropy.dev/p/n7JHmI

## 내용 메모
1. [왜 Next.js를 사용하는가?](https://github.com/kuman514/nextjs15practice/blob/main/memo/1%20-%20why%20nextjs.md)
2. [Next.js와 React의 차이](https://github.com/kuman514/nextjs15practice/blob/main/memo/2%20-%20nextjs%20vs%20react.md)
3. [Pages Router와 App Router의 차이](https://github.com/kuman514/nextjs15practice/blob/main/memo/3%20-%20pages%20router%20vs%20app%20router.md)
4. [서버 컴포넌트](https://github.com/kuman514/nextjs15practice/blob/main/memo/4%20-%20server%20component.md)
5. [Next.js에서의 Anchor](https://github.com/kuman514/nextjs15practice/blob/main/memo/5%20-%20anchor%20in%20nextjs.md)
6. [보호된 파일명](https://github.com/kuman514/nextjs15practice/blob/main/memo/6%20-%20protected%20file%20names.md)
7. [레이아웃](https://github.com/kuman514/nextjs15practice/blob/main/memo/7%20-%20layout.md)
8. [Next.js에서의 Image](https://github.com/kuman514/nextjs15practice/blob/main/memo/8%20-%20image%20in%20nextjs.md)
