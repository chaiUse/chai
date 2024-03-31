import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useCounterStore = defineStore('counter', () => {
  const arr = ref<any>([])
  
  let arrAdd =(e:any)=>{
    arr.value.push(e)
  }
  let arrRem=(e:any)=>{
    arr.value.splice(arr.value.indexOf(e),1)
  }


  return { arr,arrAdd,arrRem}
})
