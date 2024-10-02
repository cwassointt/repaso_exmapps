<script>

export default {
  name: 'page-not-found'
};
</script>

<template>
  <div class="w-full">
    <h1>{{$t('pageNotFound.title')}}</h1>
    <p>{{ $t('pageNotFound.message') }}</p>
    <router-link to="/home">{{ $t('pageNotFound.goHome') }}</router-link>
  </div>
</template>

<style scoped>
</style>