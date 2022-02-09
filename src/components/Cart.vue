<template>
  <div class="cart page-wrapper">
    <div class="cart__header">
      <div class="cart__title title">Мой заказ</div>
      <button class="cart__copy-btn">
        <img src="../assets/icons/copy.svg" alt="copy" />
      </button>
    </div>
    <div class="item card" v-for="item in items" :key="item.id">
      <div class="item__container">
        <img class="item__image" src="../assets/pizza-pepperony.png" />
        <div class="item__info">
          <div class="item__actions-and-name">
            <div>
              <div class="item__description">
                {{ item.category }} / {{ item.weight }}г / {{ item.size }}см
              </div>
              <div class="item__name">{{ item.name }}</div>
            </div>
            <div class="item__buttons-container">
              <button
                class="item__btn"
                :disabled="item.quantity === 1"
                @click="item.quantity--"
              >
                -
              </button>
              <button class="item__btn" @click="item.quantity++">+</button>
            </div>
          </div>
          <div class="item__delete-and-price">
            <button class="item__delete-btn" @click="popItem(item.id)">
              <img src="../assets/icons/garbage.svg" />
            </button>
            <div class="item__price">
              <span class="item__price_count">{{ item.quantity }} x </span>
              {{ item.quantity * item.price }} ₽
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="confirm-btn-container">
      <UIRedButton
        :text="'Оформить заказ'"
        :isMedium="true"
        @handleButtonClick="confirmBuy"
      />
    </div>
  </div>
</template>

<script>
import UIRedButton from "@/components/UI/UIRedButton.vue";

export default {
  name: "Cart",
  components: {
    UIRedButton,
  },
  data: () => ({
    items: [
      {
        category: "Пицца",
        weight: 420,
        size: 30,
        name: "Пепперони",
        quantity: 1,
        price: 395,
        id: 0,
      },
      {
        category: "Пицца",
        weight: 420,
        size: 30,
        name: "Охотничья",
        quantity: 1,
        price: 395,
        id: 1,
      },
      {
        category: "Пицца",
        weight: 420,
        size: 30,
        name: "Левая",
        quantity: 1,
        price: 395,
        id: 2,
      },
      {
        category: "Пицца",
        weight: 420,
        size: 30,
        name: "Правая",
        quantity: 1,
        price: 395,
        id: 3,
      },
    ],
  }),
  methods: {
    popItem(id) {
      this.items = this.items.filter((el) => {
        return el.id != id;
      });
    },
    confirmBuy() {
      console.log(this.items);
    },
  },
};
</script>

<style lang="scss" scoped>
.cart {
  height: 100vh;
  position: relative;
  &__header {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
}

.confirm-btn-container {
  position: absolute;
  bottom: 14px;
  width: calc(100% - 40px);
}

.item {
  margin-top: 18px;
  border-radius: 5px;
  padding: 12px;
  &__container {
    display: flex;
    align-items: center;
    gap: 18px;
  }
  &__image {
    width: 76px;
    height: 76px;
  }
  &__info {
    display: flex;
    justify-content: space-between;
    width: 100%;
  }
  &__description {
    color: #8e8e8e;
    font-size: 8px;
    line-height: 8px;
  }
  &__name {
    color: #6b6b6b;
    font-weight: bold;
    font-size: 14px;
    line-height: 17px;
  }
  &__actions-and-name {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 20px;
  }
  &__buttons-container {
    background: #f5f5f5;
    border-radius: 100px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    max-width: 56px;
  }
  &__btn {
    width: 24px;
    height: 24px;
  }
  &__delete-and-price {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: space-between;
  }
  &__delete-btn {
    position: relative;
    bottom: 8px;
  }
  &__price {
    font-weight: bold;
    font-size: 18px;
    line-height: 25px;
    &_count {
      color: #8e8e8e;
      font-size: 12px;
      line-height: 16px;
    }
  }
}
</style>
