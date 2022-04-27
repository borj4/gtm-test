import {MORE_PRODUCT} from './cartTypes'
import {LESS_PRODUCT} from './cartTypes'

export const moreProduct = (number = 1) => {
  return {
    type: MORE_PRODUCT,
    payload: number
  }
}

export const lessProduct = (number = 1) => {
  return {
    type: LESS_PRODUCT,
    payload: number
  }
}
