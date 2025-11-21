import { create } from 'zustand'

const useStore = create((set) => ({
  basket: [],
  addPro: (newPro) => set((state) => {
    let myCheck = newPro
    let status = state.basket.findIndex((val) => val.id === myCheck.id)
    if (status >= 0) {
      alert('product is in the shopping cart')
      return { basket: [...state.basket] };
    } else {
      alert('added✅')  
      return { basket: [...state.basket, newPro] }
    }
  }),
  myPlus: (id) => set((state) => {
    let cloneState = [...state.basket]
    let sample = cloneState.find((val) => val.id === id)
    sample.count = sample.count + 1
    return { basket: [...cloneState] };
  }),

  myMinus: (id) => set((state) => {
    let cloneState = [...state.basket]
    let sample = cloneState.find((val) => val.id === id)
    sample.count = (sample.count > 0) && sample.count - 1
    return { basket: [...cloneState] };
  }),

  remove: (id) => set((state) => {
    if (confirm('sure?')) {
      let cloneState = [...state.basket]
      let sample = cloneState.filter((val) => val.id !== id)
      return { basket: [...sample] };
    } 
  }),


}))
export default useStore