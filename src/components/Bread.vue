<template>
  <a-breadcrumb>
    <a-breadcrumb-item>天倬管理系统</a-breadcrumb-item>
    <a-breadcrumb-item v-if="$route.meta.model"><a href="">{{$route.meta.model}}</a></a-breadcrumb-item>
    <a-breadcrumb-item><a href="">{{$route.meta.title}}</a></a-breadcrumb-item>
  </a-breadcrumb>
</template>
