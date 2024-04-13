<script setup>

import CheckBoxItems from './ItemsCheckbox/CheckBoxItems.vue';
import AccordionItems from './itemsAccordion/AccordionItems.vue';

const props = defineProps({
  id_Global: Number,
})
</script>

<template>

  <div class="container">
    <CheckBoxItems :id_Global="props.id_Global" />
    <AccordionItems :id_Global="props.id_Global" />
  </div>

</template>

<style scoped>
.container {
  margin: 50px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 150px;
}
</style>