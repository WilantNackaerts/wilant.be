<template>
  <div class="coulumn is-one-fifth">
    <b-menu>
      <b-image
        :src="require('@/assets/wilant.png')"
        :rounded=true
        alt="Wilant Nackaerts"
      />
      <b-menu-list>
        <b-menu-item
          label="About"
        />
        <b-menu-item
          label="Resume"
        />
        <b-menu-item
          label="Projects"
        />
        <b-menu-item
          label="Contact me"
        />
      </b-menu-list>
    </b-menu>
  </div>
</template>

<script>
export default {
  name: 'Nav',
};
</script>

<style>

</style>
