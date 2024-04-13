<script setup>

import { reactive, ref } from 'vue';
import Arrow from '../icon/Arrow.vue'
import CheckBox from '../UI/CheckBox.vue'
import ListRow from './components/ListRow.vue'
import { data } from '../db/Data'


const props = defineProps({
    id_Global: Number,
})
const toggle = (e) => {
    checkList.checkList = e;
};
const check = ref(true);
const rotate = ref(`transform: rotate(-90deg)`);
const checkList = reactive({
    checkList: `empty`,
    click: true,
});

const HandleCheck = () => {
    check.value = !check.value;
    if (check.value) {
        rotate.value = 'transform: rotate(-90deg)'
    } else {
        rotate.value = `transform: rotate(0deg)`
    }
};

const HandleCheckBox = () => {
    checkList.click = !checkList.click;
    if (checkList.click) {
        checkList.checkList = `arrow`;
        for (const key of data.All_lists[props.id_Global]) {
            key.check_box = `arrow`;
        };
    } else {
        checkList.checkList = `empty`;
        for (const key of data.All_lists[props.id_Global]) {
            key.check_box = `empty`;
        };
    };
};

</script>
<template>
    <div style="width: 300px;">
        <div class="title">
            <div class="arrow_conteiner" :style="rotate" @click="HandleCheck">
                <Arrow />
            </div>
            <CheckBox :checkboxItem="false" :checkList="checkList.checkList" @click="HandleCheckBox" />
            <h2>List {{ props.id_Global + 1 }} </h2>
        </div>
        <div class="panel" v-if="!check">
            <div v-for="(array, index) in data.All_lists[props.id_Global]" :key="index">
                <ListRow :id_Global="props.id_Global" :id_Local="index" @toggle="toggle" />
            </div>
        </div>
    </div>
</template>


<style scoped>
.title {
    display: flex;
    gap: 10px;
    align-items: center;
}

.title h2 {
    font-weight: 100;
}

.checkbox {
    width: 22px;
    height: 22px;
    border: 1px black solid;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
}

.arrow_conteiner {
    width: 20px;
    height: 20px;
    cursor: pointer;
}

.panel {
    padding-left: 60px;
}
</style>