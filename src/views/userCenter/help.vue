<template>
    <div class="help_page">
        <div class="title">国&nbsp;信&nbsp;诚&nbsp;信&nbsp;宝</div>
        <div class="nr">
            <div class="tip">您有什么问题或建议想对我们说？</div>
            <input type="text" placeholder="您的主题：">
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
.help_page{
    position: absolute;
    width: 100%;
    left: 0;
    top:0;
    bottom: 0;
    background: #F0EFF5;
    .nr{
        padding: 0.4rem;
        text-align: left;
        .tip{
            font-size: 0.28rem;
            color:#286F99;
            font-weight: 500;
            margin: 0.4rem 0 0 0;
        }
        input{
            height: 0.8rem;
            width: 100%;
            line-height: 0.8rem;
            padding: 0 0.2rem;
            background: #fff;
            border-radius: 5px;
            font-size: 0.26rem;
            border:none;
            box-sizing: border-box;
            margin: 0.2rem 0;
        }
    }
    
}
</style>