import { reactive } from "vue";
import { getRandomNumber, getRandomColor } from "../mixin/functions.js";

export const data = reactive({
  All_lists: [[], [], [], [], []],
});

for (const key of data.All_lists) {
  for (let index = 0; index < getRandomNumber(4, 11); index++) {
    key.push({
      id: index,
      quality: getRandomNumber(1, 30),
      color: ``,
      style: `background: ` + getRandomColor() + `;`,
      check_box: `emptily`, // Варианты статуса чекбокса: arrow / dot / emptily
    });
  }
}
