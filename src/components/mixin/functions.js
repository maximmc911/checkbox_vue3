// Генератор случайных чисел в определенном интервале, где min - вкючается в интервал, а max - не включается

export const getRandomNumber = (min, max) => {
  return Math.floor(Math.random() * (max - min) + min);
};

// Генератор случайных цветов

export const getRandomColor = () => {
  let letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
};
