import { defineStore } from 'pinia'

export const useBreadcrumbStore = defineStore('breadcrumb', {
    state: () => {
        return {
            dataList:[]
        }
    },
    actions: {
        setList(list: []) {
            this.dataList = list
        }
    }
})