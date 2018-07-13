<template>
    <div class="user_center">
        <div class="title">国&nbsp;信&nbsp;诚&nbsp;信&nbsp;宝</div>
        <div class="nr">
            <div class="head clearfix">
                <img class="f_left" src="../../assets/imgs/timg.jpg" alt="">
                <ul class="f_left infos">
                    <li>迪丽热巴</li>  
                    <li class="clearfix">
                        <div class="f_left">诚信宝状态:<span>审核中</span></div>
                        <button class="f_left">我的收益</button>
                    </li>
                    <li>
                        <div>我的二维码：<a href="javascript:;">点击下载</a></div>
                        <div>我的诚信宝：<a href="javascript:;">点击下载</a></div>

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

            }
        }
    }
</script>

<style lang="scss">
    .user_center{
        position: absolute;
        width: 100%;
        left: 0;
        top:0;
        bottom: 0;
        background: #F0EFF5;
        .nr{
            padding: 0.4rem;
        }
        
        .head{
            width: 100%;
            height: 1.8rem;
            background: #fff;
            img{
                width: 1.1rem;
                height: 1.1rem;
                border-radius: 50%;
                margin: 0.35rem 0.4rem 0 0.4rem;
            }
            .infos{
                text-align: left;
            }
        }
    }
</style>