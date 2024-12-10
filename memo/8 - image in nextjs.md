# Next.js에서의 Image
- Next.js에서는 `<img>` 태그도 사용할 수 있으나, Next.js에서 만든 `<Image>` 태그 사용을 권장한다.
- `<Image>` 태그를 사용할 경우...
  - srcset 속성으로 방문하는 기기에 따라 크기가 조정된 이미지를 로딩하도록 보장되고,
  - 가장 최적화된 이미지 포맷인 webp 형태로 표시되고,
  - Lazy Loading을 기본적으로 사용하며 (실제로 보이는 경우에만 이미지가 표시되도록 이미지를 지연 로딩함),
  - priority 속성으로 불필요한 페이지 깜빡임이나 변경 없이 최대한 빨리 로딩되도록 할 수도 있다.
- Next.js의 Image 컴포넌트의 Props를 보려면...
  - https://nextjs.org/docs/pages/api-reference/components/image#props
