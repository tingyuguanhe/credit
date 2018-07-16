<template>
    <div class="login">
        <img class="logo" src="../../assets/icons/logo.png" alt="">
        <div class="login_form">
            <ul>
                <li>
                    <input type="text" placeholder="请输入注册手机号">
                    <img src="../../assets/icons/user.png" alt="">
                </li>
                <li>
                    <input type="password" placeholder="请输入密码">
                    <img src="../../assets/icons/lock.png" alt="">
                </li>
            </ul>
            <div  class="login_btn">
                <button @click="login">登&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;录</button>
            </div>
            
        </div>
    </div>
</template>

<script>
export default{
    data(){
        return{

        }
    },
    methods: {
        login(){
            console.log('登录逻辑');
        }
    }
}
</script>

<style lang="scss">
.login{
    .logo{
        width: 2.4rem;
        margin: 1.5rem 0 0.6rem 0;
    }
    .login_form{
        padding: 0 0.6rem;
        ul{
            li{
                position: relative;
                input{
                    background: #efefef;
                    height: 1rem;
                    line-height: 1rem;
                    padding: 0 0.9rem;
                    font-size: 0.28rem;
                }
                img{
                    width: 0.4rem;
                    position: absolute;
                    left: 0.3rem;
                    top: 0.45rem;
                }
            }
        }
        .login_btn{
            margin-top: 1rem;
            padding: 0 0.5rem;
            button{
                background: #2E7CD2;
                width: 100%;
                height: 1rem;
                line-height: 1rem;
                color:#fff;
                font-size: 0.34rem;
                border-radius: 10px;
            }
            
        }
    }
}
</style>