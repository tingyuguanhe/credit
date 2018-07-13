<template>
    <div class="user_center">
        <div class="title">国&nbsp;信&nbsp;诚&nbsp;信&nbsp;宝</div>
        <div class="nr">
            <div class="head clearfix">
                <img class="f_left" src="../../assets/imgs/timg.jpg" alt="">
                <ul class="f_left infos">
                    <li class="name">迪丽热巴</li>  
                    <li class="clearfix">
                        <div class="f_left">诚信宝状态：<span class="status">审核中</span></div>
                        <button class="f_left" @click="myIncome">我的收益</button>
                    </li>
                    <li class="clearfix">
                        <div class="f_left">我的二维码：<a href="javascript:;">点击下载</a></div>
                        <div class="f_left gap">我的诚信宝：<a href="javascript:;" class="gray">点击下载</a></div>
                    </li>
                </ul>
            </div>
            <ul class="rights">
                <li class="clearfix">
                    <router-link :to="{ name: 'Setting'}">
                        <div class="f_left left_icon">
                            <img width="25" src="../../assets/icons/1.png" alt="">
                        </div>
                        <div class="f_left clearfix info_wrap">
                            <span class="f_left">基本设置</span>
                            <img class="arrow f_right" src="../../assets/icons/arrow_right.png" alt="">
                        </div>
                    </router-link>
                </li>
                <li class="clearfix">
                    <a href="javascript:;">
                        <div class="f_left left_icon">
                            <img width="26" src="../../assets/icons/2.png" alt="">
                        </div>
                        <div class="f_left clearfix info_wrap">
                            <span class="f_left">我的微店</span>
                            <img class="arrow f_right" src="../../assets/icons/arrow_right.png" alt="">
                        </div>
                    </a>
                </li>
                <li class="clearfix">
                    <a href="javascript:;">
                        <div class="f_left left_icon">
                            <img width="25" src="../../assets/icons/3.png" alt="">
                        </div>
                        <div class="f_left clearfix info_wrap">
                            <span class="f_left">宣传视频</span>
                            <img class="arrow f_right" src="../../assets/icons/arrow_right.png" alt="">
                        </div>
                    </a>
                </li>
                <li class="clearfix">
                    <a href="javascript:;">
                        <div class="f_left left_icon">
                            <img width="18" src="../../assets/icons/4.png" alt="">
                        </div>
                        <div class="f_left clearfix info_wrap">
                            <span class="f_left">地理位置</span>
                            <img class="arrow f_right" src="../../assets/icons/arrow_right.png" alt="">
                        </div>
                    </a>
                </li>
                <li class="clearfix">
                    <a href="javascript:;">
                        <div class="f_left left_icon">
                            <img width="22" src="../../assets/icons/5.png" alt="">
                        </div>
                        <div class="f_left clearfix info_wrap">
                            <span class="f_left">个人荣誉</span>
                            <img class="arrow f_right" src="../../assets/icons/arrow_right.png" alt="">
                        </div>
                    </a>
                </li>
            </ul>

            <!-- 推广工具 -->
            <div class="utils">
                <div class="tip">推广工具：</div>
                <ul>
                    <li class="clearfix">
                        <router-link :to="{name:'ArticleEdit'}">
                            <img src="../../assets/icons/6.png" alt="">
                            <span>软文编辑</span>
                        </router-link>
                    </li>
                    <li class="clearfix">
                        <img src="../../assets/icons/7.png" alt="">
                        <span>海报生成器</span>
                    </li>
                    <li class="clearfix">
                        <img src="../../assets/icons/8.png" alt="">
                        <span>吸粉功能</span>
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
        },
        methods: {
            myIncome(){
                this.$router.push({name: 'MyIncome'});
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
            margin-bottom: 1.3rem;
        }
        .head{
            width: 100%;
            height: 1.8rem;
            background: #fff;
            padding: 0.28rem 0;
            box-sizing: border-box;
            font-size: 0.18rem;
            box-shadow: 0px 0px 5px 0px rgba(0,0,0,0.3);
            img{
                width: 1.1rem;
                height: 1.1rem;
                border-radius: 50%;
                margin: 0 0.3rem 0 0.4rem;
                box-shadow: 0px 0px 5px 0px rgba(0,0,0,0.5);
            }
            ul.infos{
                text-align: left;
                .name{
                    font-size: 0.26rem;
                }
                li:nth-child(2){
                    margin: 0.12rem 0 0.1rem 0;
                }
                button{
                    width: 1.2rem;
                    border-radius: 4px;
                    background: #4070bf;
                    color:#fff;
                    font-size: 0.22rem;
                    margin: 0 0 0 0.6rem;
                }
                a{
                    color: #4070bf;
                    text-decoration: none;
                }
                .gap{
                    margin: 0 0 0 0.2rem;
                }
                .status{
                    color: #e80000;
                }
                .gray{
                    color:#999;
                }
            }
        }
        ul.rights{
            width: 100%;
            padding: 0.3rem;
            background: #fff;
            box-sizing: border-box;
            margin: 0.4rem 0 0 0;
            box-shadow: 0px 0px 5px 0px rgba(0,0,0,0.3);
            a{
                color: #3B3B3B;
            }
            li{
                font-size: 0.3rem;
                color:#3B3B3B;
                height: 0.74rem;
                margin-bottom: 0.16rem;
                .left_icon{
                    text-align: left;
                    margin: 0.04rem 0 0 0;
                    width: 0.6rem;
                }
            }
            .info_wrap{
                height: 0.56rem;
                line-height: 0.5rem;
                width: 86%;
                padding: 0 0.2rem;
                box-sizing: border-box;
                border-bottom: 2px solid rgba(201,202,202,1);
            }
            .arrow{
                width: 0.18rem;
                margin: 0.06rem 0 0 0;
            }
        }
        .utils{
            width: 100%;
            padding: 0.3rem;
            background: #fff;
            box-sizing: border-box;
            margin: 0.4rem 0 0 0;
            box-shadow: 0px 0px 5px 0px rgba(0,0,0,0.3);
            a{
                color: #5F5E5E;
            }
            .tip{
                color:#5F5E5E;
                font-size: 0.3rem;
                font-weight: 500;
                text-align: left;
                margin-bottom: 0.2rem;
            }
            li{
                font-size: 0.26rem;
                text-align: left;
                height: 0.8rem;
                line-height: 0.8rem;
                margin-bottom: 0.05rem;
                img{
                    float: left;
                    width: 0.78rem;
                    margin: 0 0.3rem 0 0;
                }
                span{
                    float: left;
                }
            }
        }
    }
</style>