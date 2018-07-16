<template>
    <div class="income_page">
        <div class="title">国&nbsp;信&nbsp;诚&nbsp;信&nbsp;宝</div>
        <div class="nr">
            <p>我的收益</p>
            <div class="total">
                <span>总收益：{{total}}元</span>
                <button>提&nbsp;&nbsp;现</button>
            </div>
            <div class="income">
                <!-- 一级受益人 -->
                <div>
                    <div class="head">一级收益： {{firstData.length}}人</div>
                    <ul>
                        <li v-for="(item,index) in firstData" :key="index">
                            <span>{{item.name}}</span>
                            <span class="money">{{item.money}}元</span>
                        </li>
                    </ul>
                </div>
                <!-- 二级受益人 -->
                <div class="income_wrap">
                    <div class="head">一级收益： {{secondData.length}}人</div>
                    <ul>
                        <li v-for="(item,index) in secondData" :key="index">
                            <span>{{item.name}}</span>
                            <span class="money">{{item.money}}元</span>
                        </li>
                    </ul>
                </div>
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
                total: '***',
                firstData:[
                    {
                        name:'李**',
                        money: '180'
                    },
                    {
                        name:'王**',
                        money: '180'
                    }
                ],
                secondData:[
                    {
                        name:'张**',
                        money: '180'
                    },
                    {
                        name:'王**',
                        money: '180'
                    },
                    {
                        name:'吴**',
                        money: '380'
                    }
                ]
            }
        }
    }
</script>

<style lang="scss">
    .income_page{
        position: absolute;
        width: 100%;
        left: 0;
        top:0;
        bottom: 0;
        background: #4070bf;
        padding: 0 0.18rem;
        box-sizing: border-box;
        .nr{
            background: #fff;
            padding: 0.3rem 1.2rem 1rem 1.2rem;
            border-radius: 10px;
            p{
                font-size: 0.45rem;
                color:#000;
                font-weight: 500;
                padding: 0;
                margin-top: 0;
            }
            .total{
                text-align: left;
                margin: 0.6rem 0 0.4rem 0;
                span{
                    color:#221815;
                    font-size: 0.32rem;
                }
                button{
                    width: 1.6rem;
                    background: #4070BF;
                    height: 0.54rem;
                    line-height: 0.54rem;
                    font-size: 0.3rem;
                    color:#fff;
                    border-radius: 5px;
                    margin: 0 0 0 0.4rem;
                }
            }

            .income{
                text-align: left;
                color: #4070bf;
                font-size: 0.32rem;
                .head{
                    color: #221815;
                    font-size: 0.32rem;
                }
                .money{
                    margin: 0 0 0 0.8rem;
                }
            }
            .income_wrap{
                margin: 0.5rem 0 0 0;
            }
        }
    }
</style>