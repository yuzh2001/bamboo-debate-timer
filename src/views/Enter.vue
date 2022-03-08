<template>
  <div>
    <v-row justify="center" class="my-auto" align="start">
      <v-col cols="12" sm="6" md="5">
<!--        <intro-card  v-if="!isElectron" />-->
        <change-card :app_ver="app_ver" v-if="!isElectron" />
        <feedback-card />
        <v-card v-if="!isElectron" elevation="2" class="leftCard mb-5">
          <v-card-title class="text-h5 pt-5 pl-8">
            <v-icon color="primary" medium class="mr-4 text-weight-black"
            >fa-bookmark
            </v-icon
            >
            {{ $t('enter.bookmark.title') }}
          </v-card-title>
          <v-card-subtitle
            class="text-left text-body-2 pt-5 pl-10"
            v-html="$t('enter.bookmark.desc')"
          >
          </v-card-subtitle>
          <div data-v-step="98">
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
                <v-expansion-panel-content>
                  <v-card>
                    <v-card-title>
                      计时码
                      <v-spacer></v-spacer>
                      <v-text-field
                        v-model="search"
                        append-icon="mdi-magnify"
                        label="搜索"
                        single-line
                        class="mt-n5"
                        hide-details
                      ></v-text-field>
                    </v-card-title>
                    <v-data-table
                      :headers="headers"
                      :items="goodCodes"
                      :items-per-page="100"
                      :search="search"
                      class="elevation-1"
                    ></v-data-table>
                  </v-card>
                </v-expansion-panel-content>
              </v-expansion-panel>
            </v-expansion-panels>
          </div>
        </v-card>
        <change-log-card />
      </v-col>
      <v-col cols="12" sm="6" md="5">
        <CompCodeCard />
        <v-card class="mt-5">
          <v-card-title class="text-center headline">
            <v-icon color="primary" medium class="mr-4 text-weight-black"
            >fa-sign-in-alt
            </v-icon
            >
            {{ $t('enter.enter.title') }}
          </v-card-title>

          <v-card-text class="text-center">
            <p class="text-subtitle-1 text-left black--text mb-n2 mt-3"
            >
              {{ $t('const.timerCode') }}
            </p>
            <h2 class="black--text" v-if="isElectron">{{ electronTimerId }}</h2>
            <v-text-field
              v-if="!isElectron"
              class="mt-3"
              v-model="code"
              :label="$t('const.timerCode')"
              clearable
              filled
              :rules="[rules.required]"
            ></v-text-field>
            <v-divider/>
            <p class="text-subtitle-1 text-left black--text mb-n2 mt-3">
              {{ $t('enter.additionalSetting') }}
            </p>
            <v-expansion-panels accordion class="mt-6">
              <v-expansion-panel>
                <v-expansion-panel-header>
                  <template v-slot:actions>
                    <v-icon dense>
                      fa-angle-down
                    </v-icon>
                  </template>
                  {{
                    $t('enter.form.teamAndName')
                  }}
                </v-expansion-panel-header>
                <v-divider/>
                <v-expansion-panel-content>
                  <v-text-field
                    class="mt-3"
                    v-model="t0"
                    label="正方队伍名称"
                    :hide-details="true"
                    filled
                  ></v-text-field>
                  <v-text-field
                    class="mt-3"
                    v-model="t1"
                    label="反方队伍名称"
                    :hide-details="true"
                    filled
                  ></v-text-field>
                  <v-text-field
                    class="mt-3"
                    v-model="n0"
                    :hide-details="true"
                    label="正方辩题"
                    filled
                  ></v-text-field>
                  <v-text-field
                    class="mt-3"
                    v-model="n1"
                    :hide-details="true"
                    label="反方辩题"
                    filled
                  ></v-text-field>
                </v-expansion-panel-content>
              </v-expansion-panel>

              <v-expansion-panel>
                <v-expansion-panel-header>
                  <template v-slot:actions>
                    <v-icon dense>
                      fa-angle-down
                    </v-icon>
                  </template>
                  <p style="margin-bottom: 0;margin-top: 2px;">
                    <v-badge :content="$t('enter.form.new')"
                             color='red'>{{ $t('enter.form.additional') }}
                    </v-badge>

                  </p>
                </v-expansion-panel-header>

                <v-divider/>
                <v-expansion-panel-content>
                  <p class="text-left mt-5">默认是倒计时30秒时响铃、变色，您可以在这里↓进行调整。</p>
                  <v-text-field
                    class="mt-3"
                    v-model="ringBellTime"
                    label="响铃时间"
                    messages=""
                    :hide-details="true"
                    filled
                  ></v-text-field>
                  <v-switch
                    v-model="useButton"
                    label="使用按钮操控"
                    color="primary"
                    messages="初次使用建议使用按钮操控，后续为美观目的也可以在这里关闭"
                  ></v-switch>
                  <!-- <p style="margin-bottom: 0;margin-top: 2px;">
                    <v-badge content="新" color='red'>进阶设置</v-badge></p> -->
                  <v-switch
                    v-model="useB"
                    label=""
                    color="primary"
                    messages="在网辩赛事中，空格是腾讯会议的长按发言键，这样可能产生冲突。打开这里的选项可以将原来的空格切换环节变成B键切换环节"
                  >
                    <template v-slot:label>
                      <v-badge content="新" color='red'>使用B键代替空格键</v-badge>

                    </template>
                  </v-switch>
                  <v-switch
                    v-model="useNotifySound"
                    label="开启提示音"
                    color="primary"
                    messages="如果有特殊录制需求，可以在这里关闭提示音"
                  ></v-switch>
                  <v-switch
                    v-model="displayWatermark"
                    label="显示水印"
                    color="primary"
                    :messages="watermarkStr"
                  ></v-switch>
                  <p style="color:red;" class="v-m-t-10">
                    自定义背景功能移到了下面的背景与颜色设置里~
                  </p>
                </v-expansion-panel-content>
              </v-expansion-panel>

              <v-expansion-panel>
                <v-expansion-panel-header>
                  <template v-slot:actions>
                    <v-icon dense>
                      fa-angle-down
                    </v-icon>
                  </template>
                  {{ $t('enter.form.backgroud') }}
                </v-expansion-panel-header>
                <v-divider/>
                <v-expansion-panel-content>
                  <v-switch
                    v-model="customBackground"
                    label="使用自定义背景"
                    color="primary"
                    messages="开启自定义背景选项(需要自行设计背景)"
                  ></v-switch>
                  <v-switch
                    v-model="useUserColor"
                    label="开启自定义字体颜色"
                    color="primary"
                    messages="为了保证自定义背景的美观性，你可以在这里调整计时器页面的一切字体颜色"
                  ></v-switch>
                  <div v-if="useUserColor">
                    <v-switch
                      v-model="useColorCode"
                      label="使用颜色码"
                      color="primary"
                      messages="如果已经输入过颜色组合，可以选择输入颜色码;如果没有生成，那么手动选择一次即可生成颜色码"
                    ></v-switch>
                    <div v-if="!useColorCode">
                      <div class="colorpick mt-4">
                        <p>比赛名</p>
                        <color-picker
                          class="ml-5 cp"
                          style="margin-top:3px;"
                          v-model="color.match"
                        />
                      </div>
                      <div class="colorpick">
                        <p>辩题</p>
                        <color-picker
                          class="ml-5 cp"
                          style="margin-top:3px;"
                          v-model="color.title"
                        />
                      </div>
                      <div class="colorpick">
                        <p>队伍名</p>
                        <color-picker
                          class="ml-5 cp"
                          style="margin-top:3px;"
                          v-model="color.team"
                        />
                      </div>
                      <div class="colorpick">
                        <p>环节名</p>
                        <color-picker
                          class="ml-5 cp"
                          style="margin-top:3px;"
                          v-model="color.round"
                        />
                      </div>
                      <div class="colorpick">
                        <p>单方时间颜色</p>
                        <color-picker
                          class="ml-5 cp"
                          style="margin-top:3px;"
                          v-model="color.bigTimer"
                        />
                      </div>
                      <div class="colorpick">
                        <p>双方时间颜色·正方</p>
                        <color-picker
                          class="ml-5 cp"
                          style="margin-top:3px;"
                          v-model="color.timerZheng"
                        />
                      </div>
                      <div class="colorpick">
                        <p>双方时间颜色·反方</p>
                        <color-picker
                          class="ml-5 cp"
                          style="margin-top:3px;"
                          v-model="color.timerFan"
                        />
                      </div>
                      <p class="mt-3">
                        颜色码(中括号内的部分)：【{{ colorCode }}】
                      </p>
                    </div>
                    <div v-else>
                      <v-text-field
                        class="mt-3"
                        v-model="color.code"
                        label="颜色码"
                        :hide-details="true"
                        filled
                      ></v-text-field>
                    </div>
                    <p class="mt-3">
                      颜色码可以让你很方便地与其他共事者同步自定义的字体颜色
                      （只需要打开上方的使用颜色码开关，然后输入颜色码就可以使用预设好的颜色）
                    </p>
                  </div>
                </v-expansion-panel-content>
              </v-expansion-panel>
            </v-expansion-panels>
          </v-card-text>
          <div class="flex flex-row justify-start align-center">
            <h2>语言·Language</h2>
            <v-btn-toggle
              borderless
              mandatory
              v-model="languageSelection"
            >
              <v-btn value="zh">
                <span class="hidden-sm-and-down">简体中文</span>
              </v-btn>

              <v-btn value="zh_TW">
                <span class="hidden-sm-and-down">繁體中文</span>
              </v-btn>

              <v-btn value="en">
                <span class="hidden-sm-and-down">English</span>
              </v-btn>
            </v-btn-toggle>
          </div>
          <v-spacer></v-spacer>
          <v-card-actions>
            <v-spacer></v-spacer>
            <!-- <v-btn color="primary" block :href="`https://b.bianlun.chat/show/?rid=${code}`"> -->
            <v-btn
              color="primary"
              :disabled="cantForward"
              block
              @click="computedUrl"
            >
              {{ $t('enter.form.open') }}
            </v-btn>
            <v-spacer></v-spacer>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
    <v-dialog
      v-model="ipDialog"
      width="500"
    >
      <v-card>
        <v-card-title class="text-h5 primary white--text">
          海外用户提醒
        </v-card-title>

        <v-card-text class="text-left">
          <br>
          Hello there, we detect that your ip address doesn't locate in mainland China. <br>
          If your main language is English, you can change it as you wish.<br/>
          While this website is located in mainland china, you may suffer network problems. <br/>
          However, we provide a website located in Singapore, please click: <v-chip link href="http://asia.timer.bianlun.online">CLICK ME(Singapore server)</v-chip>
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
            @click="ipDialog = false"
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
    </v-dialog>
    <v-dialog
      v-model="crashDialog"
      width="500"
    >
      <v-card>
        <v-card-title class="text-h5 primary white--text">
          重要提醒！
        </v-card-title>

        <v-card-text class="text-left">
          <br>
          重要提醒！<br>
          为了计时器能够进一步发展，为大家提供更多功能，自1.28版本开始，我们将放弃对老旧的浏览器的支持。
          它们包括但不限于 【IE浏览器任意版本】【Chrome54以下版本】等。 <br/>
          如果很不幸你将要使用的浏览器符合上述描述，或者在实际测试中遇到了不能正常使用的情况：
          1. 请使用一个停止更新的兼容版：
          <v-btn href="https://legacy.timer.bianlun.online" color="primary" small>兼容版</v-btn>
          <h3 class="red--text">2. 如果你对你将要使用计时器的电脑中浏览器环境不确定，强烈建议你申请离线版计时器。</h3>
        </v-card-text>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="primary"
            @click="crashDialog = false"
          >
            我已了解【IE浏览器】已不再受支持
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>
<style lang="scss" scoped>
.colorpick {
  display: flex;
  flex-direction: row;
  margin-top: 5px;
  font-size: 15px;

  .cp {
    height: 17px;
    border: 1px solid black;
  }
}
</style>

<script>
import md5 from 'js-md5';
import { Base64 } from 'js-base64';
import axios from 'axios';
// eslint-disable-next-line import/extensions
import offlineConfig from '@/libs/offlineConfig';
// eslint-disable-next-line import/extensions
import { nowVersion, updateLogs, updateTime } from '@/libs/version';
import CompCodeCard from '../components/enterCards/CompCodeCard.vue';
// import IntroCard from '../components/enterCards/IntroCard.vue';
import ChangeCard from '../components/enterCards/ChangeCard.vue';
import FeedbackCard from '../components/enterCards/FeedbackCard.vue';
import ChangeLogCard from '../components/enterCards/ChangeLogCard.vue';

export default {
  name: 'Enter',
  components: {
    ChangeLogCard,
    FeedbackCard,
    ChangeCard,
    CompCodeCard,
  },
  metaInfo: {
    meta: [
      { name: 'description', content: '辩之竹辩论计时器,进入计时器' },
      {
        name: 'keywords',
        content: '辩之竹,Online辩论,辩论,辩论计时器,进入计时器,计时码',
      },
    ],
  },
  async mounted() {
    this.languageSelection = this.$i18n.locale;
    const { data: { data: { data: { country } } } } = await axios.get('https://hn216.api.yesapi.cn/?s=Ext.IP.GetInfo&return_data=0&app_key=6EC14C1A2BD1952E71390CFCB082858F&sign=33B5DE7F62ED98031FCA0AA8D9C26B4A');
    console.log(country);
    if (country !== '中国') {
      if (window.location.href.indexOf('asia') === -1) this.ipDialog = true;
    }
    this.userIpInfo.country = country;
    if (this.isElectron) return;
    if (this.$route.query.rid !== undefined) {
      this.code = this.$route.query.rid;
    } else {
      this.code = 0;
      const that = this;
      setTimeout(() => {
        that.code = '';
      }, 10);
    }
    const url = 'https://hn216.api.yesapi.cn/?s=App.Main_Set.Query&return_data=0&page=1&perpage=1000&sort=1&key=global_timer_codes&app_key=6EC14C1A2BD1952E71390CFCB082858F&sign=669F684F633D8DEBDE91C6110437B133';
    const { data } = await axios.get(url);
    const { items } = data.data;
    const content = [];
    for (let i = 0; i < items.length; i += 1) {
      content.push({ name: items[i].data.name, code: items[i].data.code });
    }
    this.goodCodes = content;
  },
  data() {
    const elecCode = offlineConfig.timerId;
    return {
      ringBellTime: 30,
      languageSelection: 'zh',
      crashDialog: true,
      app_ver: nowVersion,
      ipDialog: false,
      userIpInfo: {
        ip: '',
        address: '',
        cid: '',
        dialog: false,
      },
      isElectron: process.env.IS_ELECTRON === true,
      lastUpdateTime: updateTime,
      updateTxt: updateLogs,
      electronTimerId: offlineConfig.timerId,
      search: '',
      headers: [
        {
          text: this.$t('enter.codes.headers.name'),
          align: 'start',
          value: 'name',
        },
        { text: this.$t('enter.codes.headers.code'), value: 'code' },
        // { text: '使用次数', value: 'useTimes' },
      ],
      goodCodes: [
        {
          code: '1',
          name: '国际华语辩论邀请赛「新国辩」',
        },
        {
          code: '2',
          name: '2018国际华语辩论邀请赛',
        },
        {
          code: '3',
          name: '世界华语辩论锦标赛',
        },
        {
          code: '4',
          name: '华语辩论世界杯',
        },
        {
          code: '5',
          name: '华语网络辩论赛超级联赛',
        },
        {
          code: '6',
          name: '华语网络辩论赛甲级联赛',
        },
        {
          code: '7',
          name: '中华辩论联赛「CDA」',
        },
        {
          code: '21',
          name: '深语·主题网络辩论赛「2v2」',
        },
        {
          code: '9',
          name: '深语·主题网络辩论赛「3v3」',
        },
      ],
      customBackground: false,
      customBackgroundPass: '',
      t0: '',
      t1: '',
      n0: '',
      n1: '',
      useUserColor: false,
      useColorCode: false,
      color: {
        code: '',
        title: '#e0ffff',
        team: '#ffffff',
        match: '#28769b',
        round: '#ffffff',
        bigTimer: '#ffffff',
        timerZheng: '#BF2727',
        timerFan: '#007A9C',
      },
      useEnglish: false,
      useTraditional: false,
      useButton: true,
      useB: false,
      rules: {
        required: (value) => !!value || this.$t('enter.timerCodeWarn'),
      },
      useNotifySound: true,
      code: process.env.IS_ELECTRON ? elecCode : '',
      watermarkStr: this.$t('enter.settings.watermarkHint'),
      displayWatermark: true,
    };
  },
  methods: {
    generateCode() {
      const { code, customBackgroundPass } = this;
      return md5(code + customBackgroundPass + code);
    },
    computedUrl() {
      let { code } = this;
      if (this.code === '') code = 1;
      const params = {
        rid: code,
        nub: !this.useButton,
        useb: this.useB,
        off: this.isElectron,
        ringBellTime: this.ringBellTime,
      };
      // const host = process.env.VUE_APP_HOST;
      const str = `./#/show/?rid=${code}&nub=${!this.useButton}&useb=${this.useB}&off=${this.isElectron}`;
      if (this.customBackground) params.custom = true;
      // str += '&custom=true'; // &code=${this.generateCode()}
      if (this.displayWatermark) params.water = true;// str += '&water=true';
      else params.water = false;// str += '&water=false';
      if (!this.useNotifySound) params.notify = false;// str += '&notify=false';
      if (this.useUserColor) params.color = true;// str += '&color=true';
      if (this.useColorCode && this.color.code !== '') {
        // str += `&colorCode=${(
        //   Base64.decode(this.color.code),
        // )}`;
        params.colorCode = Base64.decode(this.color.code);
      } else {
        // str += `&colorCode=${(
        //   Base64.decode(this.colorCode),
        // )}`;
        params.colorCode = Base64.decode(this.colorCode);
      }
      console.log(this.t0, this.n0);
      if (this.t0 !== '') {
        params.n0 = this.t0;
        params.n1 = this.t1;
        // str += `&n0=${(this.t0)}&n1=${(
        //   this.t1,
        // )}`;
      }
      if (this.n0 !== '') {
        params.t0 = this.n0;
        params.t1 = this.n1;
        // str += `&t0=${(this.n0)}&t1=${(
        //   this.n1,
        // )}`;
      }
      console.log(params);
      this.$router.push({ name: 'Show', query: params });
      return str;
    },
  },
  computed: {
    compTimerUrl() {
      return `${process.env.VUE_APP_VUERO_HOST}/#/app/timer-set/list`;
    },
    cantForward() {
      return this.code === 0;
    },
    colorCode() {
      const {
        title,
        team,
        match,
        round,
        bigTimer,
        timerZheng,
        timerFan,
      } = this.color;
      return Base64.encode(
        [title, team, match, round, bigTimer, timerZheng, timerFan].join('|'),
      );
    },
  },
  watch: {
    languageSelection(newV, old) {
      this.$i18n.locale = newV;
      console.log(newV, old);
    },
  },
};
</script>
