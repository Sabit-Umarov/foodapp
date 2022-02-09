<template>
  <button
    @click="$emit('handleButtonClick')"
    class="red-button"
    :class="{ big: isBig, medium: isMedium }"
  >
    {{ text }}
  </button>
</template>

<script>
export default {
  name: "UIRedButton",
  data: () => ({}),
  props: {
    isBig: {
      default: false,
    },
    isMedium: {
      default: false,
    },
    text: {
      type: String,
      required: true,
    },
  },
};
</script>

<style scoped>
.red-button {
  background: linear-gradient(
    91.85deg,
    #ff5863 0.1%,
    #eb212e 101.94%,
    #eb212e 101.94%
  );
  border-radius: 3px;
  filter: drop-shadow(0px 4px 20px rgba(235, 33, 46, 0.2));
  color: white;
  width: 100%;
  font-size: 12px;
  line-height: 16px;
  padding: 4px 0;
}

.big {
  font-size: 24px;
  padding: 16px 0;
  border-radius: 10px;
}

.medium {
  font-weight: 400;
  font-size: 20px;
  line-height: 24px;
  border-radius: 10px;
  padding: 16px 0;
}
</style>
