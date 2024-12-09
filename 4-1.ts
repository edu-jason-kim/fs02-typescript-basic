enum Size {
  XS = 'XS',
  S = 'S',
  M = 'M',
  L = 'L',
  XL = 'XL',
}

interface Product {
  id: string;
  name: string;
  price: number;
  memberOnly?: boolean;
}

interface ClothingProduct extends Product {
  // id: string;
  // name: string;
  // price: number;
  // memberOnly?: boolean;
  size: Size;
}

const product1: ClothingProduct = {
  id: 'c001',
  name: '바람막이',
  price: 129000,
  size: Size.S,
}

const product2: Product = {
  id: 'c002',
  name: '바람막이2',
  price: 139000,
}

interface PrintProduct {
  (product: Product): void;
}

const printProduct: PrintProduct = (product) => {}


interface Id {
  id: string;
}

interface Timestamp {
  createdAt: Date
  updatedAt: Date
}

interface User extends Id, Timestamp {
  name: string
  phoneNo: string
}
