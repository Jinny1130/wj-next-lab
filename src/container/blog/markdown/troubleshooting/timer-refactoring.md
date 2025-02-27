---
title: '두번째 마크다운 포스트'
date: '2025-02-27'
---

## test second markdown 본문입니다.

second markdown

timer 코드 개선

기존 로직

```typescript
const startAuthTimer = () => {
  let time = 10;

  const interval = setInterval(() => {
    --time;

    const min = Math.floor(time / 60);
    const sec = Math.floor(time % 60);

    const leftMin = min < 10 ? `0${min}` : min;
    const leftSec = sec < 10 ? `0${sec}` : sec;

    setAuthTimer(`${leftMin}:${leftSec}`);

    if (time <= 0) {
      clearInterval(interval);
    }
  }, 1000);
};
```

개선 로직

```typescript
const formatTime = (time: number) => {
  const min = Math.floor(time / 60);
  const sec = time % 60;
  return `${min.toString().padStart(2, '0')}:${sec.toString().padStart(2, '0')}`;
};

const startAuthTimer = () => {
  let time = 180; // 3분으로 변경
  const interval = setInterval(() => {
    time--;
    setAuthTimer(formatTime(time));

    if (time <= 0) {
      clearInterval(interval);
      // 시간 만료 시 처리 로직 추가 가능
    }
  }, 1000);

  // 컴포넌트 언마운트 시 타이머 정리를 위해 반환
  return () => clearInterval(interval);
};
```
