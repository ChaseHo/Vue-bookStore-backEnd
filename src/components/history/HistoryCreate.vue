<template>
  <div>
    <h1>Create An Item</h1>
    <form v-on:submit.prevent="addItem">
      <div class="row">
        <div class="col-md-6">
          <div class="form-group">
            <label>书名:</label>
            <input type="text" class="form-control" v-model="item.title">
          </div>
        </div>
        </div>

        <div class="row">
        <div class="col-md-6">
          <div class="form-group">
            <label>作者:</label>
            <input type="text" class="form-control" v-model="item.author">
          </div>
        </div>
        </div>

        <div class="row">
          <div class="col-md-6">
            <div class="form-group">
              <label>价格:</label>
              <input type="text" class="form-control col-md-6" v-model="item.price" />
            </div>
          </div>
        </div>

        <div class="row">
            <div class="col-md-6">
                <div class="form-group">
                    <label>简介:</label>
                    <input type="text" class="form-control" v-model="item.summary">
                </div>
            </div>
        </div>

        <div class="row">
            <div class="col-md-6">
                <div class="form-group">
                    <label>出版日期:</label>
                    <input type="text" class="form-control" v-model="item.pubdate">
                </div>
            </div>
        </div>

        <div class="row">
            <div class="col-md-6">
                <div class="form-group">
                    <label>大图:</label>
                    <input type="text" class="form-control" v-model="item.largeIMG">
                </div>
            </div>
        </div>

        <div class="row">
            <div class="col-md-6">
                <div class="form-group">
                    <label>中图:</label>
                    <input type="text" class="form-control" v-model="item.midIMG">
                </div>
            </div>
        </div>

        <div class="row">
            <div class="col-md-6">
                <div class="form-group">
                    <label>小图:</label>
                    <input type="text" class="form-control" v-model="item.smallIMG">
                </div>
            </div>
        </div>

        <div class="row">
            <div class="col-md-6">
                <div class="form-group">
                    <label>出版社:</label>
                    <input type="text" class="form-control" v-model="item.publisher">
                </div>
            </div>
        </div>

        <div class="row">
            <div class="col-md-6">
                <div class="form-group">
                    <label>源标题:</label>
                    <input type="text" class="form-control" v-model="item.origin_title">
                </div>
            </div>
        </div>

        <div class="row">
            <div class="col-md-6">
                <div class="form-group">
                    <label>译者:</label>
                    <input type="text" class="form-control" v-model="item.translator">
                </div>
            </div>
        </div>

        <div class="row">
            <div class="col-md-6">
                <div class="form-group">
                    <label>标签:</label>
                    <input type="text" class="form-control" v-model="item.tag">
                </div>
            </div>
        </div>       

        <div class="row">
            <div class="col-md-6">
                <div class="form-group">
                    <label>库存:</label>
                    <input type="text" class="form-control" v-model="item.stock">
                </div>
            </div>
        </div>                           

        <br />
        <div class="form-group">
          <button class="btn btn-primary">添加</button>
        </div>
    </form>
  </div>
</template>
<script>
  export default {
    data(){
        return{
          item:{}
        }
    },
    methods: {
      addItem(){
        let uri = 'http://localhost:4000/history/add';
        this.axios.post(uri, this.item).then((response) => {
          this.$router.push({name: 'HistoryDisplay'})
        })
    }
  }
}
</script>
