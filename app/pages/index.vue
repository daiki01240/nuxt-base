<template>
  <section class="container">
    <el-card style="flex: 1">
      <div slot="header" class="clearfix">
      </div>
      <form>
        <div class="form-content">
          <span>Base</span>
          <el-input placeholder="" v-model="id" />
        </div>
        <div class="text-right">
          <el-button type="primary" @click="executeButton">Execute</el-button>
        </div>
        <br>
      </form>
    </el-card>
  </section>
</template>

<script>
// import Cookies from 'universal-cookie'
// const cookies = new Cookies()

export default {
  asyncData() {
    return{
      id: ""
    }
  },
  methods: {
    async executeButton() {
      console.log("test")

      // try {
      // this.$axios.$post(`shortLinks?key=${process.env.FIREBASE_API_KEY}`, body)
      // .then(response => {
      //   console.log(response.shortLink)
      //   this.short_url = response.shortLink
      // })
      // } catch (error) {
      //   alert(error)
      // }
    }
  }
}
</script>

<style scoped>
.form-content {
  margin: 16px 0;
}
</style>
