<template>
    <div>
        <h1>Update Item</h1>
        <div class="row">
          <div class="col-md-10"></div>
          <div class="col-md-2"><router-link :to="{ name: 'ComputerDisplay' }" class="btn btn-success">Return to Items</router-link></div>
        </div>

        <form v-on:submit.prevent="updateItem">
            <div class="form-group">
                <label>书名</label>
                <input type="text" class="form-control" v-model="item.title">
            </div>

            <div class="form-group">
                <label name="product_price">作者</label>
                <input type="text" class="form-control" v-model="item.author">
            </div>

            <div class="form-group">
                <label name="product_color">价格</label>
                <input type="text" class="form-control" v-model="item.price">
            </div>

            <div class="form-group">
                <label name="product_color">简介</label>
                <input type="text" class="form-control" v-model="item.summary">
            </div>

            <div class="form-group">
                <label name="product_color">出版日期</label>
                <input type="text" class="form-control" v-model="item.pubdate">
            </div>

            <div class="form-group">
                <label name="product_color">大图</label>
                <input type="text" class="form-control" v-model="item.largeIMG">
            </div>

            <div class="form-group">
                <label name="product_color">中图</label>
                <input type="text" class="form-control" v-model="item.midIMG">
            </div>

            <div class="form-group">
                <label name="product_color">小图</label>
                <input type="text" class="form-control" v-model="item.smallIMG">
            </div>

            <div class="form-group">
                <label name="product_color">出版社</label>
                <input type="text" class="form-control" v-model="item.publisher">
            </div>

            <div class="form-group">
                <label name="product_color">源标题</label>
                <input type="text" class="form-control" v-model="item.origin_title">
            </div>

            <div class="form-group">
                <label name="product_color">译者</label>
                <input type="text" class="form-control" v-model="item.translator">
            </div>

            <div class="form-group">
                <label name="product_color">标签</label>
                <input type="text" class="form-control" v-model="item.tag">
            </div>

            <div class="form-group">
                <label name="product_color">库存</label>
                <input type="text" class="form-control" v-model="item.stock">
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
              let uri = 'http://localhost:4000/computer/edit/' + this.$route.params.id;
                this.axios.get(uri).then((response) => {
                    this.item = response.data;
                });
            },

            updateItem()
            {
              let uri = 'http://localhost:4000/computer/update/' + this.$route.params.id;
                this.axios.post(uri, this.item).then((response) => {
                  this.$router.push({name: 'ComputerDisplay'});
                });
            }
        }
    }
</script>
