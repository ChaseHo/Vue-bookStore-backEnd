<template>
  <div>
    <h1>Create An Item</h1>
    <form v-on:submit.prevent="addItem">
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
            <label>密码:</label>
            <input type="text" class="form-control" v-model="item.password">
          </div>
        </div>
        </div>

        <div class="row">
          <div class="col-md-6">
            <div class="form-group">
              <label>黑名单:</label>
              <input type="text" class="form-control col-md-6" v-model="item.isBlack" />
            </div>
          </div>
        </div>

        <div class="row">
            <div class="col-md-6">
                <div class="form-group">
                    <label>所购书籍:</label>
                    <input type="text" class="form-control" v-model="item.buyBook">
                </div>
            </div>
        </div>

        <div class="row">
            <div class="col-md-6">
                <div class="form-group">
                    <label>账单:</label>
                    <input type="text" class="form-control" v-model="item.bill">
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
        let uri = 'http://localhost:4000/users/addUser';
        this.axios.post(uri, this.item).then((response) => {
          this.$router.push({name: 'UserDisplay'})
        })
    }
  }
}
</script>
