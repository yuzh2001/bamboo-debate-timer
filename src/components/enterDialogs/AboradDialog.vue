<template>
    <v-card>
      <v-card-title class="text-h5 primary white--text">
        海外用户提醒
      </v-card-title>

      <v-card-text class="text-left">
        <br>
        Hello there, we detect that your ip address doesn't locate in mainland China. <br>
        While the language of this timer is Simplified Chinese,
        we can also offer a version that has an English user interface. <br>
        If you think you may need the English version,
        please reach us by sending an email to pkmq24@qq.com <br>
        <br>
        你好！我们检测到你的电脑的网络ip位于 <span class="red--text">{{ userIpInfo.country }}</span>。<br>
        目前你访问的计时器部署在大陆服务器中，有可能在你使用的地方体验不佳。
        我们为你提供一个部署在新加坡的海外节点，请使用：
        <v-chip link href="http://asia.timer.bianlun.online">asia.timer.bianlun.online(点我跳转)</v-chip>
        ，即在本网站链接前加上“asia” <br>
      </v-card-text>

      <v-divider></v-divider>

      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn
          color="primary"
          text
          @click="dia = false"
        >
          点这里继续使用大陆服务器
        </v-btn>
        <v-btn
          color="primary"
          text
          href="http://asia.timer.bianlun.online"
        >
          点这里使用海外服务器
        </v-btn>
      </v-card-actions>
    </v-card>
</template>

<script>
export default {
  name: 'AboradDialog',
  props: {
    ipDialog: {
      type: Boolean,
      default: false,
    },
  },
  mounted() {
    this.dia = !this.ipDialog;
    console.log(this.ipDialog);
  },
  data() {
    return {
      dia: false,
    };
  },
};
</script>

<style scoped>

</style>
