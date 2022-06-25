<template>
  <div :class="this.$store.state.showMenu ? 'SideLeft active' : 'SideLeft'">
    <div class="SideLeft-head">
      <img :src="image" class="SideLeft-head-icon" alt="" />
      360 coporation
    </div>
    <div class="SideLeft-body">
      <div class="SideLeft-body-links">
        <a href="#!" class="SideLeft-body-links-link">
          <i class="SideLeft-body-links-link-icon"><GridIcon /></i>
          <span class="SideLeft-body-links-link-name">dashboard</span>
        </a>
        <a href="#!" class="SideLeft-body-links-link">
          <i class="SideLeft-body-links-link-icon"><SettingsIcon /></i>
          <span class="SideLeft-body-links-link-name">settings</span>
          <i class="SideLeft-body-links-link-right_icon"
            ><ChevronRightIcon
          /></i>
        </a>
        <a href="#!" class="SideLeft-body-links-link">
          <i class="SideLeft-body-links-link-icon"><MessageSquareIcon /></i>
          <span class="SideLeft-body-links-link-name">feeds</span>
        </a>
        <a href="#!" class="SideLeft-body-links-link">
          <Icon class="SideLeft-body-links-link-icon">
            <CloneRegular />
          </Icon>
          <span class="SideLeft-body-links-link-name">user managements</span>
          <i class="SideLeft-body-links-link-right_icon"
            ><ChevronRightIcon
          /></i>
        </a>
        <a href="#!" class="SideLeft-body-links-link">
          <Icon class="SideLeft-body-links-link-icon">
            <AddressCardRegular />
          </Icon>
          <span class="SideLeft-body-links-link-name"
            >contacts managements</span
          >
          <i class="SideLeft-body-links-link-right_icon"
            ><ChevronRightIcon
          /></i>
        </a>
        <a href="#!" class="SideLeft-body-links-link">
          <i class="SideLeft-body-links-link-icon"><SettingsIcon /></i>
          <span class="SideLeft-body-links-link-name">departments</span>
          <i class="SideLeft-body-links-link-right_icon"
            ><ChevronRightIcon
          /></i>
        </a>
        <a href="#!" class="SideLeft-body-links-link">
          <i class="SideLeft-body-links-link-icon"><SettingsIcon /></i>
          <span class="SideLeft-body-links-link-name">schedule & reports</span>
        </a>
        <a href="#!" class="SideLeft-body-links-link">
          <i class="SideLeft-body-links-link-icon"><SettingsIcon /></i>
          <span class="SideLeft-body-links-link-name">inventory</span>
        </a>
        <a href="#!" class="SideLeft-body-links-link">
          <i class="SideLeft-body-links-link-icon"><SettingsIcon /></i>
          <span class="SideLeft-body-links-link-name">sales & payments</span>
        </a>
        <a href="#!" class="SideLeft-body-links-link">
          <i class="SideLeft-body-links-link-icon"><SettingsIcon /></i>
          <span class="SideLeft-body-links-link-name">companies</span>
        </a>
        <a href="#!" class="SideLeft-body-links-link">
          <i class="SideLeft-body-links-link-icon"><SettingsIcon /></i>
          <span class="SideLeft-body-links-link-name">requests</span>
        </a>
        <a href="#!" class="SideLeft-body-links-link">
          <i class="SideLeft-body-links-link-icon"><SettingsIcon /></i>
          <span class="SideLeft-body-links-link-name">messaging</span>
        </a>
        <a href="#!" class="SideLeft-body-links-link">
          <i class="SideLeft-body-links-link-icon"><SettingsIcon /></i>
          <span class="SideLeft-body-links-link-name">conferencing</span>
          <div class="SideLeft-body-links-blur_circle"></div>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import {
  SettingsIcon,
  GridIcon,
  MessageSquareIcon,
  ChevronRightIcon
} from '@vue-icons/feather';
import { Icon } from '@vicons/utils';
import { AddressCardRegular, CloneRegular } from '@vicons/fa';
import image from '@/assets/360.png';

export default {
  components: {
    SettingsIcon,
    GridIcon,
    MessageSquareIcon,
    ChevronRightIcon,
    AddressCardRegular,
    Icon,
    CloneRegular
  },
  data() {
    return {
      image: image
    };
  }
};
</script>

<style lang="scss" scoped>
@import '@/styles/sideleft.scss';
</style>