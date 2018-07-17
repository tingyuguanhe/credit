<template>
    <div class="change_pad">
        <div class="title">国&nbsp;信&nbsp;诚&nbsp;信&nbsp;宝</div>
        <div class="nr">
            <ul class="psd_wrap">
                <li>
                    <div>原密码</div>
                    <div>
                        <input type="password">
                    </div>
                </li>
                <li>
                    <div>
                        新密码<span class="tip">最少6位</span>
                    </div>
                    <div>
                        <input type="password">
                    </div>
                </li>
                <li>
                    <div>
                        确认密码<span class="tip">最少6位</span>
                    </div>
                    <div>
                        <input type="password">
                    </div>
                </li>
            </ul>
            <div>
                <button>确认修改</button>
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

            }
        }
    }
</script>

<style lang="scss">
    .change_pad{
        position: absolute;
        width: 100%;
        left: 0;
        top:0;
        bottom: 0;
        background: #F0EFF5;
        .nr{
            padding: 0.46rem;
            margin-bottom: 1.3rem;
        }
        ul.psd_wrap{
            text-align: left;
            color:#000;
            font-size: 0.3rem;
            font-weight: 500;
            .tip{
                color: #999;
                margin: 0 0 0 0.3rem;
                font-size: 0.24rem;
            }
            li{
                margin: 0 0 0.1rem 0;
                input{
                    font-size: 0.4rem;
                }
            }
        }
        button{
            background: #4070BF;
            width: 3rem;
            height: 1rem;
            line-height: 1rem;
            color: #fff;
            border-radius: 10px;
            font-size: 0.36rem;
            margin: 0.3rem 0 0 0;
        }
    }
</style>