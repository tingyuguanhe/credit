<template>
    <div class="make_placard">
        <img src="../../assets/imgs/b.png" alt="">
        <img class="code" src="../../assets/imgs/code.png" alt="">
        <ul>
            <li @click="goBack">返回</li>
            <li @click="makePlacard">保存海报</li>
        </ul>
    </div>
</template>


<script>
    export default{
        data(){
            return{
                
            }
        },
        methods: {
            makePlacard(){
                
            },
            goBack(){
                this.$router.go(-1);
            }
        }
    }
</script>
<style lang="scss">
.make_placard{
    position: absolute;
    width: 100%;
    left: 0;
    top:0;
    bottom: 0;
    box-sizing: border-box;
    overflow: hidden;
    .code{
        position: absolute;
        top: 45%;
        left: 23%;
        width: 1.9rem;
    }
    ul{
        
        li{
            float: left;
            width: 50%;
            height: 1.2rem;
            line-height: 1rem;
            font-size: 0.3rem;
            &:first-child{
                background: #fff;
                color:#000;
                border-top: 1px solid #bcbcbc;
            }
            &:last-child{
                background: #4070bf;
                color:#fff;
            }
        }
    }
}
</style>

