<template>
    <div class="user_feedback">
        <div class="title">国&nbsp;信&nbsp;诚&nbsp;信&nbsp;宝</div>
        <div class="nr">
            <ul class="clearfix feedback_list">
                <li v-for="(item,index) in dataList" :key="index">
                    <img :src="item.imgUrl" alt="">
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
                dataList:[
                    {
                        imgUrl: require('../../assets/imgs/img1.png'),
                        id: 1
                    },
                    {
                        imgUrl: require('../../assets/imgs/img1.png'),
                        id: 1
                    },
                    {
                        imgUrl: require('../../assets/imgs/img1.png'),
                        id: 1
                    },
                    {
                        imgUrl: require('../../assets/imgs/img1.png'),
                        id: 1
                    },
                    {
                        imgUrl: require('../../assets/imgs/img1.png'),
                        id: 1
                    },
                    {
                        imgUrl: require('../../assets/imgs/img1.png'),
                        id: 1
                    },
                    {
                        imgUrl: require('../../assets/imgs/img1.png'),
                        id: 1
                    },
                    {
                        imgUrl: require('../../assets/imgs/img1.png'),
                        id: 1
                    }
                ]
            }
        }
    }
</script>

<style lang="scss">
.user_feedback{
    margin-bottom: 1.5rem;
    .nr{
        padding: 0.15rem;
        box-sizing: border-box;
    }
    ul.feedback_list{
        li{
            float: left;
            width: 32%;
            margin: 0 0.08rem 0.1rem 0;
            img{
                width: 100%;
                height: 3.4rem;
            }
        }
        li:nth-child(1){
            width: 49%;
            margin: 0 0.1rem 0 0;
            img{
                height: 5.3rem;
            }
        }
        li:nth-child(2){
            width: 49%;
            margin-right: 0;
            img{
                height: 5.3rem;
            }
            
        }
        
    }
}

</style>