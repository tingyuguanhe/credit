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
                    font-size: 0.36rem;
                    color:#fff;
                    border-radius: 8px;
                    float: right;
                }
            }
        }
    }
</style>