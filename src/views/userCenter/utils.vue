<template>
    <div class="utils_page">
        <div class="title">国&nbsp;信&nbsp;诚&nbsp;信&nbsp;宝</div>
        <div class="nr">
            <ul>
                <li class="clearfix" v-for="(item,index) in data" :key="index">
                    <div class="f_left clearfix">
                        <div class="f_left icon">
                            <img :src="item.iconUrl" alt="">
                        </div>
                        <div class="name f_right">{{item.name}}</div>
                    </div>
                    <div class="switch f_right">
                        <span class="bg" v-if="item.status">
                            <span class="round open"></span>
                        </span>
                        <span class="bg close_bg" v-else>
                            <span class="round close"></span>
                        </span>
                    </div>    
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
                data:[
                    {
                        name:'查快递',
                        iconUrl: require('../../assets/icons/9.png'),
                        status: true
                    },
                    {
                        name:'买车票',
                        iconUrl:require('../../assets/icons/10.png'),
                        status: true
                    },
                    {
                        name:'滴滴出行',
                        iconUrl:require('../../assets/icons/11.png'),
                        status: true
                    },
                    {
                        name:'美团外卖',
                        iconUrl:require('../../assets/icons/12.png'),
                        status: true
                    },
                    {
                        name:'蘑菇街女装',
                        iconUrl:require('../../assets/icons/13.png'),
                        status: true
                    },
                    {
                        name:'唯品会',
                        iconUrl:require('../../assets/icons/14.png'),
                        status: false
                    },
                    {
                        name:'摩拜单车',
                        iconUrl:require('../../assets/icons/15.png'),
                        status: false
                    },
                    
                ]
            }
        }
    }
</script>

<style lang="scss">
    .utils_page{
        position: absolute;
        width: 100%;
        left: 0;
        top:0;
        bottom: 0;
        background: #F0EFF5;
        .nr{
            padding: 0.4rem 0.2rem;
            text-align: left;
            ul{
                li{
                    height: 1.3rem;
                    border-bottom: 2px solid rgba(222,222,222,1);
                    color: #000;
                    font-size: 0.38rem;
                    padding: 0 0.1rem 0 0.3rem;
                    .icon{
                        width: 2.6rem;
                    }
                    img{
                        margin: 0.2rem 0 0 0;
                        width: 0.9rem;
                    }
                    
                    .name{
                        line-height: 1.3rem;
                    }
                    .switch{
                        .bg{
                            position: relative;
                            display: inline-block;
                            background: #4070BF;
                            width:1.4rem;
                            height: 0.7rem;
                            border-radius:10px;
                            margin: 0.28rem 0 0 0;
                        }
                        .close_bg{
                            background: #B7B7B7;
                        }
                        .round{
                            width: 0.7rem;
                            height: 0.7rem;
                            border-radius: 50%;
                            position: absolute;
                            top:0;
                            background: #fff;
                            border:1px solid #6A6A6A;
                            box-shadow:2px 0px 0px rgba(4,0,0,0.13);
                        }
                        .open{
                            right: -0.15rem;
                        }
                        .close{
                            left: -0.15rem;
                        }
                    }

                    &:nth-child(1){
                        img{
                            width: 1.1rem;
                        }
                    }
                    
                }
            }
        }
    }
</style>
