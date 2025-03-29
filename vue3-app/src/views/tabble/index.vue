<template>
    <div style="width: 100%; height: 100%;">
        <el-table :data="dataArray.data" show-overflow-tooltip >
          <el-table-column prop="provinceName" label="省份" ></el-table-column>
          <el-table-column prop="cityName" label="城市" ></el-table-column>
          <el-table-column prop="countyName" label="区域" ></el-table-column>
          <el-table-column prop="name" label="名称"></el-table-column>
          <el-table-column prop="lastFollowUserName" label="用户状态"></el-table-column>
          <el-table-column prop="ctime" label="时间" ></el-table-column>
          <el-table-column label="图片">
            <template #default="scope">
                <el-image :src="scope.row.img" lazy loading="lazy" fit="cover" placeholder style="width: 100px; height: 100px" :preview-src-list="imgs"></el-image>
            </template>
          </el-table-column>
          <el-table-column label="操作">
            <template #default="scope">
                <el-button type="primary" @click="onclick(scope)">修改</el-button>
            </template>
          </el-table-column>
        </el-table>
    </div>
</template>

<script setup lang="ts">

import { reactive, ref, onMounted } from 'vue'

const imgs = ref<string[]>([])

onMounted(() => {
    dataArray.data.map((item) => {
        imgs.value.push(item.img)
    })
    console.log(imgs)
})

const onclick = (e: any) => {
    console.log(e.row.cityName)
}

const dataArray = reactive({
    data: [
        {
            "belongServiceWechat": null,
            "cityId": "3400",
            "cityName": "昆明市",
            "countyId": "3412",
            "countyName": "呈贡区",
            "createUserId": null,
            "ctime": "2022-11-28 16:44:09 111111111111111111111111111111111",
            "hasOrder": false,
            "id": "4",
            "lastFollowTime": "2022-11-28 16:45:28",
            "lastFollowUserId": "1",
            "lastFollowUserName": "超级管理员",
            "name": "花盛锦",
            "provinceId": "3304",
            "provinceName": "云南省",
            "remark": "",
            "source": null,
            "tagCount": 1,
            "telNumber": "11111111111",
            "telNumberAddress": null,
            "utime": "2022-11-28 16:44:09",
            "wechatAccount": "",
            "wechatFriendTypeDictCode": null,
            "wechatName": "",
            "img": "http://cdn.ynhuashengjin.com/system/20221024/fd19e178-6694-4307-a8bb-4f6b6d1620a8.jpg"
        },
        {
            "belongServiceWechat": null,
            "cityId": "3327",
            "cityName": "红河哈尼族彝族自治州",
            "countyId": "3328",
            "countyName": "泸西县",
            "createUserId": null,
            "ctime": "2022-11-25 15:22:10",
            "hasOrder": false,
            "id": "3",
            "lastFollowTime": "2022-11-25 15:23:15",
            "lastFollowUserId": "1",
            "lastFollowUserName": "超级管理员",
            "name": "测试客户1",
            "provinceId": "3304",
            "provinceName": "云南省",
            "remark": "",
            "source": null,
            "tagCount": 1,
            "telNumber": "15398384226",
            "telNumberAddress": null,
            "utime": "2022-11-25 15:22:10",
            "wechatAccount": "",
            "wechatFriendTypeDictCode": null,
            "wechatName": "",
            "img": "http://cdn.ynhuashengjin.com/system/20221024/fd19e178-6694-4307-a8bb-4f6b6d1620a8.jpg"
        }
    ]
})


</script>

<style scoped></style>