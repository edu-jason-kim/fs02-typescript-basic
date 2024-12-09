type PrintProduct = () => void

// 함수 반환에서의 null vs undefined
// 1. undefined는 return 값을 정의하지 않으면 자동으로 반환되는 값 (void로 작성하는게 컨벤션)
// 2. null은 return 값으로 명시적으로 null을 반환하도록 해야함
const foo = () => {
  return 
} // undefined

const bar = () => {
  return null
} // null

export {}
