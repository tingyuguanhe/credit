<template>
    <div class="finish_register">
        <div class="title">国&nbsp;信&nbsp;诚&nbsp;信&nbsp;宝</div>
        <div class="nr">
            <div class="success">恭喜您，成功完成认证信息填报！</div>
            <div>
                <img class="code" src="../../assets/imgs/code.png" alt="">
            </div>
            <p class="num">诚信宝号：1231457891234567</p>
            <p class="tip">请保存二维码到手机，扫码关注审核动态。平台会在2个工作日内完成审核，审核通过后，请登录个人账号，使用诚信宝。</p>
            <div class="login_type">
                <div class="tip">登录方式：</div>
                <ul>
                    <li>1.扫描生成二维码，进入个人中心登录；</li>
                    <li> 2.关注微信公众账号，进入登录界面；</li>
                    <li>3.扫描任一诚信宝二维码，进入个人中心登录；</li>
                </ul>
            </div>
            <div>
                <button @click="goHome">进入首页</button>
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
            goHome(){
                this.$router.push({name:'Home'})
            }
        }
    }
</script>
<style lang="scss">
    .finish_register{
        position: absolute;
        width: 100%;
        left: 0;
        top:0;
        bottom: 0;
        background: #4070bf;
        padding: 0 0.18rem;
        box-sizing: border-box;
        .nr{
            margin: 0.1rem 0 0 0;
            background: #fff;
            padding: 0.5rem 0.8rem;
            border-radius: 10px;
            .success{
                color:#E60012;
                font-weight: 500;
                font-size: 0.3rem;
            }
            .code{
                margin: 0.3rem 0 0 0;
                width: 2.4rem;
            }
            p{
                font-size: 0.28rem;
                color:#221815;
            }
            .tip{
                text-align: left;
                margin: 0.5rem 0;
            }
            .login_type{
                color:#030303;
                font-size: 0.26rem;
                .tip{
                    font-size: 0.28rem;
                }
                ul{
                    margin: 0.2rem 0 0 0;
                    text-align: left;
                    li{
                        height: 0.4rem;
                        line-height: 0.4rem;
                    }
                }
            }
            button{
                width: 4rem;
                height: 0.8rem;
                line-height: 0.8rem;
                background: #2E7CD2;
                border-radius: 30px;
                font-size: 0.34rem;
                color: #fff;
                margin: 1rem 0 0.4rem 0;
            }
        }
    }
</style>