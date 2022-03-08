<template>
  <v-card>
    <v-card-title class="text-center headline">
      <v-icon color="primary" medium class="mr-4 text-weight-black"
      >fa-sign-in-alt
      </v-icon
      >
      赛事码
    </v-card-title>
    <p class="text-left px-10">

      赛事码是将计时码与【背景、字体、颜色码】绑定的一个新码，如果您的比赛需要自定义背景，可以使用这个新功能，将自定义背景上传到服务器，后续计时人员就无需再进行复杂的自定义背景操作
      <br/>
      如果您的比赛不需要自定义背景，可以无视此处的赛事码。<br/>
      创建赛事码后，请通知您的计时人员点击此处下方按钮进入Online辩论新系统，注册账号后在赛事码大厅搜索您的比赛名称，即可一键打开配置好了的计时器。
    </p>
    <v-row>
      <v-col cols="2"></v-col>
      <v-col cols="8">
        <v-btn
          color="error"
          block
          :href="timerUrl"
        >
          【新功能：点击这里使用赛事码】
        </v-btn>
      </v-col>
      <v-col cols="2"></v-col>
    </v-row>
  </v-card>
</template>

<script>
export default {
  name: 'CompCodeCard',
  data() {
    return {
      timerUrl: 'https://bianlun.online',
    };
  },
  mounted() {
    const { href } = window.location;
    if (href.split('//')[1].startsWith('asia')) {
      this.timerUrl = 'https://asia.bianlun.online';
    }
  },
};
</script>

<style scoped>

</style>
