// 기본값으로 index 형태로 값이 할당 됨
enum Size {
  XS = 'XS',
  S = 'S',
  M = 'M',
  L = 'L',
  XL = 'XL',
}

console.log(Size.S) // 'S'

function addToCart (id: string, size: Size) {}

addToCart('c001', Size.L)

const stock: {
  [size in Size]?: number
} = {
  XS: 0,
  S: 3,
  M: 0,
  L: 4,
}

export {}
