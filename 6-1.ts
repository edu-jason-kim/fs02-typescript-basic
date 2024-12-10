import axios from "axios"

const shoeSizes: number[] = [230, 240, 250]
shoeSizes.map(shoeSize => {

})

const clothingSizes: string[] = ['M', 'L', 'XL']
clothingSizes.map(clothingSize => {

})

// Generic 타입은 보통 T, U, V 캐릭터를 쓴다.

// 제네릭으로 함수 만들기
function printArray<T> (items: T[]) {
  for (const item of items) {
    console.log(item)
  }
}

// 넘긴 배열의 타입에 따라 generic이 추론됨
printArray([1, 2])
printArray(['a', 'b'])

// 명시적으로 generic 타입 결정
printArray<string>([''])

function forEach<T> (items: T[], callback: (value: T) => void) {
  for (const item of items) {
    callback(item)
  }
}

const numbers = [1, 2, 3]

forEach(numbers, (number) => {
  console.log(number)
})

// 인터페이스 Generic 만들기
interface Product {
  id: string;
  name: string;
  price: number;
}

type ShoeSize = 220 | 230 | 240 | 250 | 260
type ClothingSize = 'L' | 'XL'

interface SizeProduct<T> extends Product {
  sizes: T[]
}

// Type alias 만들기
type ShoeProduct = SizeProduct<ShoeSize>
type ClothingProduct = SizeProduct<ClothingSize>

// interface 만들기
interface IShoeProduct extends SizeProduct<ShoeSize> {
  // 추가 프로퍼티 작성가능
  handmade: boolean
}

const shoe: IShoeProduct = {
  id: 'c-001',
  handmade: true,
  name: '성수 장인 신발',
  price: 279000,
  sizes: [220, 230]
} 

// Type Alias Generic 활용하기
type Pair<T> = [T, T]
const point: Pair<number> = [1, 2]  // [number, number]
const fullname: Pair<string> = ['김', '코드잇'] // [string, string]

// Map
const map = new Map<string, Product>()
map.set('c-001', shoe)

// Set
const productSet = new Set<Product>()
productSet.add(product1)

// axios
axios.get<Product>('/product/1').then((response) => {
  const data = response.data
})

// 다른 유용한 타입들
const record1: { [userId: string]: Product } = {
  'c-001': product1,
}
const record2: Record<string, Product> = {
  'c-001': product1
}

type ShoeProductInfo1 = Pick<IShoeProduct, 'name' | 'sizes' | 'handmade'>
type ShoeProductInfo2 = Omit<IShoeProduct, 'id'>

// Union 제거하기: Exclude
type PromotionCoupon = '프로모션'
type WelcomeCoupon = '웰컴'
type InternalCoupon = '직원전용'

type Coupon = PromotionCoupon | InternalCoupon | WelcomeCoupon
type PublicCoupon = Exclude<Coupon, InternalCoupon>
type Coupon2 = PublicCoupon | InternalCoupon

// Prameter 가져오기
function addToCart(id: string, quantity: number) {}
type AddToCartParameters = Parameters<typeof addToCart>;

// Return Type 가져오기
function addToCart2(id: string, quantity: number): boolean {
  return false
}
type AddToCartResult = ReturnType<typeof addToCart2>

export {}
