---
title: '📕 woo-jinny's handbook'
date: '2025-02-10'
---

## 1. React 라이프 사이클

- 크게 **마운트(Mount),** **업데이트(Update)**, **언마운트(Unmount)**로 구분할 수 있음
- 함수형 컴포넌트 기준으로 마운트, 업데이트, 언마운트를 구분하여 작성하는 법
- `useEffect(() => {}, [])` : 마운트 (Mount)
  - dependency 배열을 빈배열로 두면 마운트시 한번만 실행됨
- `useEffect(() => {}, [state])` : 업데이트 (Update)
  - dependency 배열에 변수가 있으면 그 변수 값이 바뀔때 실행됨
- `useEffect(() => { return () => {}; }, [])` : 언마운트 (Unmount)
  - dependency 배열이 빈배열이고, return 문이 있다면 언마운트 될 때 실행됨

## 2. 스코프와 스코프 체인

- 스코프(Scope) 는 변수의 유효 범위를 의미함
- 크게 **전역 스코프**, **함수 스코프**, **블록 스코프**(ES6 이후) 로 나눌 수 있음
- 스코프 체인(Scope Chain) 은 내부 함수에서 외부 함수의 변수에 접근 할 수 있도록 하는 개념
- 변수를 찾을 때 가장 가까운 스코프에서 찾고, 없으면 상위 스코프로 올라가면서 찾음
- 상위로 올라가며 찾는 단방향으로만 진행됨

## 3. 실행 컨텍스트 (Execution Context)란?

```typescript
// 예시
function first() {
  console.log('A');
  second();
  console.log('B');
}

function second() {
  console.log('C');
}

first();
// 출력 A -> C -> B

// 💡 실행 컨텍스트 흐름
// first() 실행 → first 실행 컨텍스트 생성
// console.log("A") 실행 (Call Stack: first)
// second() 실행 → second 실행 컨텍스트 생성 (Call Stack: first → second)
// console.log("C") 실행 (Call Stack: second)
// second 종료 → first로 돌아감 (Call Stack: first)
// console.log("B") 실행
// first 종료 → Call Stack이 비어짐
```

- JS || TS 스크립트 코드가 실행될 때, 함수의 실행 환경을 관리하는 매커니즘
- 변수객체 , 스코프 체인, 실행되는 컨텍스트의 `this` 값 결정
- 콜스택으로 쌓임

## 4. 스코프와 실행컨텍스트의 차이는?

- 스코프는 변수의 접근 범위를 의미
- 실행컨텍스트는 코드가 실행 될 때 실행환경 매커니즘 관리 개념

## 5. 클로저(Closure)란?

```typescript
// 예시
function outer() {
  let count = 0;

  return function inner() {
    count++;
    console.log(count);
  };
}

const counter = outer(); // 외부 함수 실행 -> inner 함수 반환
counter(); // 출력: 1
counter(); // 출력: 2
```

- 외부 함수의 변수를 내부 함수에서 기억하고 접근 할 수 있는 것
- 활용시 데이터를 은닉화(Private 변수처럼 사용) 할 수 있으며 데이터 보호가 가능함
- React 에 useState 도 클로저를 활용한 대표적인 예라고 할 수 있음

## 6. Promise ?

Promise 는 비동기 작업을 처리할 때 사용하는 객체

- `pending`, `fulfilled`, `rejected` 3가지 상태를 가짐
- `resolve()`가 호출되면 `fulfilled` 상태가 됨
- `reject()`가 호출되면 `rejected` 상태가 됨
- `.then()`, `.catch()`, `.finally()`를 사용하여 후속 처리 할 수 있음

## 7. Promise.all | Promise.allSettled

```typescript
export const fetchFunction = async () => {
  const rs = await fetch('url', {
    cache: 'no-store',
  });

  if (!rs.ok) {
    throw new Error(`failed: ${rs.status}`);
  }
};
```
