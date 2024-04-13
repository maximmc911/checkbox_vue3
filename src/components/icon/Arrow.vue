<template>
        <div class="arrow">
        </div>
</template>

<style scoped>
.arrow {
        position: relative;
        display: inline-block;
        width: 18px;
        height: 18px;
}

.arrow::before {
        position: absolute;
        left: 0;
        top: 20%;
        height: 80%;
        width: 3px;
        background-color: #161718;
        content: '';
        transform: translateX(10px) rotate(-45deg);
        transform-origin: left bottom;
}

.arrow::after {
        position: absolute;
        left: 0;
        bottom: 0;
        height: 3px;
        width: 80%;
        background-color: #1a1b1c;
        content: '';
        transform: translateX(10px) rotate(-45deg);
        transform-origin: left bottom;
}
</style>