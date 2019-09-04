<template>
    <div class="container">
        <div>
            <h1>后台管理</h1>
            <div class="nav">
                <ul>
                    <span>
                    <router-link :to="{ name: 'UserDisplay'}">
                            用户管理
                        </router-link>
                    </span>
                    <span>
                        <router-link :to="{ name: 'HotBooksDisplay'}">
                        热门书籍
                        </router-link>
                    </span>
                    <span>
                    <router-link :to="{ name: 'DiscountBooksDisplay'}">
                        折扣书籍
                    </router-link>
                    </span>
                    <span>
                    <router-link :to="{ name: 'NewBooksDisplay'}">
                        新书上架
                    </router-link>
                    </span>
                    <span>
                        <router-link :to="{ name: 'LiteratureDisplay'}">
                            文学
                        </router-link>
                    </span>
                    <span>
                        <router-link :to="{ name: 'ComputerDisplay'}">
                            计算机
                        </router-link>
                    </span>
                    <span>
                        <router-link :to="{ name: 'HistoryDisplay'}">
                            历史
                        </router-link>
                    </span>
                    <span>
                        <router-link :to="{ name: 'EconomicsDisplay'}">
                            经济学
                        </router-link>
                    </span>
                    <span>
                        <router-link :to="{ name: 'CategoryDisplay'}">
                            种类
                        </router-link>
                    </span>
                    <span>
                        <router-link :to="{ name: 'TopicDisplay'}">
                            主题
                        </router-link>
                    </span>
                    <span>
                        <router-link :to="{ name: 'CommentDisplay'}">
                            评论
                        </router-link>
                    </span>                    
                </ul>
            </div>
            <transition name="fade">
            <router-view></router-view>
            </transition>
        </div>
    </div>
</template>

<style scoped>
    .fade-enter-active, .fade-leave-active {
      transition: opacity .5s
    }
    .fade-enter, .fade-leave-active {
      opacity: 0
    }

    .nav {
        width: 100%;
        height: 45px;
        background: skyblue;
        border-radius: 10px;
    }
    ul {
        list-style: none;
        height: 100%;
    }
    span {
        display: inline-block;
        width: 100px;
        height: 100%;
        line-height: 45px;
        font-weight: bold;
        color: white;
        text-align: center;
    }
    /* li:hover{
        background: rgb(5, 130, 233);
    } */
    a {
        display: block;
        text-decoration: none;
        color: white;
    }
    a:hover {
        background: rgb(5, 130, 233);
    }
    a.active{
        background: rgb(5, 130, 233);
    }
    .nav span{
        float: left;
        width: 80px;
        height: 100%;
        line-height: 45px;
    }
</style>

<script>

    export default{
    }
</script>
