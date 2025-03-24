<template>
    <div class="home-header">

        <div class="home-header-left">
            <img src="/src/assets/vue.svg" alt="logo" />
            <span>Vue3</span>
        </div>


    </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>
.home-header {
    width: 100%;
    height: 100%;
    background-color: aquamarine;


    .home-header-left {
        width: 200px;
        height: 100%;
        background-color: blue;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;

        img {
            width: 30px;
            height: 30px;
        }
    }
}
</style>