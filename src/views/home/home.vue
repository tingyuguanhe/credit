<template>
    <div class="home_page">
        <div class="head">
            <img class="check" src="../../assets/icons/check.png" alt="">
            <img class="hand" src="../../assets/icons/hand1.png" alt="">
            <img class="daily" src="../../assets/icons/people's_daily.png" alt="">
        </div>
        <div class="infos">
            <ul>
                <li>
                    <label for="">诚信宝号：</label>
                    <span>123456789</span>
                </li>
                <li>
                    <label for="">姓&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;名：</label>
                    <span>迪丽热巴</span>
                </li>
                <li>
                    <label for="">籍&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;贯：</label>
                    <span>新疆</span>
                </li>  
                <li>
                    <label for="">身份证号：</label>
                    <span>62537t2828y4928</span>
                </li>
                <li>
                    <label for="">邮&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;箱：</label>
                    <span>89796234@qq.com</span>
                </li>
                <li>
                    <label for="">手机号码：</label>
                    <span>14567889989</span>
                </li>
                <li>
                    <label for="">微&nbsp;信&nbsp;&nbsp;号：</label>
                    <span>wekfhweuuie</span>
                </li>
            </ul>
            <div class="check_status"><img src="../../assets/icons/check_status.png" alt=""></div>
            <div class="btns">
                <button>一键拨打</button>
                <button>加好友</button>
            </div>
            <img class="photo" src="../../assets/imgs/timg.jpg"> 
        </div>
        <!-- 品牌授权信息 -->
        <div class="products wrap">
            <div class="clearfix brand_head">
                <div class="double_line f_left">
                    <div></div>
                    <div></div>
                </div>
                <div class="f_left brand">
                    品牌授权信息
                </div>
                <div class="double_line f_left">
                    <div></div>
                    <div></div>
                </div>
            </div>

            <ul class="brand_list clearfix">
                <li>
                    <img src="../../assets/icons/22.png" alt="">
                    <div>水肤兰</div>
                </li>
                <li>
                    <img src="../../assets/icons/21.png" alt="">
                    <div>草木天成</div>
                </li>
                <li>
                    <img src="../../assets/icons/23.png" alt="">
                    <div>付爱宝</div>
                </li>
                
            </ul>
        </div>
        <!-- 实用工具 -->
        <div class="tools wrap">
                <div class="clearfix brand_head">
                    <div class="double_line f_left">
                        <div></div>
                        <div></div>
                    </div>
                    <div class="f_left brand">
                        品牌授权信息
                    </div>
                    <div class="double_line f_left">
                        <div></div>
                        <div></div>
                    </div>
                </div>
    
                <ul class="tools_list clearfix">
                    <li>
                        <img src="../../assets/icons/16.png" alt="">
                        <div>水肤兰</div>
                    </li>
                    <li>
                        <img src="../../assets/icons/17.png" alt="">
                        <div>草木天成</div>
                    </li>
                    <li>
                        <img src="../../assets/icons/18.png" alt="">
                        <div>付爱宝</div>
                    </li>
                    <li>
                        <img src="../../assets/icons/19.png" alt="">
                        <div>付爱宝</div>
                    </li>
                    <li>
                        <img src="../../assets/icons/20.png" alt="">
                        <div>付爱宝</div>
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
    .home_page{
        overflow: hidden;
        position: absolute;
        top:0;
        bottom:0;
        width: 100%;
        background: url('../../assets/imgs/bg.jpg') no-repeat;
        background-size: cover;
        .head{
            padding: 0.3rem 0.6rem;
            .check{
                width: 1.8rem;
            }
            .hand{
                width: 0.7rem;
                margin: 0 0.2rem;
            }
            .daily{
                width: 3.2rem;
                vertical-align: bottom;
            }
        }
        .check_status{
            position: absolute;
            top: 32%;
            left: 50%;
            margin: -1.4rem;
            z-index: 10;
            img{
                width: 3rem;
            }
        }
        .infos{
            width: 96%;
            margin: 0 auto;
            background: url('../../assets/imgs/display_bg.jpeg') no-repeat;
            height: 5rem;
            background-size: contain;
            ul{
                text-align: left;
                padding: 1.8rem 0.8rem 0 0.5rem;
                font-size: 0.222rem;
                color:#000;
                font-weight: 500;
                label{
                    display: inline-block;
                    width: 1.2rem;
                }
            }
            .btns{
                width: 1.4rem;
                position: absolute;
                top: 4.1rem;
                left: 4rem;
            }
            button{
                background: #3B9E00;
                width: 1.2rem;
                height: 0.4rem;
                color:#fff;
                border-radius: 5px;
                box-shadow:0px 0px 5px rgba(25,15,8,0.88);
                margin-bottom: 0.1rem; 
            }
            .photo{
                width: 1.5rem;
                height: 1.9rem;
                position: absolute;
                top: 3rem;
                right: 0.5rem;
                border: 2px solid #9c9c9c;
            }
        }

        .wrap{
            font-size: 0.36rem;
            color:#000;
            .brand_head{
                width: 64%;
                margin: 0 auto 0.26rem auto;
            }
            .double_line{
                margin: 0.2rem 0 0 0;
                div{
                    width:2.8em;
                    height: 1px;
                    background: #000;
                    &:first-child{
                        margin-bottom: 0.02rem; 
                    }
                }
            }
            .brand{
                margin: 0 0.2rem;
            }
        }

        ul.brand_list{
            padding: 0 0.1rem;
            li{
                float: left;
                font-size:0.22rem;
            }
            li:nth-child(2n+1){
                width: 30%;
                margin: 0.4rem 0 0 0;
                img{
                    width: 2.2rem;
                }
            }
            li:nth-child(2n){
                width: 40%;
                img{
                    width: 2.7rem;
                }
            }
        }

        .tools{
            margin: 0.4rem 0 0 0;
            
            ul.tools_list{
                li{
                    width: 20%;
                    float: left;
                    font-size: 0.22rem;
                    img{
                        width: 1rem;
                    }
                }
            }
        }
        



    }

</style>