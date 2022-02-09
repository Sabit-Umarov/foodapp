<template>
  <span class="ui-product-size" :class="{ small: isSmall }">{{ size }}см</span>
</template>

<script>
export default {
  name: "UIProductSize",
  data: () => ({}),
  props: {
    size: {
      type: Number,
      required: true,
    },
    isSmall: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style lang="scss" scoped>
.ui-product-size {
  background-image: url("../../assets/icons/resize.svg");
  background-position: left center;
  font-size: 22px;
  line-height: 30px;
  padding-left: 28px;
  background-size: 32px;
}

.small {
  font-size: 10px;
  line-height: 14px;
  padding-left: 14px;
  background-size: 14px;
}
</style>
