<script setup>
import Item_List from './components/Item_List.vue';
import { data } from './components/db/Data'


</script>
<template>
    <p>P.s. Не совсем понял, как должна отображаться правая панель визуализации данных, поэтому сделал в формате `аккардиона`</p>
    <div v-for="(array, index) in data.All_lists" :key="index">
        <Item_List :id_Global="index" />
    </div>
</template>

<style scoped></style>