<template>
  <div class="home">
    <SideLeft />
    <SideRight />
  </div>
</template>

<script>
import SideLeft from '@/components/SideLeft.vue';
import SideRight from '@/components/SideRight.vue';
import { ActivityIcon } from '@vue-icons/feather';

export default {
  name: 'Main',
  props: {},
  components: { ActivityIcon, SideLeft, SideRight }
};
</script>

<!-- DashBoard "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.home {
  display: flex;
  height: 100vh;
  width: 100vw;
}

h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
