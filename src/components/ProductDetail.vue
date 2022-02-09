<template>
  <div class="product-detail page-wrapper">
    <img
      class="product-detail__image"
      src="../assets/pizza-pepperony.png"
      alt="product image"
    />
    <div class="product-detail__info-container">
      <UIProductSize :size="product.size" />
      <UIProductWeight :weight="product.weight" />
    </div>
    <div class="product-detail__name">{{ product.name }}</div>
    <div class="product-detail__ingredients">{{ product.ingredients }}</div>
    <div class="product-detail__buy-block">
      <div class="counter-container">
        <button
          class="counter-container__btn"
          @click="product.quantity--"
          :disabled="product.quantity === 1"
        >
          -
        </button>
        <span class="counter-container__count">{{ product.quantity }}</span>
        <button class="counter-container__btn" @click="product.quantity++">
          +
        </button>
      </div>
      <UIRedButton
        :isBig="true"
        :text="product.price * product.quantity + ' ₽'"
        @handleButtonClick="buy"
      />
    </div>
    <UICarousel :title="'Добавить в пиццу'">
      <div class="ingredients__card" v-for="item in ingredients" :key="item.id">
        <img
          class="ingredients__image"
          src="@/assets/ingredient.svg"
          alt="ingredient"
        />
        <div class="ingredients__name">{{ item.name }}</div>
        <div class="ingredients__actions-container">
          <div class="ingredients__price">{{ item.price }} ₽</div>
          <UIRedButton
            :text="'+'"
            @handleButtonClick="addIngredient(item.name)"
          />
        </div>
      </div>
    </UICarousel>
    <UICarousel :title="'С этим товаром покупают'">
      <div class="adding-item card" v-for="item in addingItems" :key="item.id">
        <div class="adding-item__attachment-container"></div>
        <div class="adding-item__info">
          <div class="adding-item__name">{{ item.name }}</div>
          <div class="adding-item__weight">{{ item.weight }}</div>
          <UIRedButton
            :text="item.price + ' ₽'"
            @handleButtonClick="addItem(item.id)"
          />
        </div>
      </div>
    </UICarousel>
  </div>
</template>

<script>
import UIProductWeight from "@/components/UI/UIProductWeight.vue";
import UIProductSize from "@/components/UI/UIProductSize.vue";
import UIRedButton from "@/components/UI/UIRedButton.vue";
import UICarousel from "@/components/UI/UICarousel.vue";

export default {
  name: "ProductDetail",
  data: () => ({
    ingredients: [
      {
        name: "Сыр блю чиз",
        price: 54,
        id: 0,
      },
      {
        name: "Сыр блю чиз",
        price: 54,
        id: 1,
      },
      {
        name: "Сыр блю чиз",
        price: 54,
        id: 2,
      },
      {
        name: "Сыр блю чиз",
        price: 54,
        id: 3,
      },
      {
        name: "Сыр блю чиз",
        price: 54,
        id: 4,
      },
      {
        name: "Сыр блю чиз",
        price: 54,
        id: 5,
      },
    ],
    addingItems: [
      {
        name: "Кока кола",
        weight: "0,5л",
        price: 85,
        id: 0,
      },
      {
        name: "Кока кола",
        weight: "0,5л",
        price: 85,
        id: 1,
      },
      {
        name: "Кока кола",
        weight: "0,5л",
        price: 85,
        id: 2,
      },
      {
        name: "Кока кола",
        weight: "0,5л",
        price: 85,
        id: 3,
      },
      {
        name: "Кока кола",
        weight: "0,5л",
        price: 85,
        id: 4,
      },
      {
        name: "Кока кола",
        weight: "0,5л",
        price: 85,
        id: 5,
      },
    ],
  }),
  components: {
    UIProductWeight,
    UIProductSize,
    UIRedButton,
    UICarousel,
  },
  methods: {
    buy() {
      console.log("you bought - ", this.product.name);
    },
    addIngredient(name) {
      console.log(name);
    },
    addItem() {
      console.log("");
    },
  },
  props: {
    product: {
      default: {},
    },
  },
};
</script>

<style lang="scss" scoped>
.product-detail {
  &__image {
    width: 100%;
  }
  &__info-container {
    margin-top: 8px;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 16px;
  }
  &__name {
    text-align: center;
    color: #eb212e;
    font-weight: bold;
    font-size: 32px;
    line-height: 39px;
    margin: 14px 0 6px 0;
  }
  &__ingredients {
    font-size: 18px;
    line-height: 21px;
    text-align: center;
    color: #6b6b6b;
    margin: 0 20px;
  }
  &__buy-block {
    display: flex;
    align-items: center;
    gap: 14px;
    margin: 32px 0;
  }
}

.counter-container {
  background: #f5f5f5;
  border-radius: 10px;
  color: #8e8e8e;
  min-width: 112px;
  height: 44px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  & span {
    font-weight: bold;
    font-size: 28px;
  }
  &__btn {
    font-weight: 400;
    padding: 2px 16px;
    font-size: 24px;
  }
}

.ingredients {
  &__card {
    display: flex;
    flex-direction: column;
    align-items: center;
    box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.1);
    border-radius: 5px;
    padding: 6px;
    min-width: 100px;
  }
  &__image {
    position: relative;
    width: 100%;
    bottom: 20px;
  }
  &__actions-container {
    width: 100%;
    display: flex;
    align-items: center;
    box-shadow: 0px 2px 10px #ebebeb;
    border-radius: 3px;
    margin-top: 6px;
  }
  &__price {
    min-width: 64px;
    text-align: center;
  }
  &__name {
    font-size: 12px;
    line-height: 14px;
  }
}

.adding-item {
  border-radius: 3px;
  display: flex;
  align-items: center;
  gap: 20px;
  min-width: 200px;
  height: 114px;
  &__attachment-container {
    height: 80px;
    min-width: 66px;
    background-image: url("../assets/adding-item.svg");
    background-position: center;
    background-repeat: no-repeat;
    background-size: contain;
  }
  &__info {
    width: 100%;
    margin-right: 26px;
    text-align: center;
  }
  &__name {
    font-size: 12px;
    line-height: 15px;
    font-weight: bold;
  }
  &__weight {
    font-size: 10px;
    line-height: 12px;
    margin-bottom: 8px;
  }
}
</style>
