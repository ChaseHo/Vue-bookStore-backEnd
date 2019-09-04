<template>
    <div>
        <div class="row create-btn">
          <div class="col-md-10"></div>
          <div class="col-md-2">
            <router-link :to="{ name: 'UserCreate' }" class="btn btn-primary">新增</router-link>
          </div>
        </div><br />

        <table class="table table-hover">
            <thead>
            <tr>
                <!-- <td>ID</td> -->
                <td>用户名</td>
                <td>密码</td>
                <td>黑名单</td>
                <td>所购书籍</td>
                <td>总消费</td>
                <td>编辑</td>
                <td>删除</td>
            </tr>
            </thead>

            <tbody>
                <tr v-for="(item, index) in items" :key="index"> 
                    <td>{{ item.username }}</td>
                    <td>{{ item.password }}</td>
                    <td>{{ item.isBlack }}</td>
                    <td>{{ item.buyBook }}</td>
                    <td>{{ item.bill }}</td>
                    <td><router-link :to="{name: 'UserEdit', params: { id: item._id }}" class="btn btn-primary">Edit</router-link></td>
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
              let uri = 'http://localhost:4000/users';
              this.axios.get(uri).then((response) => {
                  this.items = response.data;
              });
            },
            deleteItem(id, index)
            {
              let uri = 'http://localhost:4000/users/delete/'+id;
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
