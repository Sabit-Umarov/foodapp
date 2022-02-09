<template>
  <div class="header">
    <div class="header__container">
      <button
        class="header__button -breadcrumb"
        v-if="currentRouteName != 'Home'"
        @click="goBack()"
      >
        <img src="@/assets/icons/breadcrumb.svg" alt="backlink" />
      </button>
      <button class="header__button">
        <img src="@/assets/icons/menu.svg" alt="menu icon" />
      </button>
    </div>
    <div class="header__container">
      <span class="header__cart-total">2235 ₽</span>
      <button class="header__cart" @click="goToCart()">
        <img src="@/assets/icons/cart.svg" alt="cart icon" />
        <v-badge color="#FF5863" content="4" class="cart-badge"></v-badge>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "Header",
  data: () => ({}),
  methods: {
    goBack() {
      setTimeout(() => this.$router.push({ name: "Home" }));
    },
    goToCart() {
      setTimeout(() => this.$router.push({ name: "Cart" }));
    },
  },
  computed: {
    currentRouteName() {
      return this.$route.name;
    },
  },
};
</script>

<style lang="scss" scoped>
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: sticky;
  height: 64px;
  width: 100%;
  z-index: 1;
  top: 0;
  left: 0;
  padding: 6px;
  &__container {
    display: flex;
    align-items: center;
    background-color: white;
    height: 44px;
    border-radius: 150px;
    padding: 12px 14px;
  }
  &__button {
    & img {
      display: block;
      width: 26px;
      height: 16px;
    }
  }
  &__cart {
    position: relative;
    & img {
      display: block;
      height: 22px;
      width: 22px;
      margin-left: 4px;
    }
  }
  &__cart-total {
    font-weight: 500;
    font-size: 16px;
    line-height: 21px;
    color: #393939;
  }
}

.cart-badge {
  position: absolute;
  top: 6px;
  right: 8px;
}

.-breadcrumb {
  margin-right: 18px;
}
</style>
