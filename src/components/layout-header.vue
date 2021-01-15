<template>
  <a-layout-header style="background: #fff; padding: 0">
        <a-icon
          class="trigger"
          :type="collapsed ? 'menu-unfold' : 'menu-fold'"
          @click="() => (collapsed = !collapsed)"
        />
      <span>天倬智能装备科技有限公司</span>
        <a-dropdown class="my-dropdown">
          <a class="ant-dropdown-link" @click="e => e.preventDefault()">
            设置 <a-icon type="down" />
          </a>
          <a-menu slot="overlay">
            <a-menu-item>
              <a href="javascript:;">个人主页</a>
            </a-menu-item>
            <a-menu-item>
              <a href="javascript:;">管理</a>
            </a-menu-item>
            <a-menu-item >
                <div @click="goOut">退出登录</div>
            </a-menu-item>
          </a-menu>
        </a-dropdown>
      </a-layout-header>
</template>

<script>
export default {
  name: 'layoutHeader',
  data () {
    return {

    }
  },
  props: {

  },
  components: {

  },
  computed: {

  },
  watch: {

  },
  created () {

  },
  mounted () {

  },
  methods: {
    goOut () {
      this.$message.success('退出登录成功', 1, () => {
        this.$router.push('/login')
      })
    }
  }
}
</script>

<style scoped lang='less'>
</style>
