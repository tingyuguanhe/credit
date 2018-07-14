<template>
        <div class="placard_list">
            <div class="nr">
                <ul class="clearfix">
                    <li v-for="(item,index) in dataList" :key="index" @click="makePlacard(item)">
                        <img :src="item.img" alt="">
                        <span class="free_tip">会员免费</span>
                        <div class="text clearfix">
                            <span class="f_left">{{item.title}}</span>
                            <span class="f_right">¥{{item.money}}</span>
                        </div>
                        <div class="tip clearfix">
                            <span class="f_left">{{item.tip}}</span>
                            <span class="f_right">{{item.num}}</span>
                        </div>
                    </li>
                   
                </ul>
            </div>
        </div>
    </template>
    
    
    <script>
        export default{
            data(){
                return{
                    dataList:[
                        {
                            id:1,
                            img: require('../../assets/imgs/a.png'),
                            title:'抖音214143',
                            money:'35353',
                            tip:'手机海报',
                            num:'24325'
                        },
                        {
                            id:2,
                            img: require('../../assets/imgs/b.png'),
                            title:'抖音214143',
                            money:'35353',
                            tip:'手机海报',
                            num:'24325'
                        },
                        {
                            id:3,
                            img: require('../../assets/imgs/c.png'),
                            title:'抖音214143',
                            money:'35353',
                            tip:'手机海报',
                            num:'24325'
                        },
                        {
                            id:4,
                            img: require('../../assets/imgs/b.png'),
                            title:'抖音214143',
                            money:'35353',
                            tip:'手机海报',
                            num:'24325'
                        },
                        {
                            id:5,
                            img: require('../../assets/imgs/a.png'),
                            title:'抖音214143',
                            money:'35353',
                            tip:'手机海报',
                            num:'24325'
                        },
                        {
                            id:6,
                            img: require('../../assets/imgs/b.png'),
                            title:'抖音214143',
                            money:'35353',
                            tip:'手机海报',
                            num:'24325'
                        },
                        {
                            id:7,
                            img: require('../../assets/imgs/c.png'),
                            title:'抖音214143',
                            money:'免费',
                            tip:'手机海报',
                            num:'24325'
                        },
                        {
                            id:8,
                            img: require('../../assets/imgs/b.png'),
                            title:'抖音214143',
                            money:'35353',
                            tip:'手机海报',
                            num:'24325'
                        },
                        {
                            id:9,
                            img: require('../../assets/imgs/c.png'),
                            title:'抖音214143',
                            money:'免费',
                            tip:'手机海报',
                            num:'24325'
                        }
                    ]
                }
            },
            methods: {
                makePlacard(item){
                    this.$router.push({name:'MakePlacard', params: {id: item.id}})
                }
            }
        }
    </script>
    <style lang="scss">
    .placard_list{
        position: absolute;
        width: 100%;
        left: 0;
        top:0;
        bottom: 0;
        background: #4070bf;
        padding: 0.18rem;
        box-sizing: border-box;
        .nr{
            background: #fff;
            padding: 0.18rem;
            box-sizing: border-box;
            ul{
                li{
                    position: relative;
                    width: 31.5%;
                    float: left;
                    height: 3.8rem;
                    margin: 0 0.15rem 0.15rem 0;
                    img{
                        width: 100%;
                        height: 3rem;
                    }
                    .free_tip{
                        background: rgba(0, 0, 0, 0.3);
                        width: 1rem;
                        height: 0.35rem;
                        position: absolute;
                        right: 0;
                        top:0;
                        color:#000;
                    }
                    &:nth-child(3n){
                        margin-right: 0;
                    }
                    &:first-child{
                        margin: 0 0.15rem 0 0;
                    }
                    .text{
                        color: #000;
                    }
                    .tip{
                        color: #929292;
                    }
                }
            }
        }
    }
    </style>
    
    