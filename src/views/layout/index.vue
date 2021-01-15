<template>

  <a-layout class="my-trigger">
    <sidermenu/>
    <a-layout>
      <layoutheader/>
      <layoutcontent/>
    </a-layout>
  </a-layout>
</template>
<script>

import Sidermenu from '@/components/sider-menu'
import Layoutheader from '@/components/layout-header'
import Layoutcontent from '@/components/layout-content'
export default {
  name: 'layout',
  components: {
    Sidermenu,
    Layoutheader,
    Layoutcontent
  },
  data () {
    return {
    }
  },
  methods: {
  },
  created () {
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
