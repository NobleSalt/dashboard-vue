<template>
  <div class="SideRight">
    <div class="SideRight-head">
      <div class="SideRight-head-left">
        <i class="SideRight-head-left-icon">
          <SearchIcon />
        </i>
        <input type="text" class="SideRight-head-left-input" />
      </div>

      <div class="SideRight-head-right">
        <i class="SideRight-head-right-icon">
          <BellIcon />
        </i>
        <span class="SideRight-head-right-name">hi, olayinka</span>
        <img :src="image" alt="" class="SideRight-head-right-name-img" />
      </div>
    </div>
  </div>
</template>

<script>
import { BellIcon, SearchIcon } from '@vue-icons/feather';
import image from '@/assets/man.png';

export default {
  components: { BellIcon, SearchIcon },
  data() {
    return { image: image };
  }
};
</script>

<style scoped lang="scss">
@import '@/styles/sideright.scss';
</style>