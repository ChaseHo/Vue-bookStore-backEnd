<template>
    <div>
        <!-- <h1>后台管理</h1>
        <div class="nav">
            <ul>
                <li>用户管理</li>
                <li>热门书籍</li>
                <li>文学</li>
                <li>计算机</li>
                <li>历史</li>
            </ul>
        </div> -->
        <div class="row create-btn">
          <div class="col-md-10"></div>
          <div class="col-md-2">
            <router-link :to="{ name: 'CreateItem' }" class="btn btn-primary">新增</router-link>
          </div>
        </div><br />

        <table class="table table-hover">
            <thead>
            <tr>
                <td>ID</td>
                <td>书名</td>
                <td>价格</td>
                <td>作者</td>
                <td>修改</td>
                <td>删除</td>
            </tr>
            </thead>

            <tbody>
                <tr v-for="(item, index) in items" :key="index"> 
                    <td>{{ item._id }}</td>
                    <td>{{ item.name }}</td>
                    <td>{{ item.price }}</td>
                    <td>{{ item.color }}</td>
                    <td><router-link :to="{name: 'EditItem', params: { id: item._id }}" class="btn btn-primary">Edit</router-link></td>
                    <td><button class="btn btn-danger" v-on:click="deleteItem(item._id, index)">Delete</button></td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>

    export default {
        data(){
            return{
                items: []
            }
        },

        created: function()
        {
            this.fetchItems();
        },

        methods: {
            fetchItems()
            {
              let uri = 'http://localhost:4000/items';
              this.axios.get(uri).then((response) => {
                  this.items = response.data;
              });
            },
            deleteItem(id, index)
            {
              let uri = 'http://localhost:4000/items/delete/'+id;
              this.items.splice(index, 1);
              this.axios.get(uri);
            }
        }
    }
</script>

<style lang="" scoped>
    .nav {
        width: 100%;
        height: 45px;
        background: skyblue;
        border-radius: 10px;
    }
    ul {
        list-style: none;
    }
    li {
        display: inline-block;
        width: 100px;
        height: 100%;
        line-height: 45px;
        font-weight: bold;
        color: white;
        text-align: center;
    }
    li:hover{
        background: rgb(5, 130, 233);
    }
    a {
        display: block;
        text-decoration: none;
        color: white;
        padding: .5rem 1rem;
    }
    a:hover {
        background: rgb(5, 130, 233);
    }
    a.active{
        background: rgb(5, 130, 233);
    }
    .nav span{
        float: left;
        width: 100px;
        height: 100%;
        line-height: 45px;
    }
    .create-btn {
        margin-top: 30px;
    }
</style>
