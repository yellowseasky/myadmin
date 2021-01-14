<template>

  <a-layout class="my-trigger">
    <a-layout-sider class="my-layout-sider" v-model="collapsed" :trigger="null" collapsible>
      <div class="logo" >{{collapsed?'天倬':'天倬系统管理'}}</div>
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
      <a-menu-item key="/user">
        <router-link to="/user"  replace>
          <a-icon type="user" />
          <span>员工列表</span>
        </router-link>
      </a-menu-item>

      <a-sub-menu key="业务管理">
        <span slot="title"><a-icon type="money-collect" /><span>业务管理</span></span>
        <a-menu-item key="/work/list">
          <router-link to="/work/list"  replace>
            工单列表
          </router-link>
        </a-menu-item>
        <a-menu-item key="3-2">
          投诉列表
        </a-menu-item>
      </a-sub-menu>
    </a-menu>
    </a-layout-sider>
    <a-layout>
      <a-layout-header style="background: #fff; padding: 0">
        <a-icon
          class="trigger"
          :type="collapsed ? 'menu-unfold' : 'menu-fold'"
          @click="() => (collapsed = !collapsed)"
        />
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
      <a-layout-content
        :style="{ margin: '24px 16px', padding: '24px', background: '#fff', minHeight: '280px' }"
      >
        <bread></bread>
        <router-view></router-view>
      </a-layout-content>
    </a-layout>
  </a-layout>
</template>
<script>
import bread from '@/components/Bread'
export default {
  name: 'layout',
  components: {
    bread
  },
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
  methods: {
    goOut () {
      this.$message.success('退出登录成功', 1, () => {
        this.$router.push('/login')
      })
    }
  },
  created () {
    this.selectedOption = [this.$route.path]
    if (this.$route.meta && this.$route.meta.model) {
      this.selectOpen = [this.$route.meta.model]
    }
  }
}
</script>
<style lang="less">

  .my-trigger{
    height: 100vh;
    // 侧菜单超出高度显示滚动条
    .my-layout-sider{
      overflow-y:scroll;

      &::-webkit-scrollbar {
      width: 6px;
      height: 10px;
    }

    /*滚动条滑块*/
    &::-webkit-scrollbar-thumb {
        /*滚动条里面小方块*/
        border-radius: 10px;
        box-shadow: inset 0 0 5px #d8d8d8;
        background: rgb(177, 177, 177);
    }

    /*滚动条轨道*/
    &::-webkit-scrollbar-track {
        /*滚动条里面轨道*/
        box-shadow: inset 0 0 5px #d8d8d8;
        border-radius: 10px;
        background: #ededed;
    }
    }

    .logo {
      color: #fff;
      text-align: center;
      line-height: 32px;
      font-weight: bold;
      height: 32px;
      background: rgba(255, 255, 255, 0.2);
      margin: 16px;
    }
  }
  .trigger {
    font-size: 18px;
    line-height: 64px;
    padding: 0 24px;
    cursor: pointer;
    transition: color 0.3s;

    &:hover {
      color: #1890ff;
    }
  }

  // 下拉菜单
  .my-dropdown{
    float: right;
    margin-right: 50px;
  }
</style>
