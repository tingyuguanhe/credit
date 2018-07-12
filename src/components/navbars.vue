<template>
    <div class="bottom_navs">
        <ul class="bars">
            <li>
                <img src="../assets/icons/nav1.png" alt="">
                <div>
                    <span>产品展示</span>    
                    
                </div>
            </li>
            <li @click="routeLink('2')">
                <img src="../assets/icons/nav2.png" alt="">
                <div>用户反馈</div>
            </li>
            <li @click="routeLink('3')">
                <img src="../assets/icons/nav3.png" alt="">
                <div>在线申请</div>
            </li>
            <li @click="routeLink('4')">
                <img src="../assets/icons/nav4.png" alt="">
                <div>个人中心</div>
            </li>
        </ul>
        <ul class="list_modal">
            <li v-for="(item,index) in productsData" :key="index" @click="routeLink('1', item)">{{item.name}}</li>
        </ul>
        <div class="arrow">
            <img src="../assets/icons/arrow.png" alt="">
        </div>
    </div>
</template>

<script>
    export default{
        data(){
            return{
                productsList: true,
                productsData:[
                    {
                        id: 1,
                        name: '产品1'
                    },
                    {
                        id: 2,
                        name: '产品2'
                    },
                    {
                        id: 3,
                        name: '产品3'
                    }
                ]
            }
        },
        methods: {
            routeLink(index,item){
                switch (index){
                    case "1":
                        this.$router.push({name:'ProductCenter', params:{id: item.id}});
                    break;
                    case "2":
                        this.$router.push({name:'FeedBack'});
                    break;
                    case "3":
                        this.$router.push({name:'Register'});
                    break;
                    case "4":
                        this.$router.push({name:'UserCenter'});
                    break;
                }
            }
        }
    }
</script>

<style lang="scss">
    .bottom_navs{
        ul.bars{
            background: #555;
            height: 1.24rem;
            position: fixed;
            width: 100%;
            left: 0;
            bottom: 0;
            li{
                position: relative;
                float: left;
                width: 25%;
                padding: 0.16rem 0;
                box-sizing: border-box;
                img{
                    width: 0.62rem;
                }
                div{
                    font-size: 0.22rem;
                    color:#fff;
                }
            }
        }
        ul.list_modal{
            position: absolute;
            left: 0;
            bottom: 1rem;
            background: #ffff;
            border-radius: 5px;
            border: 2px solid #afa8a7;

            width: 1.6rem;
            li{
                height: 0.8rem;
                line-height: 0.8rem;
                border-bottom: 2px solid #afa8a7;
                font-size: 0.26rem;
            }
        }
        .arrow{
            position: absolute;
            bottom: 0.74rem;
            left: 0.65rem;
            img{
                width: 0.34rem;
            }
        }
    }

</style>