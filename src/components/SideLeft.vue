<template>
  <div class="SideLeft">
    <div class="SideLeft-head">360 coporation</div>
    <div class="SideLeft-body">
      <div class="SideLeft-body-links">
        <div class="SideLeft-body-links-link">
          <i class="SideLeft-body-links-link-icon"><GridIcon /></i>
          <span class="SideLeft-body-links-link-name">dashboard</span>
        </div>
        <div class="SideLeft-body-links-link">
          <i class="SideLeft-body-links-link-icon"><SettingsIcon /></i>
          <span class="SideLeft-body-links-link-name">settings</span>
          <i class="SideLeft-body-links-link-right_icon"><ChevronRightIcon /></i>
        </div>
        <div class="SideLeft-body-links-link">
          <i class="SideLeft-body-links-link-icon"><MessageSquareIcon /></i>
          <span class="SideLeft-body-links-link-name">feeds</span>
        </div>
        <div class="SideLeft-body-links-link">
          <Icon class="SideLeft-body-links-link-icon">
            <CloneRegular />
          </Icon>
          <span class="SideLeft-body-links-link-name">user managements</span>
          <i class="SideLeft-body-links-link-right_icon"><ChevronRightIcon /></i>
        </div>
        <div class="SideLeft-body-links-link">
            <Icon class="SideLeft-body-links-link-icon">
              <AddressCardRegular />
            </Icon>
          <span class="SideLeft-body-links-link-name"
            >contacts managements</span
          >
          <i class="SideLeft-body-links-link-right_icon"><ChevronRightIcon /></i>
        </div>
        <div class="SideLeft-body-links-link">
          <i class="SideLeft-body-links-link-icon"><SettingsIcon /></i>
          <span class="SideLeft-body-links-link-name">departments</span>
          <i class="SideLeft-body-links-link-right_icon"><ChevronRightIcon /></i>
        </div>
        <div class="SideLeft-body-links-link">
          <i class="SideLeft-body-links-link-icon"><SettingsIcon /></i>
          <span class="SideLeft-body-links-link-name">schedule & reports</span>
        </div>
        <div class="SideLeft-body-links-link">
          <i class="SideLeft-body-links-link-icon"><SettingsIcon /></i>
          <span class="SideLeft-body-links-link-name">inventory</span>
        </div>
        <div class="SideLeft-body-links-link">
          <i class="SideLeft-body-links-link-icon"><SettingsIcon /></i>
          <span class="SideLeft-body-links-link-name">sales & payments</span>
        </div>
        <div class="SideLeft-body-links-link">
          <i class="SideLeft-body-links-link-icon"><SettingsIcon /></i>
          <span class="SideLeft-body-links-link-name">companies</span>
        </div>
        <div class="SideLeft-body-links-link">
          <i class="SideLeft-body-links-link-icon"><SettingsIcon /></i>
          <span class="SideLeft-body-links-link-name">requests</span>
        </div>
        <div class="SideLeft-body-links-link">
          <i class="SideLeft-body-links-link-icon"><SettingsIcon /></i>
          <span class="SideLeft-body-links-link-name">messaging</span>
        </div>
        <div class="SideLeft-body-links-link">
          <i class="SideLeft-body-links-link-icon"><SettingsIcon /></i>
          <span class="SideLeft-body-links-link-name">conferencing</span>
        </div>
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
import { AddressCardRegular,CloneRegular } from '@vicons/fa';

export default {
  components: {
    SettingsIcon,
    GridIcon,
    MessageSquareIcon,
    ChevronRightIcon,
    AddressCardRegular,
    Icon,
    CloneRegular,
  }
};
</script>

<style lang="scss" scoped>
@import '@/styles/sideleft.scss';
</style>