<template>
    <div class="home-header">
        <div class="home-header-left">
            <img src="/src/assets/vue.svg" alt="logo" />
            <span>Vue3</span>
        </div>
        <div class="home-header-right">

            <icon
                type="Search"
                :size="23"
                color="#000"
            />

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
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;


    .home-header-left {
        width: 200px;
        height: 100%;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;

        img {
            width: 30px;
            height: 30px;
        }

        span {
            font-size: 20px;
            font-weight: bold;
            margin-left: 10px;
        }
    }


    .home-header-right {
        width: 200px;
        height: 100%;
        background-color: blue;
    }
}
</style>