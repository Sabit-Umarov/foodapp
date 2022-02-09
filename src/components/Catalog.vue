<template>
  <div class="catalog">
    <h2 class="catalog__title title">Пицца</h2>
    <v-row>
      <v-col cols="6" v-for="product in products" :key="product.id">
        <div class="product card">
          <span
            class="product__tag product__tag_new"
            v-if="product.tag === 'New'"
            >{{ product.tag }}</span
          >
          <span
            class="product__tag product__tag_sale"
            v-if="product.tag === 'Sale'"
            >{{ product.tag }}</span
          >
          <div class="product__image-container">
            <img
              class="product__image"
              src="../assets/pizza-pepperony.png"
              alt="product image"
            />
          </div>
          <div class="product__info">
            <UIProductWeight :weight="product.weight" :isSmall="true" />
            <button
              class="product__buy-btn"
              @click="handleDetailClick(product.id)"
            >
              <img src="@/assets/icons/cart-white.svg" alt="buy an product" />
            </button>
            <UIProductSize :size="product.size" :isSmall="true" />
          </div>
          <div class="product__name">{{ product.name }}</div>
          <div class="product__ingredients">
            {{ product.ingredients }}
          </div>
          <div class="product__price">{{ product.price }} ₽</div>
        </div>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import UIProductWeight from "@/components/UI/UIProductWeight.vue";
import UIProductSize from "@/components/UI/UIProductSize.vue";

export default {
  name: "Catalog",
  components: {
    UIProductWeight,
    UIProductSize,
  },
  data: () => ({
    products: [
      {
        tag: "New",
        weight: 420,
        size: 30,
        name: "Пепперони",
        ingredients: "пикантная пепперони, томатный соус, моцарелла",
        price: 395,
        quantity: 1,
        id: 0,
      },
      {
        tag: "Sale",
        weight: 460,
        size: 30,
        name: "Итальянская",
        ingredients:
          "итальянские травы, пепперони, томатный соус, шампиньоны, моцарелла, маслины",
        price: 480,
        quantity: 1,
        id: 1,
      },
      {
        tag: "",
        weight: 420,
        size: 30,
        name: "Пепперони",
        ingredients: "пикантная пепперони, томатный соус, моцарелла",
        price: 395,
        quantity: 1,
        id: 2,
      },
    ],
  }),
  methods: {
    handleDetailClick(productId) {
      const product = this.products.find((el) => el.id === productId);
      setTimeout(() =>
        this.$router.push({
          name: "ProductDetail",
          params: { product: product },
        })
      );
    },
  },
};
</script>

<style lang="scss" scoped>
.catalog {
  &__title {
    margin-bottom: 20px;
  }
}

.product {
  position: relative;
  border-radius: 5px;
  &__tag {
    position: absolute;
    right: 8px;
    top: 8px;
    border-radius: 2px;
    color: white;
    font-size: 8px;
    line-height: 10px;
    padding: 2px 14px;
    &_new {
      background: linear-gradient(
        91.85deg,
        #ff5863 0.1%,
        #eb212e 101.94%,
        #eb212e 101.94%
      );
      filter: drop-shadow(0px 4px 20px rgba(235, 33, 46, 0.3));
    }
    &_sale {
      filter: drop-shadow(0px 4px 20px rgba(255, 160, 0, 0.3));
      background: linear-gradient(271.07deg, #ffa000 -2.43%, #ffcc76 99.44%);
    }
  }
  &__image-container {
    display: flex;
    justify-content: center;
    align-items: flex-end;
    padding-top: 20px;
  }
  &__image {
    width: 116px;
    height: 116px;
  }
  &__info {
    display: flex;
    justify-content: space-between;
    margin: 0 18px;
    position: relative;
  }
  &__buy-btn {
    position: absolute;
    left: calc(50% - 15px);
    bottom: 0;
    background: linear-gradient(
      91.85deg,
      #ff5863 0.1%,
      #eb212e 101.94%,
      #eb212e 101.94%
    );
    box-shadow: 2px 2px 5px rgba(235, 33, 46, 0.15);
    padding: 8px;
    border-radius: 50%;
    cursor: pointer;
    & img {
      display: block;
      width: 15px;
      height: 15px;
    }
  }
  &__details {
    font-size: 10px;
    line-height: 14px;
    padding-left: 14px;
    &_size {
      background-image: url("../assets/icons/resize.svg");
      background-position: left center;
    }
    &_weight {
      background-image: url("../assets/icons/weight.svg");
      background-position: left center;
    }
  }
  &__name {
    font-weight: bold;
    font-size: 14px;
    line-height: 17px;
    color: #eb212e;
    text-align: center;
    margin-top: 10px;
  }
  &__ingredients {
    font-size: 8px;
    line-height: 9px;
    text-align: center;
    color: #6b6b6b;
    margin: 4px 20px;
    height: 28px;
  }
  &__price {
    font-weight: bold;
    font-size: 16px;
    line-height: 22px;
    text-align: center;
    padding-bottom: 16px;
  }
}
</style>
