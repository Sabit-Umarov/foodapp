<template>
  <div class="ui-carousel">
    <div class="ui-carousel__title title">{{ title }}</div>
    <div class="ui-carousel__wrapper">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "UICarousel",
  data: () => ({}),
  props: {
    title: {
      type: String,
      default: "",
    },
  },
};
</script>

<style lang="scss" scoped>
.ui-carousel {
  margin-bottom: 12px;
  &__title {
    margin-bottom: 18px;
  }
  &__wrapper {
    display: flex;
    gap: 14px;
    overflow-x: scroll;
    padding: 14px 12px 28px 12px;
    margin: 0 -20px;
  }
}
</style>
