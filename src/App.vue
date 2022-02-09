<template>
  <v-app>
    <Header />
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
import Header from "@/components/Header";
export default {
  name: "App",
  data: () => ({}),
  components: {
    Header,
  },
};
</script>

<style lang="scss">
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

.card {
  box-shadow: 5px 5px 25px rgba(0, 0, 0, 0.08);
}

.title {
  font-size: 18px;
  line-height: 25px;
  font-weight: bold;
}
</style>
