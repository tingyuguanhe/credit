<template>
    <div class="bottom_navs">
        <ul class="bars">
            <li @click="showProductList">
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
        <div class="list_modal" v-show="productsList">
            <ul>
                <li v-for="(item,index) in productsData" :key="index" @click="routeLink('1', item)">{{item.name}}</li>
                <li class="add" @click="addNewAuthorize">+</li>
            </ul>
            <div class="arrow">
                <img src="../assets/icons/arrow.png" alt="">
            </div>
        </div>
    </div>
</template>

<script>
    export default{
        data(){
            return{
                productsList: false,
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
            showProductList(){
                this.productsList = !this.productsList;
            },
            routeLink(index,item){
                switch (index){
                    case "1":
                        this.$router.push({name:'ProductCenter', params:{id: item.id}});
                    break;
                    case "2":
                        this.$router.push({name:'FeedBack'});
                    break;
                    case "3":
                        this.$router.push({name:'RegisterOneStep'});
                    break;
                    case "4":
                        this.$router.push({name:'UserCenter'});
                    break;
                }
            },
            addNewAuthorize(){
                this.$router.push({name: 'Authorize'});
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
        .list_modal{
            position: absolute;
            left: 0.1rem;
            bottom: 1.3rem;
            background: #ffff;
            border-radius: 5px;
            border: 2px solid #afa8a7;
            
            li{
                padding: 0 0.5rem;
                height: 0.8rem;
                line-height: 0.8rem;
                border-bottom: 2px solid #afa8a7;
                font-size: 0.26rem;
                &:last-child{
                    border-bottom: none;
                }
            }
            li.add{
                font-size: 0.36rem;
            }
        }
        .arrow{
            position: absolute;
            bottom: -0.34rem;
            left: 50%;
            margin-left: -0.2rem;
            img{
                width: 0.34rem;
            }
        }
    }

</style>