<template>
  <div class="SideRight">
    <div class="SideRight-head">
      <div class="SideRight-head-content">
        <div class="SideRight-head-content-menu">
          <MenuIcon />
        </div>
        <div class="SideRight-head-content-left">
          <i class="SideRight-head-content-left-icon">
            <SearchIcon />
          </i>
          <input
            type="text"
            class="SideRight-head-content-left-input"
            placeholder="search..."
          />
        </div>

        <div class="SideRight-head-content-right">
          <i class="SideRight-head-content-right-icon">
            <BellIcon />
          </i>
          <span class="SideRight-head-content-right-name">hi, olayinka</span>
          <img :src="image" alt="" class="SideRight-head-content-right-img" />
        </div>
      </div>
      <div class="padding">
        <div class="SideRight-head-out mobile">
          <i class="SideRight-head-out-icon">
            <SearchIcon />
          </i>
          <input
            type="text"
            class="SideRight-head-out-input"
            placeholder="search..."
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { BellIcon, SearchIcon, MenuIcon } from '@vue-icons/feather';
import image from '@/assets/man.png';

export default {
  components: { BellIcon, SearchIcon, MenuIcon },
  data() {
    return { image: image };
  }
};
</script>

<style scoped lang="scss">
@import '@/styles/sideright.scss';
</style>