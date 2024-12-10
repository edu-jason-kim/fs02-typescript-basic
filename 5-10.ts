interface Product {
  id: string;
  name: string;
  price: number;
  salePrice: number;
  memberOnly?: boolean;
}

// type ProductProperty = keyof Product

// 실제 API문서에 사용되는 객체
const productKeys: (keyof Product)[] = [
  "id",
  "memberOnly",
  "name",
  "price",
  "salePrice"
]

const productA: Product = {
  id: 'c-001',
  name: '바람막이',
  price: 129000,
  salePrice: 109000,
}

// TS 연산으로 활용: 특정 값의 타입을 그대로 가져올 때
let b: typeof productA;

// JS 연산으로 활용: 특정 값의 타입에 대한 expression
typeof ''       // 'string'
typeof 1        // 'number'
typeof false    // 'boolean'
typeof {}       // 'object'
typeof productA // 'object'

export {}
