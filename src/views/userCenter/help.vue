<template>
    <div class="help_page">
        <div class="title">国&nbsp;信&nbsp;诚&nbsp;信&nbsp;宝</div>
        <div class="nr">
            <div class="theme">您有什么问题或建议想对我们说？</div>
            <input type="text" v-model="theme" placeholder="您的主题：">
            <textarea class="textarea" name="" v-model="textarea" id="" rows="12" placeholder="您的宝贵意见，就是我们进步的源泉"></textarea>
            <p class="tip">请详细描述您遇到的问题，有助于我们快速定位并解决问题，或留下您宝贵的建议或意见，我们会认真评估！</p>
            <button>问&nbsp;题&nbsp;提&nbsp;交</button>
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
                theme:'',
                textarea:'',
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
        padding: 0.4rem 0.8rem;
        text-align: left;
        .theme{
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
        .textarea{
            width: 99%;
            border:1px solid rgba(238,238,238,1);
            background: #fff;
            text-align: left;
            font-size: 0.24rem;
            padding: 0.2rem;
            box-sizing: border-box;
            &:focus{
                outline: none;
            }
        }
        .tip{
            color: #c0c0c0;
            font-size: 0.27rem;
        }
        button{
            background: #4070BF;
            border-radius: 15px;
            width: 100%;
            height: 0.9rem;
            line-height: 0.9rem;
            color:#fff;
            font-size: 0.4rem;
        }
    }
    
}
</style>