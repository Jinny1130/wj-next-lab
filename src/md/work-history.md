## 2025

#### 2/25

[랜딩 v2 NEXT 마이그레이션]

- 이벤트 페이지 작업 완 (2/20 ~ 25) [O]
- 청구서 체험하기 프로세스 작업시작 [O]
- 딥링크 파일때문에 webpack 설정 바꾸는 작업 []

```typescript
	// assets
	new CopyWebpackPlugin([
		{
			from: path.resolve(__dirname, '../src/assets'),
			to: config.dev.assetsSubDirectory,
			ignore: ['.*']
		}
	]),
```
