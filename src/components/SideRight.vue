<template>
  <div class="SideRight">
    <div class="SideRight-head">
      <div class="SideRight-head-content">
        <div
          class="SideRight-head-content-menu"
          @click="this.$store.state.showMenu = true"
        >
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
    <SideRightMain/>
  </div>
</template>

<script>
import { BellIcon, SearchIcon, MenuIcon } from '@vue-icons/feather';
import image from '@/assets/man.png';
import SideRightMain from './SideRightMain';

export default {
  components: { BellIcon, SearchIcon, MenuIcon, SideRightMain },
  data() {
    return { image: image };
  },
  methods: {
    handleCick({ target }) {
      if (target.className) {
        console.log(target);
        if (target.className === 'SideRight-head-content-menu') {
          console.log('hehe');
        } else {
          console.log('hoho');
          this.$store.state.showMenu = false;
        }
      }
    }
  }
};
</script>

<style scoped lang="scss">
@import '@/styles/sideright.scss';
</style>