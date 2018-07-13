<template>
    <div class="article_edit">
        <div class="title">国&nbsp;信&nbsp;诚&nbsp;信&nbsp;宝</div>
        <div class="nr">   
            <div class="tip">请将文章链接URL粘贴到输入框：</div>
            <textarea class="textarea" name="" v-model="textarea" id="" rows="22" placeholder="iphone版微信只需要轻点输入框左上侧就能出现粘贴选项，安卓版微信则可能需要长按输入框来粘贴"></textarea>
            <div class="line"></div>
            <div class="edit_tip_wrap">
                <div class="edit_tip">说明：</div>
                <p>1、目前仅支持微信文章抓取；</p>
                <p>2、用户需遵循<a href="javascript:;">《微信外部链接内容管理规范》；</a></p>
            </div>
        </div>
        <div class="btns">
            <ul>
                <li @click="clear">清空</li>
                <li>保存</li>
            </ul>
        </div> 
    </div>
</template>

<script>
    export default{
        data(){
            return{
                textarea: null
            }
        },
        methods: {
            clear(){
                this.textarea = "";
            }
        }
    }
</script>

<style lang="scss">
.article_edit{
    .nr{
        padding: 0.3rem;
        text-align: left;
        box-sizing: border-box;
    }
    .tip{
        color:#000;
        font-size: 0.26rem;
        font-weight: 500;
        margin: 0 0 0.2rem 0;
    }
    .textarea{
        width: 99%;
        border:1px solid rgba(238,238,238,1);
        background: #f0f0f0;
        text-align: left;
        font-size: 0.24rem;
        padding: 0.2rem;
        box-sizing: border-box;
        &:focus{
            outline: none;
        }
    }
    .line{
        height: 2px;
        background:rgba(238,238,238,1);
        margin: 0.3rem 0;
    }
    .edit_tip_wrap{
        color:#9A9A9A;
        padding: 0 0.2rem;
        .edit_tip{
            font-size: 0.24rem;  
        }
        p{
            padding: 0.05rem 0;
            margin: 0;
        }
        a{
            color: #0098b4;
        }
    }
    .btns{
        position: absolute;
        width: 100%;
        bottom: 0;
        li{
            float: left;
            width: 50%;
            height: 1rem;
            line-height: 1rem;
            box-sizing: border-box;
            font-size: 0.3rem;
            &:first-child{
                border-top: 1px solid #6A6A6A;
            }
            &:last-child{
                color: #fff;
                background: #4070bf;
            }
        }
    }
    
}
</style>