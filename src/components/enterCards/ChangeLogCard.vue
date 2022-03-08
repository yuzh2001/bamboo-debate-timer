<template>
  <v-card elevation="2" class="leftCard mt-5">
    <v-card-title class="text-h5 pt-5 pl-8">
      <v-icon color="primary" medium class="mr-4 text-weight-black"
      >fa-bookmark
      </v-icon
      >
      {{ $t('enter.updateLog') }}
    </v-card-title>
    <v-card-subtitle class="text-left text-body-2 pt-5 pl-10">
      最近一次更新时间：
      <p class="red--text">{{ lastUpdateTime }}</p></v-card-subtitle
    >
    <div data-v-step="98">
      <v-expansion-panels>
        <v-expansion-panel>
          <v-expansion-panel-header>

            <template v-slot:actions>
              <v-icon dense>
                fa-angle-down
              </v-icon>
            </template>
            点我展开
          </v-expansion-panel-header>
          <v-expansion-panel-content>
            <div class="text-left" v-html="updateTxt">
            </div>
          </v-expansion-panel-content>
        </v-expansion-panel>
      </v-expansion-panels>
    </div>
  </v-card>
</template>

<script>
// eslint-disable-next-line import/extensions
import { updateLogs, updateTime } from '@/libs/version';

export default {
  name: 'ChangeLogCard',
  data() {
    return {
      lastUpdateTime: '',
      updateTxt: '',
    };
  },
  mounted() {
    this.lastUpdateTime = updateTime;
    this.updateTxt = updateLogs;
  },
};
</script>

<style scoped>

</style>
