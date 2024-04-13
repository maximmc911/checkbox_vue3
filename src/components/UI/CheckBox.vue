<script setup>

import Arrow from '../icon/Arrow.vue'
import { data } from '../db/Data.js'

const props = defineProps({
    id_Global: Number,
    id_Local: Number,
    checkboxItem: Boolean,
    checkList: String,
})

</script>
<template>
    <div>
        <div class="checkbox" v-if="props.checkboxItem">
            <div class="" v-if="data.All_lists[props.id_Global][props.id_Local].check_box == `arrow`">
                <Arrow />
            </div>
            <div class="" v-else-if="data.All_lists[props.id_Global][props.id_Local].check_box == `emptily`"></div>
        </div>
        <div class="checkbox" v-else-if="props.checkboxItem == false">
            <div class="" v-if="props.checkList == `arrow`">
                <Arrow />
            </div>
            <div class="" v-else-if="props.checkList == `dot`"
                style="width: 10px; height: 10px; border-radius: 50%; background: black;"></div>
            <div class="" v-else-if="props.checkList == `emptily`"></div>
        </div>
    </div>
</template>


<style scoped>
.checkbox {
    width: 22px;
    height: 22px;
    border: 1px black solid;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
}
</style>