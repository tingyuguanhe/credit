<template>
    <div class="article_library">
        <div class="title">国&nbsp;信&nbsp;诚&nbsp;信&nbsp;宝</div>
        <div class="nr">
            <div class="head clearfix">
                <span class="f_left">
                    分类
                    <img class="down_arrow" src="../../assets/icons/down_arrow.png" alt="">
                </span>
                <span class="f_right">抓取</span>
            </div>
            <ul class="article_list">
                <li v-for="(item, index) in dataList" :key="index">
                    <div class="article_title">{{item.title}}</div>
                    <div>{{item.content}}</div>
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
                        title:'文章标题111111',
                        content:'文章内容文章内容文章内容文章内容文章内容文章内容文章内容'
                    },
                    {
                        id:2,
                        title:'文章标题33333',
                        content:'文章内容文章内容文章内容文章内容文章内容文章内容文章内容'
                    },
                    {
                        id:3,
                        title:'文章标题1222211',
                        content:'文章内容文章内容文章内容文章内容文章内容文章内容文章内容'
                    },
                    {
                        id:4,
                        title:'文章标题144444441',
                        content:'文章内容文章内容文章内容文章内容文章内容文章内容文章内容'
                    },
                    {
                        id:5,
                        title:'文章标题33333',
                        content:'文章内容文章内容文章内容文章内容文章内容文章内容文章内容'
                    },
                    {
                        id:6,
                        title:'文章标题1222211',
                        content:'文章内容文章内容文章内容文章内容文章内容文章内容文章内容'
                    },
                    {
                        id:7,
                        title:'文章标题144444441',
                        content:'文章内容文章内容文章内容文章内容文章内容文章内容文章内容'
                    }
                ]
            }
        }
    }
</script>

<style lang="scss">
.article_library{
    .nr{
        .head{
            height: 1.1rem;
            line-height: 1.1rem;
            background: #ccc;
            width: 100%;
            font-size: 0.34rem;
            color:#000;
            padding: 0 1rem;
            box-sizing: border-box;
            .down_arrow{
                width: 0.3rem;
            }
        }
        ul.article_list{
            margin: 0.6rem 0 0 0;
            li{
                border-top: 1px solid #ccc;
                font-size: 0.28rem;
                text-align: left;
                color: #ccc;
                padding: 0 0.3rem 0.3rem 0.1rem;
                .article_title{
                    font-weight: 500;
                    color:#000;
                    font-size: 0.32rem;
                    height: 0.8rem;
                    line-height: 0.8rem;
                }

            }
        }
    }
}
</style>