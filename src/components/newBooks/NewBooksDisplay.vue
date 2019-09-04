<template>
    <div>
        <div class="row create-btn">
          <div class="col-md-10"></div>
          <div class="col-md-2">
            <router-link :to="{ name: 'NewBooksCreate' }" class="btn btn-primary">新增</router-link>
          </div>
        </div><br />

        <table class="table table-hover">
            <thead>
            <tr>
                <!-- <td>ID</td> -->
                <td>书名</td>
                <td>作者</td>
                <td>价格</td>
                <td>出版商</td>
                <td>译者</td>
                <td>库存</td>                
                <td>编辑</td>
                <td>删除</td>
            </tr>
            </thead>

            <tbody>
                <tr v-for="(item, index) in items" :key="index"> 
                    <td>{{ item.title }}</td>
                    <td>{{ item.author }}</td>
                    <td>{{ item.price }}</td>
                    <td>{{ item.publisher }}</td>
                    <td>{{ item.translator }}</td>
                    <td>{{ item.stock }}</td>                    
                    <td><router-link :to="{name: 'NewBooksEdit', params: { id: item._id }}" class="btn btn-primary">Edit</router-link></td>
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
              let uri = 'http://localhost:4000/newBooks';
              this.axios.get(uri).then((response) => {
                  this.items = response.data;
              });
            },
            deleteItem(id, index)
            {
              let uri = 'http://localhost:4000/newBooks/delete/'+id;
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
