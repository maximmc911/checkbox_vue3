<script setup>

import CheckBox from '../../UI/CheckBox.vue'
import { reactive, ref, watchEffect } from 'vue';
import { data } from '../../db/Data'

const props = defineProps({
    id_Global: Number,
    id_Local: Number
})

const emit = defineEmits();

const open = ref(false);
const check = ref(false);
const quality = reactive({
    number: data.All_lists[props.id_Global][props.id_Local].quality
});


const HandleCheck = () => {
    open.value = !open.value
}

const HandleCheckCheckBox = () => {
    check.value = !check.value
    if (check.value) {
        data.All_lists[props.id_Global][props.id_Local].check_box = `arrow`;
    } else {
        data.All_lists[props.id_Global][props.id_Local].check_box = `emptily`
    }
}

watchEffect(() => {
    if (data.All_lists[props.id_Global][props.id_Local].color !== ``) {
        data.All_lists[props.id_Global][props.id_Local].style = '';
        data.All_lists[props.id_Global][props.id_Local].style = `background: ` + data.All_lists[props.id_Global][props.id_Local].color + `;`;
    }
    if (quality.number > 0) {
        data.All_lists[props.id_Global][props.id_Local].quality = quality.number;
    }
    if (data.All_lists[props.id_Global][props.id_Local].check_box == `arrow` ||
        data.All_lists[props.id_Global][props.id_Local].check_box == `emptily`
    ) {
        let check_boxItem = []
        for (const iterator of data.All_lists[props.id_Global]) {
            check_boxItem.push(iterator.check_box)
        }
        if (check_boxItem.filter((e) => e == `arrow`).length == data.All_lists[props.id_Global].length) {
            let target = `arrow`;
            emit("toggle", target);
        }
        if (check_boxItem.filter((e) => e == `arrow`).length > 0 && check_boxItem.filter((e) => e == `arrow`).length < data.All_lists[props.id_Global].length) {
            let target = `dot`;
            emit("toggle", target);
        }
        if (check_boxItem.filter((e) => e == `arrow`).length == 0) {
            let target = `emptily`;
            emit("toggle", target);
        }
    }
})

</script>
<template>
    <div>
        <div class="conteiner">
            <div class="content">
                <div @click="HandleCheckCheckBox">
                    <CheckBox :id_Global="props.id_Global" :id_Local="props.id_Local" :checkboxItem="true" />
                </div>
                <p @click="HandleCheck">item {{ props.id_Local + 1 }}</p>
            </div>
            <div class="content" @click="HandleCheck">
                <p>{{ data.All_lists[props.id_Global][props.id_Local].quality }}</p>
                <div class="color" :style="data.All_lists[props.id_Global][props.id_Local].style"></div>
            </div>
        </div>
        <div class="panel" v-if="open">
            <div class="color_check">
                <p>Цвет:</p>
                <input type="color" name="" id="color" v-model="data.All_lists[props.id_Global][props.id_Local].color">
            </div>
            <div class="quality_check">
                <p>Кол-во:</p>
                <input type="number" id="quality" v-model="quality.number">
            </div>
        </div>
    </div>
</template>


<style scoped>
.conteiner {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 10px;
}

.content {
    display: flex;
    gap: 10px;
    align-items: center;
    font-size: 18px;
}

.panel {
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin-top: 1px;

}

.color_check,
.quality_check {
    display: flex;
    align-items: center;
    gap: 5px;
}

#color {
    width: 25px;
    height: 25px;
}

#quality {
    width: 70px;
    height: 20px;
}

.color {
    width: 15px;
    height: 15px;
}
</style>