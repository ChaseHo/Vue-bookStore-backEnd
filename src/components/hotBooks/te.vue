<template>
    <div>
        <h1>Update Item</h1>
        <div class="row">
          <div class="col-md-10"></div>
          <div class="col-md-2"><router-link :to="{ name: 'UserDisplay' }" class="btn btn-success">Return to Items</router-link></div>
        </div>

        <form v-on:submit.prevent="updateItem">
            <div class="form-group">
                <label>用户名</label>
                <input type="text" class="form-control" v-model="item.username">
            </div>

            <div class="form-group">
                <label name="product_price">密码</label>
                <input type="text" class="form-control" v-model="item.password">
            </div>

            <div class="form-group">
                <label name="product_color">黑名单</label>
                <input type="text" class="form-control" v-model="item.isBlack">
            </div>

            <div class="form-group">
                <label name="product_color">所购书籍</label>
                <input type="text" class="form-control" v-model="item.buyBook">
            </div>

            <div class="form-group">
                <label name="product_color">账单</label>
                <input type="text" class="form-control" v-model="item.bill">
            </div>

            <div class="form-group">
                <button class="btn btn-primary">Update</button>
            </div>
        </form>
    </div>
</template>

<script>

    export default{
        data(){
            return{
                item:{}
            }
        },

        created: function(){
            this.getItem();
        },

        methods: {
            getItem()
            {
              let uri = 'http://localhost:4000/users/edit/' + this.$route.params.id;
                this.axios.get(uri).then((response) => {
                    this.item = response.data;
                });
            },

            updateItem()
            {
              let uri = 'http://localhost:4000/users/update/' + this.$route.params.id;
                this.axios.post(uri, this.item).then((response) => {
                  this.$router.push({name: 'UserDisplay'});
                });
            }
        }
    }
</script>
