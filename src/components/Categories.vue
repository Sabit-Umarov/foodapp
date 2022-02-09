<template>
  <div>
    <div class="header-container">
      <div class="header-container__title title">Категории</div>
      <button class="header-container__btn">
        <span>Все категории</span>
        <img
          src="@/assets/icons/breadcrumb.svg"
          alt="all categories route button"
        />
      </button>
    </div>
    <UICarousel>
      <div
        class="category card"
        v-for="(category, index) in categories"
        :key="index"
      >
        <img src="@/assets/icons/pizza.svg" alt="category icon" />
        <span class="category__name">{{ category.name }}</span>
      </div>
    </UICarousel>
  </div>
</template>

<script>
import UICarousel from "@/components/UI/UICarousel.vue";

export default {
  name: "Categories",
  components: {
    UICarousel,
  },
  data: () => ({
    categories: [
      {
        name: "Пицца",
      },
      {
        name: "Лапша",
      },
      {
        name: "Бургеры",
      },
      {
        name: "Роллы",
      },
      {
        name: "Суши",
      },
      {
        name: "Завтраки",
      },
      {
        name: "Первые блюда",
      },
    ],
  }),
};
</script>

<style lang="scss" scoped>
.header-container {
  display: flex;
  justify-content: space-between;
  &__btn {
    opacity: 0.6;
    font-size: 10px;
    line-height: 12px;
    display: flex;
    align-items: center;
    gap: 4px;
    & img {
      width: 10px;
      height: 7px;
      transform: rotate(180deg);
    }
  }
}

.category {
  border-radius: 5px;
  min-width: 88px;
  height: 88px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  &__name {
    font-size: 10px;
    line-height: 12px;
    margin-top: 10px;
  }
}
</style>
