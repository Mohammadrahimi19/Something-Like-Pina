<template>
  <div class=" warrper ">
    <h1 class=" text-2xl ">Color is : {{ getState() }}</h1>
    <button class="btn" @click="change()" type="button">Pick yellow</button>
  </div>
</template>

<script setup>
// import { useage } from '@/Composable/ComposableLikePinia';
import { useGlobalStates } from '@/Composable/ComposableLikePinia';
const { getState , setState }= useGlobalStates()
// watchEffect(()=>{
//     
// })
let change =()=>{
  setState('Yellow')
}


</script>

<style scoped>
.btn{
  @apply p-5 rounded-lg bg-yellow-400 drop-shadow-lg text-white hover:bg-slate-200 duration-300   
}
.warrper{
  @apply flex flex-col p-5 border-2 rounded-lg gap-5  w-96
}
</style>