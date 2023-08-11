export type ProductType = {
  id?: string
  name: string
  imageName: string
  sizes: Array<string>
  imagesURL?: Array<string>
  price: number
  colors: Array<string>
  quantity: number
  quantityOrder: number
  highlights: string
  details: string
  descriptions: string
  category: string
  reviews?: {
    average?: number
    totalCount?: number
  }
}
