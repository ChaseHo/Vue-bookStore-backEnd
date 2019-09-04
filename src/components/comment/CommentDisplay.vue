<template>
    <div>
        <div class="row create-btn">
          <div class="col-md-10"></div>
          <div class="col-md-2">
            <router-link :to="{ name: 'CommentCreate' }" class="btn btn-primary">新增</router-link>
          </div>
        </div><br />

        <table class="table table-hover">
            <thead>
            <tr>
                <!-- <td>ID</td> -->
                <td>BookId</td>
                <td>用户名</td>
                <td>内容</td>
                <td>评论时间</td>
                <td>编辑</td>
                <td>删除</td>
            </tr>
            </thead>

            <tbody>
                <tr v-for="(item, index) in items" :key="index"> 
                    <td>{{ item.bookid }}</td>
                    <td>{{ item.username }}</td>
                    <td>{{ item.content }}</td>
                    <td>{{ item.create_at }}</td>
                    <td><router-link :to="{name: 'CommentEdit', params: { id: item._id }}" class="btn btn-primary">Edit</router-link></td>
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
              let uri = 'http://localhost:4000/comment';
              this.axios.get(uri).then((response) => {
                  this.items = response.data;
                //   console.log(response.data)
              });
            },
            deleteItem(id, index)
            {
              let uri = 'http://localhost:4000/comment/delete/'+id;
              this.items.splice(index, 1);
              this.axios.get(uri);
            }
        }
    }
</script>

<style lang="" scoped>
    .create-btn {
        margin-top: 30px;
    }
</style>
