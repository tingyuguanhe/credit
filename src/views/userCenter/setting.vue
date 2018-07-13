<template>
    <div class="setting_page">
        <div class="title">国&nbsp;信&nbsp;诚&nbsp;信&nbsp;宝</div>
        <div class="nr">
            <ul>
                <li class="clearfix">
                    <div>点击续费期限</div>
                    <img src="../../assets/icons//arrow_right.png" alt="">
                </li>
                <li class="clearfix">
                    <router-link :to="{name: 'ChangePsd'}">
                        <div>修改密码</div>
                        <img src="../../assets/icons//arrow_right.png" alt="">
                    </router-link>
                </li>
                <li class="clearfix">
                    <router-link :to="{name: 'CheckCode'}">
                        <div>申请修改填报信息</div>
                        <img src="../../assets/icons//arrow_right.png" alt="">
                    </router-link>
                </li>
                <li class="clearfix">
                    <router-link :to="{name: 'Utils'}">
                        <div>实用工具</div>
                        <img src="../../assets/icons//arrow_right.png" alt=""> 
                    </router-link>     
                </li>
                <li class="clearfix">
                    <router-link :to="{name: 'Help'}">
                        <div>帮助与反馈</div>
                        <img src="../../assets/icons//arrow_right.png" alt="">    
                    </router-link> 
                </li>
            </ul>
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
    .setting_page{
        position: absolute;
        width: 100%;
        left: 0;
        top:0;
        bottom: 0;
        background: #F0EFF5;
        .nr{
            padding: 0.4rem;
            margin-bottom: 1.3rem;
            ul{
                box-shadow: 0px 0px 5px 0px rgba(0,0,0,0.3);
                background: #fff;
                padding: 0.2rem 0.15rem;
                box-sizing: border-box;
                li{
                    a{
                        color:#000;
                    }
                    color:#000;
                    height: 0.8rem;
                    overflow: hidden;
                    font-size: 0.3rem;
                    border-bottom: 2px solid rgba(201,202,202,1);
                    img{
                        float: right;
                        width: 0.2rem;
                        margin: 0.33rem 0.2rem;
                    }
                    div{
                        float: left;
                        text-align: left;
                        width: 86%;
                        line-height: 0.9rem;
                        padding: 0 0 0 0.2rem;
                    }
                    
                }
            }
        }
    }
</style>