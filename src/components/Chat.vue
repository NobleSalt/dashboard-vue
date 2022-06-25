<template>
  <div class="Chat">
    <div class="Chat-head">
      <div class="Chat-head-left">
        <i class="Chat-head-left-icon"><MessageSquareIcon /> </i>
        <span class="Chat-head-left-name">recent general feeds</span>
      </div>
      <div class="Chat-head-right">
        <i class="Chat-head-right-icon">
          <SearchIcon />
        </i>
        <input
          type="text"
          class="Chat-head-right-input"
          placeholder="search..."
        />
      </div>
    </div>
    <div class="Chat-lists">
      <div class="Chat-lists-item">
        <div class="Chat-lists-item-top">
          <div class="Chat-lists-item-top-left">
            <img :src="man" alt="" class="Chat-lists-item-top-left-img" />
            <div class="Chat-lists-item-top-left-name">moses olaniyi</div>
          </div>
          <div class="Chat-lists-item-top-right">
            Tue 24 May, 2022 04. 01:22
          </div>
        </div>
        <div class="Chat-lists-item-body">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
          temporibus deleniti fugiat possimus tempore sapiente recusandae
          excepturi repudiandae, architecto dolorem blanditiis, quaerat
          consequatur enim laborum voluptatem exercitationem incidunt, adipisci
          necessitatibus.
        </div>
      </div>
      <hr>
      <div class="Chat-lists-item">
        <div class="Chat-lists-item-top">
          <div class="Chat-lists-item-top-left">
            <img :src="man" alt="" class="Chat-lists-item-top-left-img" />
            <div class="Chat-lists-item-top-left-name">juliet chinwere</div>
          </div>
          <div class="Chat-lists-item-top-right">
            Tue 24 May, 2022 04. 01:22
          </div>
        </div>
        <div class="Chat-lists-item-body">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
          temporibus deleniti fugiat possimus tempore sapiente recusandae
          excepturi repudiandae, architecto dolorem blanditiis, quaerat
          consequatur enim laborum voluptatem exercitationem incidunt, adipisci
          necessitatibus.
        </div>
      </div>
      <hr>
      <div class="Chat-lists-item">
        <div class="Chat-lists-item-top">
          <div class="Chat-lists-item-top-left">
            <img :src="man" alt="" class="Chat-lists-item-top-left-img" />
            <div class="Chat-lists-item-top-left-name">super admin</div>
          </div>
          <div class="Chat-lists-item-top-right">
            Tue 24 May, 2022 04. 01:22
          </div>
        </div>
        <div class="Chat-lists-item-body">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
          temporibus deleniti fugiat possimus tempore sapiente recusandae
          excepturi repudiandae, architecto dolorem blanditiis, quaerat
          consequatur enim laborum voluptatem exercitationem incidunt, adipisci
          necessitatibus.
        </div>
      </div>
      <hr>
      <div class="Chat-lists-item">
        <div class="Chat-lists-item-top">
          <div class="Chat-lists-item-top-left">
            <img :src="man" alt="" class="Chat-lists-item-top-left-img" />
            <div class="Chat-lists-item-top-left-name">moses olaniyi</div>
          </div>
          <div class="Chat-lists-item-top-right">
            Tue 24 May, 2022 04. 01:22
          </div>
        </div>
        <div class="Chat-lists-item-body">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
          temporibus deleniti fugiat possimus tempore sapiente recusandae
          excepturi repudiandae, architecto dolorem blanditiis, quaerat
          consequatur enim laborum voluptatem exercitationem incidunt, adipisci
          necessitatibus.
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { SearchIcon, MessageSquareIcon } from '@vue-icons/feather';
import man from '@/assets/man.png';

export default {
  components: { SearchIcon, MessageSquareIcon },
  data () {
    return {
      man:man
    }
  }
};
</script>

<style scoped lang="scss">
@import '@/styles/chat.scss';
</style>