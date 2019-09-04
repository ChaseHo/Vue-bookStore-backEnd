<template>
  <div>
    <h1>Create An Item</h1>
    <form v-on:submit.prevent="addItem">
      <div class="row">
        <div class="col-md-6">
          <div class="form-group">
            <label>种类:</label>
            <input type="text" class="form-control" v-model="item.name">
          </div>
        </div>
        </div>

        <div class="row">
        <div class="col-md-6">
          <div class="form-group">
            <label>标题:</label>
            <input type="text" class="form-control" v-model="item.title">
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
        let uri = 'http://localhost:4000/topic/add';
        this.axios.post(uri, this.item).then((response) => {
          this.$router.push({name: 'TopicDisplay'})
        })
    }
  }
}
</script>
