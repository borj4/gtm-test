import {MORE_PRODUCT} from './cartTypes'
import {LESS_PRODUCT} from './cartTypes'

// const initialState = {
//     {
//         name: "Tortilla de Patata",
//         price: 5
//     },
//     {
//         name: "Arroz con cosas",
//         price: 7
//     },
//     {
//         name: "Cachopo leonés",
//         price: 15
//     },
//     {
//         name: "Ensaladilla ucraniana",
//         price: 6
//     },
//     {
//         name: "Paella de verduras",
//         price: 12
//     },
//     {
//         name: "Salmorejo",
//         price: 4
//     },
//     {
//         name: "Sanwich mixto",
//         price: 3
//     },
//     {
//         name: "Torreznos light",
//         price: 6
//     }
// }

const cakeReducer = (state = initialState, action) => {
  switch (action.type) {
    case BUY_CAKE: return {
      ...state,
      numOfCakes: state.numOfCakes - action.payload
    }

    default: return state
  }
}

export default cakeReducer