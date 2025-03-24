<template>
    <div id="main" class="home-chart">

    </div>
</template>

<script setup lang="ts">

import * as echarts from 'echarts'
import { onMounted, onUnmounted, nextTick, ref } from 'vue'

let myChart: echarts.ECharts | null = null
const chartInstance = ref<echarts.ECharts | null>(null)

const initChart = () => {
    // 确保DOM已经渲染完成
    nextTick(() => {
        // 确保容器存在
        const chartDom = document.getElementById('main')
        if (!chartDom) return
        
        // 销毁已存在的实例以避免重复
        if (chartInstance.value) {
            chartInstance.value.dispose()
        }
        
        // 初始化图表
        myChart = echarts.init(chartDom)
        chartInstance.value = myChart
        
        // 设置选项
        myChart.setOption({
            title: { text: 'ECharts 入门示例' },
            tooltip: {
                trigger: 'item'
            },
            series: [{
                name: '销量',
                type: 'pie',
                radius: '60%',
                data: [
                    {value: 1, name: '视频广告'},
                    {value: 2, name: '联盟广告'},
                    {value: 3, name: '邮件营销'},
                    {value: 4, name: '直接访问'},
                    {value: 5, name: '搜索引擎'}
                ],
                emphasis: {
                    itemStyle: {
                        shadowBlur: 10,
                        shadowOffsetX: 0,
                        shadowColor: 'rgba(0, 0, 0, 0.5)'
                    }
                }
            }]
        })
        
        // 处理窗口大小变化
        window.addEventListener('resize', handleResize)
    })
}

const handleResize = () => {
    if (chartInstance.value) {
        chartInstance.value.resize()
    }
}

onMounted(() => {
    initChart()
})

onUnmounted(() => {
    // 清理事件监听
    window.removeEventListener('resize', handleResize)
    // 销毁图表实例
    if (chartInstance.value) {
        chartInstance.value.dispose()
        chartInstance.value = null
    }
})
</script>

<style lang="scss" scoped>
.home-chart {
    height: 400px;
    width: 100%;
    box-sizing: border-box;
}
</style>