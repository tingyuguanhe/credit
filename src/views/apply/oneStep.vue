<template>
    <div class="register_one_step">
        <div class="nr">
            <div class="head clearfix">
                <img class="photo f_left" src="../../assets/imgs/timg.jpg" alt="">
                <div class="f_left text_wrap">
                    <div>来自好友{{name}}</div> 
                    <div>{{num}}的推荐</div> 
                </div>
            </div>
            <div class="form">
                <ul class="phone_check">
                    <li class="clearfix">
                        <label for="">手机</label>
                        <input type="text">
                    </li>
                    <li class="clearfix code">
                        <label for="">验证码</label>
                        <input type="text">
                        <button>获取验证码</button>
                    </li>
                </ul>
            </div>
            <div class="tip">初始密码为注册手机号</div>
            <div class="agree clearfix">
                <span class="f_left check_box"></span>
                <p class="f_left">我已阅读并同意注册条款</p>
            </div>
            <div class="btns">
                <button @click="registerNextStep">下一步</button>
                <button>返回老用户登录</button>
            </div>
        </div>
        <nav-bars></nav-bars>
    </div>
</template>
    
<script>
    import navBars from '@/components/navbars'

    export default{
        components:{navBars},
        data(){
            return{
                name: 'XXXXXXX',
                num:'（18766660909）'
            }
        },
        methods: {
            registerNextStep(){
                this.$router.push({name: 'BaseUserInfo'});
            }
        }
    }
</script>

<style lang="scss">
    .register_one_step{
        position: absolute;
        width: 100%;
        left: 0;
        top:0;
        bottom: 0;
        background: #F0EFF5;
        .nr{
            margin-bottom: 1.3rem;
            .head{
                box-sizing: border-box;
                background: #fff;
                height: 2.3rem;
                padding: 0.4rem 0.8rem 0 0.8rem;
                color: #000;
                font-size: 0.28rem;
                font-weight: 500;
                .photo{
                    width: 1.4rem;
                    height: 1.4rem;
                    border-radius: 50%;
                    border: 1px solid #C9CACA;
                }
                .text_wrap{
                    margin: 0.2rem 0 0 0.4rem;
                    text-align: left;
                    >div{
                        height: 0.48rem;
                        line-height: 0.48rem;
                    }
                }
            }

            .phone_check{
                background: #fff;
                li{
                    line-height: 1rem;
                    padding: 0 0 0 0.24rem;
                    height: 1rem;
                }
                li:first-child{
                    border-bottom: 2px solid #afa8a7;
                }
                label{
                    font-weight:500;
                    font-size: 0.36rem;
                    float: left;
                }
                input{
                    float: left;
                    width: 80%;
                    margin: 0;
                }
                .code{
                    input{
                        width: 50%;
                    }
                }
                button{
                    background: #2E7CD2;
                    width: 2.4rem;
                    height: 1rem;
                    line-height: 1rem;
                    font-size: 0.3rem;
                    color:#fff;
                    border-radius: 8px;
                    float: right;
                }
            }
            .tip{
                color:#2E7CD2;
                font-size: 0.26rem;
                padding: 0 0.22rem;
                text-align: left;
                margin: 0.5rem 0 0.2rem 0;
                font-weight: 500;
            }
            .agree{
                padding: 0 0.22rem;
                .check_box{
                    width: 0.24rem;
                    height: 0.24rem;
                    border:1px solid #21538B;
                    margin-top: 0.05rem;
                }
                p{
                    color: #21538B;
                    font-size: 0.26rem;
                    font-weight: 500;
                    text-align: left;
                    margin: 0 0.1rem;

                }
            }
            .btns{
                margin: 0.8rem 0 0 0;
                button{
                    width: 5rem;
                    height: 0.96rem;
                    line-height: 0.96rem;
                    background: #2E7CD2;
                    border-radius: 10px;
                    font-size: 0.32rem;
                    color: #fff;
                    margin-bottom: 0.3rem;
                }
            }
        }
    }
</style>