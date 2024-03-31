<script setup>
import {ref,watch,onMounted} from 'vue'
import { RouterView ,useRoute,useRouter,RouterLink} from 'vue-router';
import {useCounterStore} from '@/stores/counter';
console.log(useRoute(),useRouter());
const router=useRouter()
const route=useRoute()
const stores =useCounterStore()
let one =ref(route.meta.title)
let two =ref(route.matched[2].meta.title)
onMounted(()=>{
  
  stores.arrAdd(route.matched[1].children[0])
  console.log(stores.arr);
})
watch(route,()=>{
  one =ref(route.matched[1].meta.title)
  two =ref(route.matched[2].meta.title)
  return {
    one
  }
})

let a=()=>{
  console.log(stores.arr);
}
let yyy=(e)=>{
  stores.arrAdd(e)
  console.log(stores.arr);
}
let rem =(e,index)=>{

  stores.arrRem(e)
  console.log(stores.arr);
}
let go =(e)=>{
  console.log(e);
  router.push(e.path)
}
</script>
<template>
  <div class="home">
    
    <div class="left">
      <span @click="a">{{one}}</span>
        <ul class="one">
          <li v-for=" item in route.matched[0].children" class="oneli">
            <RouterLink replace :to= "item.path" >{{ item.meta.title }}</RouterLink>
          </li>
        </ul>
    </div>
    <div class="con">
      <span>{{ two }}</span>
        <ul  class="two">
          <li  class="twoli">
            <RouterLink replace :to= "item.path" v-for=" (item,index) in route.matched[1].children" @click="yyy(item,index)">{{ item.meta.title }}</RouterLink>
          </li>
        </ul>
    </div>
    <div class="right">
      <div class="box">
          <p v-for=" (item,index) in stores.arr" @click="go(item)">{{ item.meta.title }}<span @click="rem">X</span></p>
        </div>
        <RouterView  />
    </div>
    

  </div>
  
</template>
<style lang="scss" scoped>
.home{
  display: flex;
  width: 100%;
  height: 100%;
  overflow: hidden;
}
.left,.con,.right{
  height: 100%;
  display: flex;
  flex-direction: column;
  width: 200px;
  // flex: 1;
  
}
.left{
  background: #001135;
  color: #eee;
}
.con{
  background: #061d48;
}
.right{
  flex: 1;
}
span{
  display: block;
  height: 100px;
  color: #eee;
}
.box,p{
  display: flex;
}
.one{
  // height: 100%;
  background: #001135;
  color: #eee;
  flex: 1;
}
.two{
  flex: 1;
  background: #061d48;
  display: flex;
  // flex-direction: column;
  // color: #eee;
}

.oneli,.twoli{
  width: 100%;
  height: 50px;
  color: #eee;
  &:hover{
    background: #061d48;
  }
}
  a{
    display: block;
    width: 100%;
    height: 100%;
    color: #eee; 
  }
  p{
    // width:100px;
    height:60px;
    background: #eee;
    border: 1px solid #000;
    // color: #000;
    line-height: 30px;
    padding: 20px;
    margin: 10px;
    position: relative;
    span{
      position: absolute;
      right: 0px;
      top: 0px;
      line-height: 20px;
      color: #000;
    }
  }
</style>