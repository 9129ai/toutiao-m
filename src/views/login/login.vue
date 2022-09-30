<template>
  <div>登录页面</div>
</template>

<script>
import { loginAPI } from '../../api/user.js'
export default {
  name: 'login-1',
  async created () {
    try {
      const res = await loginAPI()
      console.log(res, loginAPI)
      this.arr = res.data.result.hots
    } catch (error) {
      console.log(error)
    }
  }
}
</script>

<style>

</style>
