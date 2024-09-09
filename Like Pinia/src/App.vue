<script setup>
import HelloWorld from './components/HelloWorld.vue'
import TestTow from './components/TestTow.vue';
import TestThree from './components/TestThree.vue';
</script>

<template>
  <div >
    <div class="flex  container justify-around   border-2 rounded-md border-dashed">
      <TestTow />
      <HelloWorld />
       <TestThree/>
    </div>
  </div>

</template>

<style></style>