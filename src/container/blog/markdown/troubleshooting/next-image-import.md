---
title: '첫번째 마크다운 포스트'
date: '2025-02-05'
---

## Next 에서 이미지 경로 동적으로 변경하기

### 문제발생

다양한 앱의 정보를 서버에서 받아온 후 그 중 선택한 앱의 정보만 store에 저장하여 내가 지금 선택한 앱이 무엇인지 UI에 노출해야하는 과정에서,

```typescript
// 반환되는 이미지 파일의 타입 정의
interface StaticImageData {
  src: string;
  height: number;
  width: number;
  blurDataURL?: string;
}

// require 의 반환값에 대한 타입
interface RequireContext {
  (id: string): { default: StaticImageData }; // context 자체를 함수처럼 호출한 값 ( eg. imageContext('./file_path.png); )
  keys(): string[]; // 매칭된 모든 파일의 경로 목록 반환
  resolve(id: string): string; // 상대 경로를 절대 경로로 변환
  id: string; // context 모듈의 고유 ID
}

// Webpack의 require.context를 위한 타입
declare var require: {
  context(
    directory: string,
    useSubdirectories: boolean,
    regExp: RegExp
  ): RequireContext;
};

const imageContext: RequireContext = require.context(
  '@/assets/images',
  true,
  /\.(png|jpe?g|svg)$/
);

const getImage = (path: string) => {
  try {
    const imagePath = path.replace('/assets/images/', '');
    return imageContext(`./${imagePath}`).default.src;
  } catch (error) {
    console.error(`이미지를 불러오는 중 오류 발생: ${path}`, error);
    return imageContext('✨기본이미지 경로✨').default.src;
  }
};

export { getImage };
```
