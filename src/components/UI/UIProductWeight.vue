<template>
  <span class="ui-product-weight" :class="{ small: isSmall }"
    >{{ weight }}г</span
  >
</template>

<script>
export default {
  name: "UIProductWeight",
  data: () => ({}),
  props: {
    weight: {
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
.ui-product-weight {
  background-image: url("../../assets/icons/weight.svg");
  background-position: left center;
  font-size: 22px;
  line-height: 30px;
  padding-left: 28px;
  background-size: 22px;
}

.small {
  font-size: 10px;
  line-height: 14px;
  padding-left: 14px;
  background-size: 12px;
}
</style>
