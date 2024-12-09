const codeitmall:{
  stock: { [id: string]: number };
  cart: string[];
  addToCart: (id: string, quantity?: number) => boolean;
  addManyToCart: (quantity: number, ...ids: string[]) => void;
} = {
  stock: {
    c001: 3,
    c002: 1,
  },
  cart: [],
  addToCart,
  addManyToCart,
}

function addToCart (id: string, quantity: number = 1): boolean {
  // 재고가 부족하다면 false 반환
  if (codeitmall.stock[id] < quantity) {
    return false
  }

  codeitmall.stock[id] -= quantity

  // quantity만큼 id를 카트에 넣겠다.
  for (let i = 0; i < quantity; i++) {
    codeitmall.cart.push(id)
  }

  return true
}

function addManyToCart (quantity: number, ...ids: string[]) {
  console.log(quantity) // 1
  console.log(ids) // ['b', 'c', 'd']
}

addManyToCart(1, 'b', 'c', 'd')

export {}
