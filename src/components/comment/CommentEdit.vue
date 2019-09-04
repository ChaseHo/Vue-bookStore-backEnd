<template>
    <div>
        <h1>Update Item</h1>
        <div class="row">
          <div class="col-md-10"></div>
          <div class="col-md-2"><router-link :to="{ name: 'CommentDisplay' }" class="btn btn-success">Return to Items</router-link></div>
        </div>

        <form v-on:submit.prevent="updateItem">
            <div class="form-group">
                <label>BookID</label>
                <input type="text" class="form-control" v-model="item.bookid">
            </div>

            <div class="form-group">
                <label name="product_price">用户名</label>
                <input type="text" class="form-control" v-model="item.username">
            </div>

            <div class="form-group">
                <label name="product_color">内容</label>
                <input type="text" class="form-control" v-model="item.content">
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
              let uri = 'http://localhost:4000/comment/edit/' + this.$route.params.id;
                this.axios.get(uri).then((response) => {
                    this.item = response.data;
                });
            },

            updateItem()
            {
              let uri = 'http://localhost:4000/comment/update/' + this.$route.params.id;
                this.axios.post(uri, this.item).then((response) => {
                  this.$router.push({name: 'CommentDisplay'});
                });
            }
        }
    }
</script>
