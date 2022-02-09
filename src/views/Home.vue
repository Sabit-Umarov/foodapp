<template>
  <div class="page-wrapper">
    <Categories />
    <Catalog />
  </div>
</template>

<script>
import Categories from "@/components/Categories";
import Catalog from "@/components/Catalog";

export default {
  name: "Home",
  components: {
    Categories,
    Catalog,
  },
};
</script>

<style>
.page-wrapper {
  padding: 20px;
}
</style>
