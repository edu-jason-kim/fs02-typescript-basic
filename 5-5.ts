interface Product extends Id {
  name: string;
  price: number;
}

interface Id {
  id: string
}

type TimeStamp = {
  createdAt: Date
  updatedAt: Date
}

type Review = Id & TimeStamp & {
  productId: string;
  userId: string;
  content: string;
}

interface User extends Id {
  username: string;
  email: string;
  createdAt: Date;
  updatedAt: Date;
}

const review: Review = {
  id: 'r-001',
  content: '좋아요',
  productId: 'c-001',
  userId: 'u-001',
  createdAt: new Date(),
  updatedAt: new Date(),
}

const user: User = {
  id: 'u-001',
  email: 'a@a.com',
  name: '홍길동',
  phoneNo: '---',
  username: '홍길동',
  cart: [],
  createdAt: new Date(),
  updatedAt: new Date(),
}
