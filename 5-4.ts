enum ClothingSize {
  S = 'S',
  M = 'M',
  L = 'L',
  XL = 'XL',
}

type ShoeSize = 220 | 230 | 240 | 250 | 260 | 270

console.log(Object.keys(ClothingSize))

interface Product {
  id: string
  name: string
  price: number
}

interface ClothingProduct extends Product {
  sizes: ClothingSize[]
  color: string
}

interface ShoeProduct extends Product {
  sizes: ShoeSize[]
  handmade: boolean
}

function printSizes(product: ClothingProduct | ShoeProduct) {
  const availableSizes = product.sizes.join(', ')
  console.log(`구매가능 사이즈: ${availableSizes}`)

  // color 프로퍼티가 product에 존재한다면 -> ClothingProduct
  if ('color' in product) {
    console.log(`색상: ${product.color}`)
  }

  // handmade 프로퍼티가 product에 존재한다면 -> ShoeProduct
  if ('handmade' in product) {
    console.log(
      product.handmade
        ? '이 신발은 장인이 만들었습니다.'
        : '이 신발은 공장에서 생산됐습니다.'
    )
  }
}

export {}