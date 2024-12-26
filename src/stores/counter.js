import {defineStore} from "pinia";
import {computed, ref} from "vue";
import axios from "axios";

export const useCounterStore
    =defineStore('counter',() => {
    // 定义数据
    const count = ref(0)

    // 定义方法
    const increment = () => {
        count.value++
    }

    // getter
    const doubleCount = computed(() => count.value * 2)

    // 异步action
    const list = ref([])
    const getList = async () => {
        const res = await axios.get('http://geek.itheima.net/v1_0/channels')
        list.value = res.data.data.channels
    }


    return{
        count,
        doubleCount,
        increment,
        list,
        getList
    }
})