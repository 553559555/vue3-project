import { defineStore } from "pinia";

interface UserInfo {
  userAccount: string;
  userPassword: string;
  isRemember: boolean;
}

export const useUserLoginStore = defineStore("userLogin", {
  state: () => {
    // 从 localStorage 获取保存的用户信息
    const savedInfo = localStorage.getItem("userLoginInfo");
    const defaultInfo: UserInfo = {
      userAccount: "",
      userPassword: "",
      isRemember: false,
    };

    return {
      userInfo: savedInfo ? JSON.parse(savedInfo) : defaultInfo,
    };
  },
  actions: {
    saveUserInfo(info: UserInfo) {
      this.userInfo = info;
      // 保存到 localStorage
      localStorage.setItem("userLoginInfo", JSON.stringify(info));
    },
    clearUserInfo() {
      const emptyInfo: UserInfo = {
        userAccount: "",
        userPassword: "",
        isRemember: false,
      };
      this.userInfo = emptyInfo;
      // 清除 localStorage 中的数据
      localStorage.removeItem("userLoginInfo");
    },
  },
});
