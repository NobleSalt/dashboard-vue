<template>
  <div :class="this.$store.state.showMenu ? 'SideLeft active' : 'SideLeft'">
    <div class="SideLeft-head">
      <img :src="image" class="SideLeft-head-icon" alt="" />
      360 coporation
      <div
        class="SideLeft-head-close"
        @click="this.$store.state.showMenu = false"
      >
        X
      </div>
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
          <Icon class="SideLeft-body-links-link-icon"
            ><DeploymentUnitOutlined
          /></Icon>
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
          <Icon class="SideLeft-body-links-link-icon"
            ><ConferenceRoom28Regular
          /></Icon>
          <span class="SideLeft-body-links-link-name">inventory</span>
        </a>
        <a href="#!" class="SideLeft-body-links-link">
          <Icon class="SideLeft-body-links-link-icon"
            ><DiscountOutlined
          /></Icon>
          <span class="SideLeft-body-links-link-name">sales & payments</span>
        </a>
        <a href="#!" class="SideLeft-body-links-link">
          <Icon class="SideLeft-body-links-link-icon"><LocationCompany /></Icon>
          <span class="SideLeft-body-links-link-name">companies</span>
        </a>
        <a href="#!" class="SideLeft-body-links-link">
          <Icon class="SideLeft-body-links-link-icon"
            ><MarkChatReadOutlined
          /></Icon>
          <span class="SideLeft-body-links-link-name">requests</span>
        </a>
        <a href="#!" class="SideLeft-body-links-link">
          <Icon class="SideLeft-body-links-link-icon"
            ><CommentAltRegular
          /></Icon>
          <span class="SideLeft-body-links-link-name">messaging</span>
        </a>
        <a href="#!" class="SideLeft-body-links-link">
          <Icon class="SideLeft-body-links-link-icon"><CloudSatelliteConfig /></Icon>
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
import {AddressCardRegular,CloneRegular,CommentAltRegular} from '@vicons/fa';
import { LocationCompany,CloudSatelliteConfig } from '@vicons/carbon';
import { DeploymentUnitOutlined } from '@vicons/antd';
import { ConferenceRoom28Regular } from '@vicons/fluent';
import { DiscountOutlined, MarkChatReadOutlined } from '@vicons/material';
import image from '@/assets/360.png';

export default {
  components: {
    SettingsIcon,
    GridIcon,
    MessageSquareIcon,
    ChevronRightIcon,
    AddressCardRegular,
    Icon,
    CloneRegular,
    CommentAltRegular,
    CloudSatelliteConfig,
    LocationCompany,
    DeploymentUnitOutlined,
    ConferenceRoom28Regular,
    DiscountOutlined,
    MarkChatReadOutlined
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