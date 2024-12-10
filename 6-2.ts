//  조건식 ? 참인 경우 반환값 : 거짓인 경우 반환값
//  isHandmade ? '장인이 만든' : '공장에서 생성된'

// 예시 1: 
// T가 number를 확장한다면? => T가 숫자라면?
type IsNumber<T> = T extends number ? '숫자입니다.' : '숫자가 아닙니다.'
const a: IsNumber<'abc'> = '숫자가 아닙니다.'

// 예시 2:
type IsArray<T> = T extends any[] ? true : false
const b: IsArray<[]> = true

// 예시 3:
function foo<T> (value: T): T extends string ? string : number {
  if (typeof value === 'string') {
    return '기본 문자열 값' as any
  } else {
    return 0 as any
  }
}

foo('abfc')
foo(123)

// infer 사용: 해당 위치의 타입을 추론하여 가르킨다.

type ArrayElementType<T> = T extends (infer U)[] ? U : null

// T = number[]
// 조건식: T extends (??)[] -> 배열 맞음!! 
// 맞다면 (??) 자리의 타입을 추론하여 U로 할당한다. -> infer U
type ArrayElement = ArrayElementType<number[]>

// T = string
// 조건식: T extends [] => 배열이 아님, false
// null이 타입으로 지정됨
type ArrayElement2 = ArrayElementType<string>


// infer 사용 예시 2
type UnwrapPromise<T> = T extends Promise<infer U> ? U : T

type Result = UnwrapPromise<Promise<string>> // T자리에 Primse<string>
type Result2 = UnwrapPromise<string> // T자리에 string

// infer 사용 예시 3
type ExtractPropertyType<T, K extends keyof T> = 
  T extends { [key in K]: infer U } ? U : never

interface Product {
  id: string;
  name: string;
  price: number
}

type NameType = ExtractPropertyType<Product, 'name'>    // string
type PriceType = ExtractPropertyType<Product, 'price'>  // number

// infer 사용예시 4
type GetReturnType<T> = T extends (...args: any[]) => infer U ? U : never;

function bar(): boolean {
  return false
}

type ResultA = GetReturnType<typeof bar>  // boolean
type ResultB = ReturnType<typeof bar>     // boolean

export {}
