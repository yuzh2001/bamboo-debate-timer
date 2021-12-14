<template>
  <div>
    <v-row justify="center" class="my-auto" align="start">
      <v-col cols="12" sm="6" md="5">
        <v-card elevation="2" class="leftCard mb-5" v-if="!isElectron">
          <v-card-title class="text-h5 pt-5 pl-8">
            <v-icon color="primary" medium class="mr-4 text-weight-black"
            >fa-home
            </v-icon
            >
            辩之竹计时器介绍
          </v-card-title>
          <v-card-subtitle class="text-left text-body-2 pt-5 pl-10">
            <h3>
              辩之竹计时器是一款美观大方的计时器，它有如下几个好用的特性：
            </h3>

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
                1. 我们采用了<u><strong>拖拽式卡片赛制生成器</strong></u
              >，大大降低了编写赛制的难度；<br/>
                2. <u><strong>所有计时码无限期保存</strong></u
              >，只要有码就可以随时使用；<br/>
                3. 经过半年的开发与迭代，目前系统整体<u
              ><strong>稳定性经过了上千场辩论赛事的考验</strong></u
              >，可以放心使用；<br/>
                4. 随时反馈bug、提出意见，开发者高强度在线，<u
              ><strong>及时解决一切问题</strong></u
              >；<br/>
                5. 精心适配，辩之竹计时器可以<u
              ><strong>在任何设备上使用（电脑、手机、平板都可以）</strong></u
              >，并保证显示效果正常。<br/>
                <br/>
                辩之竹计时器目前已经为超过<strong>3000场</strong>辩论赛事提供了<strong>600,000分钟</strong>的服务，
                同时还为<strong>三十余家企业、政府机关</strong>等提供计时器支持。可以用在辩论赛事以及任何需要计时的场景。<br/>
                辩之竹计时器<u><strong>免费使用</strong></u
              >，祝你使用愉快~ <br/><br/>
                <h3>一秒记住我们的链接：timer.bianlun.online</h3>
                （timer→计时器，bianlun→辩论，online→Online）
                <br/>
                <br/>
                <h2 class="red--text">您现在也可以直接在百度或者谷歌上搜索“辩之竹计时器”来查询到本网站。</h2>
              </v-expansion-panel-content>
            </v-expansion-panel>
          </v-expansion-panels>
        </v-card>
        <v-card elevation="2" class="leftCard mb-5" v-if="!isElectron">
          <v-card-title class="text-h5 pt-5 pl-8">
            <v-icon color="primary" medium class="mr-4 text-weight-black"
            >fa-star
            </v-icon
            >
            <v-badge :content="$t('enter.form.new')"
                     color='red' class="">新功能 {{ app_ver }} 版本
            </v-badge>
          </v-card-title>
          <v-card-text class="text-left pt-5">
            <v-expansion-panels>
              <v-expansion-panel>
                <v-expansion-panel-header>[1214] 全屏</v-expansion-panel-header>
                <v-expansion-panel-content>
                  加入一键全屏（进入计时器可见）
                </v-expansion-panel-content>
              </v-expansion-panel>
              <v-expansion-panel>
                <v-expansion-panel-header>[1204] 开源</v-expansion-panel-header>
                <v-expansion-panel-content>自从2020年12月4日写下第一行代码以来，辩之竹已经正正好好走过了一年。在这样一个特殊的时间节点
                  我们将辩之竹开源，希望对辩论有兴趣的同学都可以参与到这款计时器的开发中。Online辩论辩之竹计时器的第一年
                  ，感谢大家的使用。愿我们一起继续前行！<br/>
                  或许来点个star？
                  <a
                    href="https://github.com/pkmq24/bamboo-debate-timer">https://github.com/pkmq24/bamboo-debate-timer</a>
                  <img src="https://img.shields.io/github/stars/pkmq24/bamboo-debate-timer.svg" alt="">
                </v-expansion-panel-content>
              </v-expansion-panel>
              <v-expansion-panel>
                <v-expansion-panel-header>
                  [1203] 全自定义的环节
                </v-expansion-panel-header>
                <v-expansion-panel-content>
                  【测试】现在可以在生成计时器页面的环节卡中，选择环节类别为“自定义”，然后自由输入环节名、选择计时器数量、选择时间。<br/>
                  使用这个功能，你可以用辩之竹做任何一个活动的计时器，它将不局限在辩论中。<br/>
                  由于是测试性质，如果出现bug，烦请加群反馈~
                </v-expansion-panel-content>
              </v-expansion-panel>
              <v-expansion-panel>
                <v-expansion-panel-header>
                  [1115] 多语言支持
                </v-expansion-panel-header>
                <v-expansion-panel-content>如果您有打英文辩论的需求，可以在右侧【附加功能设置】中打开”使用英文界面“开关，您便可以使用
                  英文版本的辩之竹计时器啦~
                </v-expansion-panel-content>
              </v-expansion-panel>
              <v-expansion-panel>
                <v-expansion-panel-header>
                  [1113] 短域名&nbsp; <div class="red--text">debate.icu</div>
                </v-expansion-panel-header>
                <v-expansion-panel-content>您今后可以使用
                  <v-chip href="http://debate.icu" color="error" label><h3>debate.icu</h3></v-chip>
                  来访问本站。(大家要注意身体哦)
                </v-expansion-panel-content>
              </v-expansion-panel>
              <v-expansion-panel>
                <v-expansion-panel-header>
                  [1113] 海外服务器</v-expansion-panel-header>
                <v-expansion-panel-content>
                  如果您打开本计时器时的ip是大陆外ip，我们会引导您转向海外服务器。今后马来西亚等非大陆的辩手在访问计时器时会更加稳定。
                  您也可以手动点击跳转（就是计时器链接前面加一个asia）<br>
                  <v-chip href="http://asia.timer.bianlun.online" color="error" label><h3>asia.timer.bianlun.online</h3>
                  </v-chip>
                </v-expansion-panel-content>
              </v-expansion-panel>
              <v-expansion-panel>
                <v-expansion-panel-header>[0912] 离线版</v-expansion-panel-header>
                <v-expansion-panel-content>①无需配置、保证可以稳定运行<br/>
                  ②可以在断网环境下使用，适合报告厅等场景<br/>
                  有需要的可以加入QQ群992868670申请
                </v-expansion-panel-content>
              </v-expansion-panel>
            </v-expansion-panels>
          </v-card-text>
        </v-card>
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

        <v-card elevation="2" class="leftCard mb-5" v-if="!isElectron">
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

      </v-col>
      <v-col cols="12" sm="6" md="5">
        <v-card class="">
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
                  <v-switch
                    v-model="useButton"
                    label="使用按钮操控"
                    color="primary"
                    messages="初次使用建议使用按钮操控，后续为美观目的也可以在这里关闭"
                  ></v-switch>
                  <v-switch
                    v-model="useEnglish"
                    label=""
                    color="primary"
                    messages="测试性质！部分界面英化，计时器页面完全英化"
                  >
                    <template v-slot:label>
                      <v-badge content="新" color='red'>使用英文界面</v-badge>

                    </template>
                  </v-switch>
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
                    自定义背景功能移到了下面的超级设置里~
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
                  <div class="text-left" v-html="updateTxt"></div
                  >
                </v-expansion-panel-content>
              </v-expansion-panel>
            </v-expansion-panels>
          </div>
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
          While the language of this timer is Simplified Chinese,
          we can also offer a version that has an English user interface. <br>
          If you think you may need the English version,
          please reach us by sending an email to pkmq24@qq.com <br>
          <br>
          你好！我们检测到你的电脑的网络ip位于{{ userIpInfo.cname }}。<br>
          目前你访问的计时器部署在大陆服务器中，有可能在你使用的地方体验不佳。
          我们为你提供一个海外节点，请使用：
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

export default {
  name: 'Enter',
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
    this.useEnglish = this.$i18n.locale === 'en';
    // eslint-disable-next-line no-undef
    this.userIpInfo = returnCitySN;
    // eslint-disable-next-line no-undef
    const { cid } = returnCitySN;
    if (cid !== parseInt(cid, 10).toString()) {
      if (window.location.href.indexOf('asia') === -1) this.ipDialog = true;
    }
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
    useEnglish(old, newV) {
      this.$i18n.locale = !newV ? 'en' : 'zh';
    },
  },
};
</script>
