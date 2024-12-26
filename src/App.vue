<script setup>
import {useCounterStore} from "@/stores/counter.js";
import {onMounted} from "vue";
import {storeToRefs} from "pinia";
const counterStore = useCounterStore();

// 直接解构赋值,响应式会丢失
// const {count, doubleCount, increment} = counterStore;
// 保持响应式
const {count,doubleCount}=storeToRefs(counterStore);
// 对于方法需要从原来的counterStore中解构赋值
const {increment} = counterStore;

onMounted(() => {
  counterStore.getList();
  console.log(counterStore.list);
});
</script>

<template>
<button @click="counterStore.increment">{{counterStore.count}}</button>
  <br>
  <h1 >{{counterStore.doubleCount}}</h1>
  <ul>
    <li v-for = "item in counterStore.list" :key="item.id">{{item.name}}</li>
  </ul>
</template>

<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
