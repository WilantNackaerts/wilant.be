<template>
  <div class="columns">
    <div class="column is-one-fifth">
      <Menu/>
    </div>
    <div class="column">
      <router-view/>
    </div>
  </div>
</template>

<script>
import Menu from './components/Menu.vue';

export default {
  name: 'App',
  components: {
    Menu,
  },
};
</script>

<style>
.container{
  height: 100%;
  margin-top: 2em;
}

.main{
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
