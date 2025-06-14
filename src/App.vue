<template>
  <div class="designSys">
    <Aside :routes="routes" :mainCate="mainCate" />
    <main>    
      <HeadTitle/>
      <router-view ></router-view> 
    </main>
  </div>
</template>

<script>
import Aside from '@/designSystem/layout/Aside.vue'
import HeadTitle from '@/designSystem/layout/HeadTitle.vue'
import router from '@/router/router.js';
export default {
  name: 'App',
  components:{
    Aside, HeadTitle
  },
  data() {
    return {
      routes: router.options.routes,
    }
  },
  computed: {
    mainCate() {
      const currentPath = this.$route.path;
      for (const i of this.$route.matched) {
        if (currentPath.startsWith(i.path)) {
          return i.name;
        }
      }
      return "Unknown";
    }
  }
}
</script>
<style lang="scss">
@use "@/designSystem/assets/scss/layout.scss" as layout;
</style>