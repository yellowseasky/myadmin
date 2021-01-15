<template>
  <a-layout-content
    :style="{ margin: '24px 16px', padding: '24px', background: '#fff', minHeight: '280px' }"
  >
    <bread></bread>
    <router-view></router-view>
  </a-layout-content>
</template>

<script>
import Bread from '@/components/Bread'
export default {
  name: 'layoutContent',
  data () {
    return {

    }
  },
  props: {

  },
  components: {
    Bread
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

  }
}
</script>

<style scoped lang='less'>
</style>
