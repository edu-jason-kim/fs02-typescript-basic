# Typescript
TS는 JS의 슈퍼셋으로, JS의 장점(생태계, 접근성 등)을 유지한채로 정적 타입 시스템을 추가하여 코드의 안정성과 개발 효율성을 높이는 프로그래밍 언어
- JS의 슈퍼셋
- JS의 장점을 유지 (생태계, 접근성 등)
- 정적타입 시스템
- 컴파일 언어

## 코드 안정성
- 코드 실행 전 타입관련 에러 및 잠재 버그를 감지할 수 있다.
  - JS (동적) vs TS (정적)
```ts
// JS
var nums = [1, 2, 3]
nums = 4 // assigned

// TS
var nums = [1,2,3]
nums = 4 // type error
```
- 안정적인 코드베이스 유지
- 실수로 인한 버그 감소

## 개발 경험 향상
- 명확한 타입 정의로 코드의 구조 및 의도 파악 용이 (협업)
- 코드 자동완성, 실시간 타입 검사 등 IDE 지원
- 안전한 리팩토링, 버그 수정비용 감소
```ts
interface User {
  id: string;
  nickname: string;
}

function printUser (user: User) {
  console.log(user.name) // type error
  console.log(user.nickname)
}
```

## 타입스크립트가 실행되는 과정
- TSC는 Typescript Compiler의 약자
- Complie은 하나의 프로그래밍 언어에서 다른 언어로 번역하는 것
  - Web에서는 Transpile 이라고 하기도 한다.
- Typescript 코드를 작성 → TSC를 통해서 type check → JS로 Compile

## 타입을 정하는 법
1. 타입 추론
2. 명시적 타이핑

## Enum (열거형)
- 상수인 값을 나열할 때 사용
- JS에 존재 X
- 타입/값으로서 활용가능

## Interface
- 객체 형태의 타입을 정의할 때 사용

## 타입 별칭
- 변수처럼 타입에 이름을 짓는 기능
- interface와 달리, 객체형태가 아닌 기본형 등 모든 타입에 대해서 정의할 수 있다.
```ts
type Cart = string[]

type SizeL = 100 // 리터럴 타입 형태도 할당가능

interface User {
  name: string
  email: string
  cart: Cart
}
```
- 유지보수에 용이

## Union 타입
- 타입에 대한 'or' 연산
- 객체의 union 타입의 경우 같은 property에 대해서만 참조 가능
- `A | B`
- Enum 타입은 값으로 활용할 수 있는 반면, Union 타입은 타입으로만 활용 가능

## Intersection 타입
- 타입에 대한 'and' 연산
- 객체의 intersection 타입의 경우 모든 객체의 property에 대해서 참조 가능
- `A & B`
