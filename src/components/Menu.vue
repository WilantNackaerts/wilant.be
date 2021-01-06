<template>
  <b-menu>
    <div
      @click="clickMenuItem('Home')"
    >
    <b-image
      :src="require('@/assets/wilant.png')"
      :rounded=true
      alt="Wilant Nackaerts"
      class="image"
    />
    </div>
    <b-menu-list>
      <b-menu-item
        label="Resume"
        @click="clickMenuItem('Resume')"
      />
      <b-menu-item
        label="Projects"
        @click="clickMenuItem('Projects')"
      />
      <b-menu-item
        label="Contact me"
        @click="clickMenuItem('Contact')"
      />
    </b-menu-list>
  </b-menu>
</template>

<script>
export default {
  name: 'Menu',
  methods: {
    clickMenuItem(menuItem) {
      this.navigate(menuItem);
    },
  },
};
</script>

<style>
.image{
  width: 100%;
}
.menu{
  margin-left: 2em;
  margin-top: 2em;
  height: 100%;
}
.menu-list{
  text-align: center;
  margin-top: 2em;
}
</style>
