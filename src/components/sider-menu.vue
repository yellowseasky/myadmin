<template>
  <a-layout-sider class="my-layout-sider" v-model="collapsed" :trigger="null" collapsible>
      <div class="logo" >{{collapsed?'天倬':'天倬系统统计'}}</div>
      <a-menu
        :default-open-keys="selectOpen"
        :default-selected-keys="selectedOption"
        mode="inline"
        theme="dark"
        :inline-collapsed="collapsed"
      >
      <a-menu-item key="/home">
      <!-- replace是点击后不能返回 -->
        <router-link to="/home" replace>
          <a-icon type="home" />
          <span>主页</span>
        </router-link>

      </a-menu-item>
      <a-menu-item key="/userlist">
        <router-link to="/userlist"  replace>
          <a-icon type="user" />
          <span>员工列表</span>
        </router-link>
      </a-menu-item>

      <a-sub-menu key="业务统计">
        <span slot="title"><a-icon type="money-collect" /><span>业务统计</span></span>
        <a-menu-item key="/work/list">
          <router-link to="/work/list"  replace>
            工作统计
          </router-link>
        </a-menu-item>
        <a-menu-item key="3-2">
          投诉列表
        </a-menu-item>
      </a-sub-menu>
    </a-menu>
  </a-layout-sider>
</template>

<script>
export default {
  name: 'sider-menu',
  data () {
    return {
      collapsed: false,
      // 下拉菜单选中的标签
      selectedOption: [],
      // 下拉菜单选中的父标签
      selectOpen: [],
      // 当前的页数
      percent: 0
    }
  },
  created () {
    this.selectedOption = [this.$route.path]
    if (this.$route.meta && this.$route.meta.model) {
      this.selectOpen = [this.$route.meta.model]
    }
  },
  mounted () {

  },
  methods: {

  }
}
</script>

<style scoped lang='less'>
</style>
