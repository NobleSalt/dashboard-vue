<template>
  <div class="SideRightMain">
    <div class="cards">
      <div class="cards-card e">
        <div class="cards-card-left">
          <div class="cards-card-left-title">products</div>
          <div class="cards-card-left-number">3</div>
        </div>
        <img :src="box" alt="" class="cards-card-right" />
      </div>
      <div class="cards-card">
        <div class="cards-card-left">
          <div class="cards-card-left-title">sales</div>
          <div class="cards-card-left-number">N16,345.00</div>
        </div>
        <img :src="trade" alt="" class="cards-card-right" />
      </div>
      <div class="cards-card">
        <div class="cards-card-left">
          <div class="cards-card-left-title">posts</div>
          <div class="cards-card-left-number">177</div>
        </div>
        <img :src="add" alt="" class="cards-card-right" />
      </div>
      <div class="cards-card">
        <div class="cards-card-left">
          <div class="cards-card-left-title">users</div>
          <div class="cards-card-left-number">107</div>
        </div>
        <img :src="people" alt="" class="cards-card-right" />
      </div>
    </div>
  </div>
</template>

<script>
import box from '@/assets/box.png';
import trade from '@/assets/trade.png';
import add from '@/assets/add.png';
import people from '@/assets/people.png';

export default {
  data() {
    return {
      box: box,
      trade: trade,
      add: add,
      people: people,
    };
  }
};
</script>

<style scoped lang="scss">
@import '@/styles/sidetightmain.scss';
</style>