<template>

  <v-card elevation="2" class="leftCard mb-5">
    <v-card-title class="text-h5 pt-5 pl-8 red--text">
      <v-icon medium class="mr-4 text-weight-black" color="red"
      >fa-bug
      </v-icon
      >
      {{ $t('enter.reachUs') }}

    </v-card-title>
    <v-card-subtitle class="text-left text-body-2 pt-5 pl-10">
      <h2 class="red--text">刚刚进行了大版本更新，若出现问题您可以直接联系微信（见下）！</h2>
    </v-card-subtitle>
    <v-expansion-panels>
      <v-expansion-panel>
        <v-expansion-panel-header>
          <template v-slot:actions>
            <v-icon dense>
              fa-angle-down
            </v-icon>
          </template>
          {{ $t('const.expand') }}
        </v-expansion-panel-header>
        <v-expansion-panel-content class="text-left">
          <h3>
            如果计时器在您的电脑上没有正常工作，首先诚挚地向您表示歉意。
          </h3>
          <br/>出现问题时，您可以通过以下方式联系到我们：<br/>
          如果问题不是特别紧急，您可以加QQ群992868670来反馈，我们的技术部人员会保持待命。<br/>
          如果遇到了紧急情况，比如比赛马上将要开始，您可以直接加微信：yuzhuohao来取得快速的帮助。
          <br/>
          再次对于软件出现问题、给您带来不好的使用体验表示歉意，感谢您一直以来对辩之竹的支持与认可。
        </v-expansion-panel-content>
      </v-expansion-panel>
    </v-expansion-panels>
  </v-card>
</template>

<script>
export default {
  name: 'FeedbackCard',
};
</script>

<style scoped>

</style>
