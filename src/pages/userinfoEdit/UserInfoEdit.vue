<template>
    <div class="userEdit">
        <Header title="账号管理" />
        <div class="input-item">
            <van-field v-model="nickName" label="昵称" placeholder="请输入昵称"/>
            <van-field v-model="introduceSign" label="个性签名" placeholder="请输入个性签名"/>
            <van-field v-model="password" label="请输入密码" />
        </div>
        <van-button type="primary" round color="#ffc400" class="save-btn" block @click="save">保存</van-button>
        <van-button type="primary" round color="#ffc400" class="save-btn" block @click="logout">退出登录</van-button>
    </div>
</template>

<script>
import Header from "../../components/Header.vue";
import {reactive,toRefs } from "vue";
import { Toast } from 'vant';
import {useRouter} from "vue-router";
export default {
    comonents:{ Header },
    setup(){
        const router=useRouter();
        let data=reactive({
            nickName:'',
            password:'',
            introduceSign:"授人以鱼不如授人以渔",
        });

        const logout=()=>{
            localStorage.removeItem("isLogin");
            Toast("退出登录");
            router.push('./login');
        }

        //保存
        const save=()=>{
            if(data.nickName && data.password){
               const userInfo=JSON.parse(localStorage.userInfo);
               const newUserInfo = {
                  用户名:data.nickName||userInfo['用户名'],
                  密码:data.password||userInfo['密码'],   
                    };
                localStorage.setItem('userInfo',JSON.stringify(newUserInfo));
                Toast("修改成功");
                router.push('./mine');
            }else{
                Toast('请输入修改的内容')
            }
        };

        return{
            ...toRefs(data),
            save,
            logout,
        };
    },
};
</script>

<style lang='less' scoped>
/deep/ .van-button--danger {
    background-color: #ffc400;
    border-color:#ffc400;
}
.save-btn{
    width:80%;
    margin:20% auto;
}
</style>