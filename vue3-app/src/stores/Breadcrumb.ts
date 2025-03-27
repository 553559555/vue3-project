import { defineStore } from 'pinia'

export const useBreadcrumbStore = defineStore('breadcrumb', {
    state: () => {
        return {
            dataList:[],
            isCollapse: false,
        }
    },
    actions: {
        setList(list: []) {
            this.dataList = list
        },
        setIsCollapse() {
            this.isCollapse = !this.isCollapse
        }
    }
})