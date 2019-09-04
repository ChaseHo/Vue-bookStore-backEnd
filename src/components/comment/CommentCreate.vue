<template>
  <div>
    <h1>Create An Item</h1>
    <form v-on:submit.prevent="addItem">
      <div class="row">
        <div class="col-md-6">
          <div class="form-group">
            <label>BookID:</label>
            <input type="text" class="form-control" v-model="item.bookid">
          </div>
        </div>
        </div>

        <div class="row">
        <div class="col-md-6">
          <div class="form-group">
            <label>用户名:</label>
            <input type="text" class="form-control" v-model="item.username">
          </div>
        </div>
        </div>

        <div class="row">
          <div class="col-md-6">
            <div class="form-group">
              <label>内容:</label>
              <input type="text" class="form-control col-md-6" v-model="item.content" />
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
        let uri = 'http://localhost:4000/comment/addComment';
        this.axios.post(uri, this.item).then((response) => {
          this.$router.push({name: 'CommentDisplay'})
        })
    }
  }
}
</script>
