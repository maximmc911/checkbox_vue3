<script setup>

import { ref, watchEffect } from 'vue';
import { data } from '../db/Data.js'

const open = ref(false);
const btnContent = ref(true)
const props = defineProps({
    id_Global: Number,
})
const mixedBlocks = ref([]);


const UpdateMixedBlock = () => {
    mixedBlocks.value.length = 0;
    if (!btnContent.value) {
        for (const iterator of data.All_lists[props.id_Global]) {
            for (let index = 0; index < iterator.quality; index++) {
                if (iterator.check_box == 'arrow') {
                    mixedBlocks.value.push(iterator)
                }
            }
        }
    }
    mixedBlocks.value.sort(() => Math.random() - 0.5);
}

const HandleDecrement = (el) => {
    const newarr = mixedBlocks.value.find((e) => e == el)
    if (newarr !== undefined) {
        for (const iterator of data.All_lists[props.id_Global]) {
            if (iterator.id == el.id) {
                if (iterator.quality > 0) {
                    iterator.quality -= 1;
                    UpdateMixedBlock()
                }
            }
        }
    } else {
        if (el.quality > 0) {
            el.quality -= 1;
        }
    }
}

const HandleCheck = () => {
    open.value = !open.value
}

const HandleCheckButton = () => {
    event.stopImmediatePropagation()
    btnContent.value = !btnContent.value
    UpdateMixedBlock();
}


watchEffect(() => { UpdateMixedBlock() })

</script>
<template>
    <div>
        <div class="select">
            <div class="accordion" @click="HandleCheck">
                <h2 style="font-weight: 100;">
                    List {{ props.id_Global + 1 }}
                </h2>
                <button class="btn" v-if="open" @click="HandleCheckButton">
                    <p v-if="btnContent">Перемешать</p>
                    <p v-else>Сортировать</p>
                </button>
            </div>
            <div class="panel" v-if="open">
                <div v-if="btnContent">
                    <div v-for="(item, index) in data.All_lists[props.id_Global]" :key="index"
                        style="margin-bottom: 10px;">
                        <div style="display: flex; flex-wrap: wrap; gap:3px">
                            <div v-for="(el, index) in item.quality" :key="index">
                                <div v-if="item.check_box == 'arrow'" class="color" :style="item.style"
                                    @click="HandleDecrement(item)">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div v-else>
                    <div style="margin-bottom: 10px; display: flex; flex-wrap: wrap; gap:5px">
                        <div v-for="(item, index) in mixedBlocks" :key="index">
                            <div class="color" :style="item.style" @click="HandleDecrement(item)"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>


<style scoped>
.select {
    width: 300px;
}

.accordion {
    position: relative;
    color: black;
    cursor: pointer;
    padding: 18px;
    width: 100%;
    border: none;
    text-align: left;
    outline: none;
    border: 1px solid black;
    font-size: 15px;
    transition: 0.4s;
    background-color: #ffffff;
}

.accordion:hover {
    background-color: #eee;
}

.panel {
    padding: 18px;
    border: 1px solid black;
    background-color: rgb(255, 250, 250);
}

.btn {
    position: absolute;
    border-radius: 5px;
    background: blue;
    border: none;
    padding: 5px 10px;
    z-index: 10;
    right: 5%;
    bottom: 25%;
    cursor: pointer;
    color: white;
}

.color {
    width: 20px;
    height: 20px;
}
</style>