<template>
    <div class="bottom_navs">
        <ul>
            <li>
                <img src="../assets//icons/nav1.png" alt="">
                <div>产品展示</div>
            </li>
            <li>
                <img src="../assets//icons/nav2.png" alt="">
                <div>用户反馈</div>
            </li>
            <li>
                <img src="../assets//icons/nav3.png" alt="">
                <div>在线申请</div>
            </li>
            <li>
                <img src="../assets//icons/nav4.png" alt="">
                <div>个人中心</div>
            </li>
        </ul>
    </div>
</template>

<style lang="scss">
    .bottom_navs{
        ul{
            background: #555;
            height: 1.24rem;
            position: fixed;
            width: 100%;
            left: 0;
            bottom: 0;
            li{
                float: left;
                width: 25%;
                padding: 0.16rem 0;
                box-sizing: border-box;
                img{
                    width: 0.62rem;
                }
                div{
                    font-size: 0.222rem;
                    color:#fff;
                }
            }
        }
    }

</style>