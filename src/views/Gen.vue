<template>
  <div class="home">
    <v-row>
      <!-- 左侧
      <v-col cols="0" class="hidden-sm-and-down" sm="6" md="6" lg="6">
        <div data-v-step="1">
          <v-card elevation="2" class="pb-6">
            <v-card-title class="text-h3 pt-10 pl-10">
              <v-icon color="primary" large class="mr-4">fa-bookmark</v-icon>
              常用&示例区
              <v-spacer></v-spacer>
              <v-icon
                @click="startTour"
                color="warning"
                data-v-step="7"
                large
                class="mr-4"
                >fa-question</v-icon
              >
            </v-card-title>
            <v-card-subtitle class="text-left text-h6 pt-5 pl-10">
              使用示例环节卡片的方法：<br />①点击卡片右下角的复制按钮<br />或者<br />②从左侧拖到右侧</v-card-subtitle
            >

            <draggable
              :list="list1"
              :group="{ name: 'people', pull: 'clone', put: false }"
            >
              <debate-card
                class="leftCard"
                v-for="item in list1"
                :key="item.id"
                @doPaste="doPaste"
                :id="item.id"
                :category="item.category"
                :time="item.time"
                :attackSide="item.attackSide"
                :attackPosition="item.attackPosition"
                :title="item.title"
                :defendPosition="item.defendPosition"
                :displayDrop="false"
                @deleteIt="delIt(item.id)"
                @copy="copyIt"
                @change="change1"
              />
            </draggable>
          </v-card>
        </div>
      </v-col> -->
      <!-- 小左侧 -->
      <v-col>
        <v-card elevation="2" class="leftCard">
          <v-card-title class="text-h5 pt-5 pl-8">
            <v-icon color="primary" medium class="mr-4 text-weight-black"
              >fa-bookmark</v-icon
            >
            常用&示例区
            <v-spacer></v-spacer>
            <v-icon
              @click="startTour"
              color="warning"
              data-v-step="7"
              large
              class="mr-4 hidden-sm-and-down"
              >fa-question</v-icon
            >
          </v-card-title>
          <v-card-subtitle class="text-left text-body-2 pt-5 pl-10">
            使用示例环节卡片的方法：<br />先展开，然后挑一个喜欢的，点击卡片右下角的复制按钮，即可在内容区看到对应环节</v-card-subtitle
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
                  <debate-card
                    v-for="item in list1"
                    :key="item.id"
                    @doPaste="doPaste"
                    :id="item.id"
                    :category="item.category"
                    :time="item.time"
                    :timeCC="item.timeCC"
                    :attackSide="item.attackSide"
                    :attackPosition="item.attackPosition"
                    :title="item.title"
                    :defendPosition="item.defendPosition"
                    :displayDrop="false"
                    :isCustomDual="item.isCustomDual"
                    @deleteIt="delIt(item.id)"
                    @copy="copyIt"
                    @change="change1"
                  />
                </v-expansion-panel-content>
              </v-expansion-panel>
            </v-expansion-panels>
          </div>
        </v-card>
        <v-card elevation="2" class="leftCard mt-10">
          <v-card-title class="text-h5 pt-5 pl-8">
            <v-icon color="primary" medium class="mr-4 text-weight-black"
              >fa-bookmark</v-icon
            >
            更新日志
          </v-card-title>
          <v-card-subtitle class="text-left text-body-2 pt-5 pl-10">
            最近一次更新时间：
            <p class="red--text">{{lastUpdateTime}}</p></v-card-subtitle
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
                ></v-expansion-panel-content>
              </v-expansion-panel>
            </v-expansion-panels>
          </div>
        </v-card>
      </v-col>
      <!-- 右侧 -->
      <v-col cols="12" sm="12" md="6" lg="6">
        <div data-v-step="2">
          <v-card elevation="2" class="pb-3">
            <v-card-title
              data-v-step="21"
              class="text-h5 text-md-h3 text-sm-h5 pt-5 pt-md-10 pl-md-10 pl-8"
            >
              <v-icon color="primary" large class="mr-4 hidden-sm-and-down"
                >fa-user-edit</v-icon
              >
              <v-icon color="primary" medium class="mr-4 hidden-md-and-up"
                >fa-user-edit</v-icon
              >
              赛制内容区
            </v-card-title>

            <v-card-subtitle
              class="text-left text-md-h6 text-body-2 pt-5 pl-5 pl-md-10"
              ><div data-v-step="20">
                <p class="text-md-h5 text-body-1">使用方法：</p>
                <v-expansion-panels accordion>
                  <v-expansion-panel>
                    <v-expansion-panel-header>

                      <template v-slot:actions>
                        <v-icon dense>
                          fa-angle-down
                        </v-icon>
                      </template>
                      【环节卡片】
                    </v-expansion-panel-header>
                    <v-divider />
                    <v-expansion-panel-content>
                      <div
                        class="text-md-h5 text-body-1 text-decoration-underline text-weight-black"
                      >
                        <br />
                        点击卡片右下角的<span class="success--text"
                          >绿色的“编辑”</span
                        >→展开编辑面板
                      </div>
                      <br /><br />
                      <strong class="text-decoration-underline">环节类别</strong
                      >：
                      目前开放了『陈词』『质询』『对辩』『自由辩论』『空白卡片』五种类型的卡片。
                      <br /><br />
                      &nbsp;&nbsp;<span class="text-decoration-underline"
                        >【陈词】</span
                      >
                      所有单方发言的总称，立论、驳论、质询小结、结辩都属于陈词；<br />
                      &nbsp;&nbsp;<span class="text-decoration-underline"
                        >【质询】</span
                      >
                      就，质询；<br />
                      &nbsp;&nbsp;<span class="text-decoration-underline"
                        >【对辩】</span
                      >
                      所有双方发言的总称，在传统的对辩之外，这里还支持了双方时间不相等的情况，特殊赛制需要双方时间不等的话可以在这里设置；<br />
                      &nbsp;&nbsp;<span class="text-decoration-underline"
                        >【自由辩论】</span
                      >就，自由辩论；<br />
                      &nbsp;&nbsp;<span class="green--text">(新)</span>
                      <span class="text-decoration-underline"
                        >【空白卡片】</span
                      >
                      所有不计时环节的总称，这个可以是“领导讲话”“裁判介绍”“开幕式”“质证”……一切不需要计时或者时间无上限的环节都属于空白卡片。
                      <br /><br />

                      <strong class="text-decoration-underline"
                        >环节标题</strong
                      >
                      ：你可以自己定义你想要的环节标题，“对局综观”或许会比“结辩”高级一些；<br /><br />
                      <strong class="text-decoration-underline"
                        >发起者、辩位</strong
                      >：比如正方二辩发起驳论，这里就选正方二辩；<br /><br /><strong
                        class="text-decoration-underline"
                        >时间</strong
                      >
                      ：以秒为单位，环节时间无上限。
                      <br /><br />
                      环节如何定制？你的比赛，你来决定。
                    </v-expansion-panel-content>
                  </v-expansion-panel>
                  <v-expansion-panel>
                    <v-expansion-panel-header>

                      <template v-slot:actions>
                        <v-icon dense>
                          fa-angle-down
                        </v-icon>
                      </template>
                      【三个按钮】
                    </v-expansion-panel-header>
                    <v-divider />
                    <v-expansion-panel-content>
                      ① 左侧加号：添加一个默认的“陈词”环节卡片
                      <br />② 中间垃圾桶：清空目前赛制 <br />②
                      右侧对勾：提交目前赛制，生成赛制码 <br />
                    </v-expansion-panel-content>
                  </v-expansion-panel>
                </v-expansion-panels>
                <br />
              <v-divider/>
                <br />
                <div>
                  <p class="text-md-h5 text-body-1">基于某现有计时码进行修改：</p>
                  <p class="text-md-h6 text-body-2">
                  如果已经生成了某个计时码后发现它存在缺漏，那么可以在这里下载其计时码内容并进行修改。(只有875以上的计时码支持此功能)</p>
                  <v-row>
                    <v-text-field
                      class="mt-3"
                      v-model="inheritCode"
                      label="基于此计时码修改"
                      clearable
                      placeholder="点击这里输入您想基于的计时码"
                      ref="inheritCode"
                      filled
                    ></v-text-field>
                    <v-btn block depressed @click="inherit()" color="success" class="mt-n5">
                      <v-icon left>
                        fa-download
                      </v-icon>
                      下载此计时码内容
                    </v-btn>
                  </v-row>
                </div>
              </div>
                <br />
              <v-divider/>
                <br />
              <div class="text-md-h5 text-body-1 text-decoration-underline">
                比赛名称
              </div>
              <div data-v-step="3">
                <v-text-field
                  class="mt-5"
                  v-model="gameName"
                  label="比赛名称"
                  clearable
                  placeholder="点击这里输入比赛名称（如：深语网络辩论赛）"
                  ref="gameInput"
                  filled
                  :rules="[rules.required]"
                ></v-text-field>
              </div>
            </v-card-subtitle>

            <div class="mx-auto">
              <!-- 电脑端 -->
              <v-timeline dense class="hidden-sm-and-down" data-v-step="4">
                <draggable :list="list2" group="people" handle=".tryHan">
                  <v-timeline-item
                    v-for="(item, index) in list2"
                    :key="item.id"
                    class="text-right"
                  >
                    <template v-slot:icon>
                      <div class="white--text font-weight-black">
                        {{ index + 1 }}
                      </div>
                    </template>
                    <debate-card
                      data-v-step="5"
                      :expand="ifInTour"
                      @doPaste="doPaste"
                      :id="item.id"
                      :category="item.category"
                      :time="item.time"
                      :timeCC="item.timeCC"
                      :attackSide="item.attackSide"
                      :attackPosition="item.attackPosition"
                      :title="item.title"
                      :displayDrop="true"
                      :isCustomDual="item.isCustomDual"
                      :defendPosition="item.defendPosition"
                      @deleteIt="delIt(item.id)"
                      @copy="copyIt"
                      @change="change1"
                      v-bind:ruleTxt.sync="list3[item.id]"
                    />
                  </v-timeline-item>
                </draggable>
              </v-timeline>

              <!-- 手机端 -->
              <v-row>
                <v-spacer></v-spacer>
                <v-col cols="11">
                  <draggable
                    class="hidden-md-and-up"
                    :list="list2"
                    group="people"
                    handle=".tryHan"
                  >
                    <div v-for="item in list2" :key="item.id">
                      <debate-card
                        class="mt-3"
                        @doPaste="doPaste"
                        :id="item.id"
                        :category="item.category"
                        :time="item.time"
                        :timeCC="item.timeCC"
                        :attackSide="item.attackSide"
                        :attackPosition="item.attackPosition"
                        :title="item.title"
                        :displayDrop="true"
                        :isCustomDual="item.isCustomDual"
                        :defendPosition="item.defendPosition"
                        @deleteIt="delIt(item.id)"
                        @copy="copyIt"
                        @change="change1"
                        v-bind:ruleTxt.sync="list3[item.id]"
                      />
                    </div>
                  </draggable>
                </v-col>
                <v-spacer></v-spacer>
              </v-row>
            </div>

            <v-row data-v-step="6">
              <v-col cols="4">
                <v-btn
                  data-v-step="10"
                  color="primary"
                  class="mx-auto"
                  elevation="2"
                  fab
                  large
                  @click="add"
                >
                  <v-icon>fa-plus</v-icon>
                </v-btn>
              </v-col>
              <v-col cols="4">
                <v-btn
                  data-v-step="11"
                  color="error"
                  class="mx-auto"
                  elevation="2"
                  fab
                  large
                  @click="delAll"
                >
                  <v-icon>fa-trash</v-icon>
                </v-btn>
              </v-col>
              <v-col cols="4" data-v-step="121">
                <v-btn
                  color="success"
                  class="mx-auto"
                  elevation="2"
                  fab
                  large
                  :loading="isLoading"
                  @click="finish"
                >
                  <v-icon>fa-check</v-icon>
                </v-btn>
              </v-col>
            </v-row>
          </v-card>
        </div>
      </v-col>
    </v-row>
    <v-row justify="center">
      <v-dialog v-model="dialog" persistent max-width="300">
        <v-card>
          <v-card-title class="text-center headline">
            计时码已生成！
          </v-card-title>
          <v-card-text class="text-center">
            您的计时码是
            <div class="text-h2 text-weight-black black--text">{{ code }}</div>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="primary" @click="dialog = false">
              继续创建
            </v-btn>
            <v-btn color="success" @click="goEnter">
              立即打开
            </v-btn>
            <v-spacer></v-spacer>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-row>
    <v-tour
      name="aaa"
      :steps="steps"
      :options="myOptions"
      :callbacks="myCallbacks"
    ></v-tour>
    <v-tour name="inp" :steps="stepInput" :options="myOptions"></v-tour>
  </div>
</template>

<script setup="props, {emit}">
import draggable from 'vuedraggable';
import axios from 'axios';
// import * as R from 'ramda';
import AV from 'leancloud-storage';
import {
  findIndex, propEq, insert, indexOf, reject, clone, find, isEmpty, equals,
} from 'ramda';
import DebateCard from '../components/debateCard.vue';
import { genDb } from '../libs/db-const';
import sto from '../libs/local';
import { updateLogs, updateTime } from '../libs/version';

const R = {
  findIndex, propEq, insert, indexOf, reject, clone, find, isEmpty, equals,
};

let DB = {};

// eslint-disable-next-line no-underscore-dangle
axios.defaults.headers['Content-Type'] = 'application/x-www-form-urlencoded';
function S4() {
  // eslint-disable-next-line no-bitwise
  return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
}
function guid() {
  return `${S4() + S4()}-${S4()}-${S4()}-${S4()}-${S4()}${S4()}${S4()}`;
}
export default {
  name: 'Gen',
  metaInfo: {
    // 改变当前路由的title
    // title: '生成计时码|Online·辩之竹',
    // 改变当前路由的link
    meta: [
      { name: 'description', content: '辩之竹辩论计时器,生成计时码' },
      { name: 'keywords', content: '辩之竹,Online辩论,辩论,辩论计时器,生成计时码,计时码' },
    ],
  },
  data() {
    DB = genDb(this.$i18n);
    return {
      rules: {
        required: (value) => !!value || '请点击↑输入比赛名称',
      },
      inheritCode: '',
      ifInTour: false,
      dialog: false,
      gameName: '',
      category: DB.TIMER.CATEGORY.QUESTION,
      updateLog: true,
      lastUpdateTime: updateTime,
      updateTxt: updateLogs,
      list1: [
        {
          id: guid(),
          title: '双方介绍',
          category: DB.TIMER.CATEGORY.EMPTY,
        },
        {
          id: guid(),
          title: '提示音介绍',
          category: DB.TIMER.CATEGORY.EMPTY,
        },
        {
          id: guid(),
          title: '立论',
          category: DB.TIMER.CATEGORY.STATEMENT,
          attackSide: 0,
          attackPosition: 0,
          time: 180,
        },
        {
          id: guid(),
          title: '质询',
          category: DB.TIMER.CATEGORY.QUESTION,
          attackSide: 1,
          attackPosition: 3,
          defendPosition: 0,
          time: 120,
        },
        {
          id: guid(),
          title: '驳论',
          category: DB.TIMER.CATEGORY.STATEMENT,
          attackSide: 0,
          attackPosition: 1,
          time: 120,
        },
        {
          id: guid(),
          title: '盘问',
          category: DB.TIMER.CATEGORY.QUESTION,
          attackSide: 0,
          attackPosition: 2,
          defendPosition: DB.POS.CATEGORY.ALL,
          time: 120,
        },
        {
          id: guid(),
          title: '质询小结',
          category: DB.TIMER.CATEGORY.STATEMENT,
          attackSide: 0,
          attackPosition: 2,
          time: 120,
        },
        {
          id: guid(),
          title: '对辩',
          category: DB.TIMER.CATEGORY.BIQUESTION,
          attackSide: 0,
          attackPosition: 3,
          defendPosition: 3,
          time: 120,
          timeCC: 120,
        },
        {
          id: guid(),
          title: '自由辩论',
          category: DB.TIMER.CATEGORY.FREE,
          attackSide: 0,
          attackPosition: 0,
          time: 240,
        },
        {
          id: guid(),
          title: '质证',
          category: DB.TIMER.CATEGORY.EMPTY,
        },
        {
          id: guid(),
          title: '总结陈词',
          category: DB.TIMER.CATEGORY.STATEMENT,
          attackSide: 0,
          attackPosition: 3,
          time: 240,
        },
        {
          id: guid(),
          title: '评委点评',
          category: DB.TIMER.CATEGORY.EMPTY,
        },
        {
          id: guid(),
          title: '颁奖',
          category: DB.TIMER.CATEGORY.EMPTY,
        },
      ],
      list2: [
        {
          id: guid(),
          title: '双方介绍',
          attackSide: 0,
          category: DB.TIMER.CATEGORY.EMPTY,
        },
        {
          id: guid(),
          title: '质询',
          category: DB.TIMER.CATEGORY.QUESTION,
          attackSide: 0,
          attackPosition: 3,
          time: 120,
        },
        {
          id: guid(),
          title: '评委点评',
          category: DB.TIMER.CATEGORY.EMPTY,
        },
        {
          id: guid(),
          title: '颁奖',
          category: DB.TIMER.CATEGORY.EMPTY,
        },
      ],
      list3: {},
      ruleText: '',
      code: 0,
      isLoading: false,
      stepInput: [
        {
          target: '[data-v-step="3"]',
          header: {
            title: '输入比赛名称',
          },
          content:
            '在这里输入比赛名称，注意是比赛名称而不是辩题。\n例：【深语网络辩论赛】【第一届华语辩论冠军赛】',
          params: {
            highlight: true,
            placement: 'top',
          },
        },
      ],
      steps: [
        {
          target: '[data-v-step="21"]',
          header: {
            title: '欢迎',
          },
          content:
            '点击“下一步”可以看教程，如果你已经熟悉了怎么使用，可以点击“跳过”。',
          params: {
            highlight: true,
            placement: 'left',
          },
        },
        {
          target: '[data-v-step="2"]',
          header: {
            title: '赛制内容区',
          },
          content:
            '这里是生成赛制的区域，上半部分是介绍；下半部分是赛制操作区。',
          params: {
            highlight: true,
            placement: 'left',
          },
        },
        {
          target: '[data-v-step="3"]',
          header: {
            title: '输入比赛名称',
          },
          content:
            '在这里输入比赛名称，注意是比赛名称而不是辩题名。<br/>例：【深语网络辩论赛】【第一届华语辩论冠军赛】',
          params: {
            highlight: true,
            placement: 'left',
          },
        },
        {
          target: '[data-v-step="4"]',
          header: {
            title: '环节卡片区',
          },
          content:
            '这里的每一张卡片都是一个比赛阶段，这里显示什么，计时器里就会显示什么。',
          params: {
            highlight: true,
            placement: 'left',
          },
        },
        {
          target: '.edit',
          header: {
            title: '环节卡片',
          },
          content: `<div class="text-left">
              <div class="text-h6 text-weight-black">
                点击卡片右下角的<span class="success">绿色的“编辑”</span>→展开编辑面板
                <img width="100%" src="https://cdn.puluter.cn/演示1.gif"/>
              </div><br/>
            </div>`,
          params: {
            placement: 'top',
          },
        },
        {
          target: '.tryHan',
          header: {
            title: '按住+上下拖拽→调整顺序',
          },
          content:
            '<div class="text-h6 text-weight-black">按住<span class="warning">橙色的图标</span>+上下拖拽→切换环节顺序<img width="100%" src="https://cdn.puluter.cn/演示2.gif"/></div>',
          params: {
            placement: 'top',
          },
        },
        {
          target: '[data-v-step="6"]',
          header: {
            title: '按钮们',
          },
          content:
            '<div class="text-left">从左到右分别是：<br/>【添加一个默认的“陈词”环节卡片】<br/>【清空目前所有环节卡片】<br/>【提交并生成赛制码】</div>',
          params: {
            highlight: true,
            placement: 'left',
          },
        },
        {
          target: '[data-v-step="98"]',
          header: {
            title: '常用&示例卡片',
          },
          content:
            '<div class="text-left">我们还提供了一些示例卡片来帮助你快速组建起你的赛制<br/>你可以通过<span class="primary">【点击卡片右下角的蓝色的复制按钮】</span>来将其加入你的赛程。<br/>当然，你可以在把它们加入到右边之后，再对它们进行调整细节，比如修改它的环节名，从“立论”变成“开篇陈词”。</div>',
          params: {
            highlight: true,
            placement: 'right',
          },
        },
        {
          target: '.leftCard',
          header: {
            title: '希望你用得开心！',
          },
          content: `作者：重庆大学 Online辩论技术部<br/>于卓浩<br/>
              <img
                width='70'
                src="https://cdn.puluter.cn/avatar.jpg"
                alt="于卓浩"/><br/>
            <a href='https://puluter.cn' class='white--text'>我的博客</a>
            <a href='mailto:pkmq24@qq.com' class='white--text'>我的邮箱</a>`,
          params: {
            highlight: true,
            placement: 'right',
          },
        },
        {
          target: '[data-v-step="121"]',
          header: {
            title: '别忘了提交',
          },
          content:
            '当你设计好你的赛制之后，点击这里就可以生成计时码啦！计时码永久保存，你可以放心使用。',
          params: {
            highlight: true,
            placement: 'top',
          },
        },
        {
          target: '[data-v-step="7"]',
          header: {
            title: '没看懂？',
          },
          content: '你可以随时点击这里再看一遍！',
          params: {
            highlight: true,
            placement: 'right',
          },
        },
      ],
      myOptions: {
        useKeyboardNavigation: false,
        startTimeout: 1000,
        labels: {
          buttonSkip: '跳过',
          buttonPrevious: '上一步',
          buttonNext: '下一步',
          buttonStop: '关闭',
        },
      },
      myCallbacks: {
        onPreviousStep: this.myPrev,
        onNextStep: this.myNext,
      },
    };
  },
  methods: {
    goEnter() {
      this.$router.push({ path: '/', query: { rid: `${this.code}` } });
    },
    myPrev(currStep) {
      this.ifInTour = R.equals(currStep, 3);
    },
    myNext(currStep) {
      this.ifInTour = R.equals(currStep, 3);
    },
    startTour() {
      this.$tours.aaa.start();
    },
    add() {
      this.list2.push({
        id: guid(),
        title: '立论',
        category: DB.TIMER.CATEGORY.STATEMENT,
        attackSide: 0,
        attackPosition: 1,
        time: 180,
      });
      sto.set(this.list2);
    },
    doPaste(gid) {
      const item2 = R.clone(R.find(R.propEq('id', gid))(this.list1));
      console.log(item2);
      item2.id = guid();
      this.list2.push(item2);
      sto.set(this.list2);
    },
    delIt(gid) {
      delete this.list3[gid];
      this.list2 = R.reject(R.propEq('id', gid))(this.list2);
      sto.set(this.list2);
    },
    delAll() {
      this.list2 = [];
      this.list3 = {};
      sto.set(this.list2);
    },
    copyIt(inputData) {
      const item2 = { ...inputData };
      item2.id = guid();
      this.list2 = R.insert(R.indexOf(inputData, this.list2))(item2)(
        this.list2,
      );
      sto.set(this.list2);
    },
    change1(inputData, ruleText) {
      const item2 = { ...inputData };
      this.list2[R.findIndex(R.propEq('id', inputData.id))(this.list2)] = item2;
      this.ruleText = ruleText;
      sto.set(this.list2);
    },
    jumpToIt() {},
    async inherit() {
      if (R.isEmpty(this.inheritCode)) {
        alert('您还没输入需要继承的计时码');
      } else {
        const newTimer = new AV.Query('TimerRule');
        newTimer.equalTo('timerId', parseInt(this.inheritCode, 10));
        const res = await newTimer.first();
        console.log(res);
        if (res === undefined) {
          alert('该计时码不存在');
          return;
        }
        if (res.attributes.localStorage === '') {
          alert('只有875以上的计时码才可以使用此功能');
          return;
        }

        // const url = `${process.env.VUE_APP_SER}/rule/detail/${this.inheritCode}`;
        // const res = await axios.get(url);
        // console.log(res, '不行', R.equals(res, '不行'));
        // if (res.data === '不行') {
        //   alert('只有875以上的计时码才可以使用此功能');
        //   return;
        // }
        const { attributes: { localStorage: data1 } } = res;
        const data = JSON.parse(data1);
        sto.set(data);
        this.list2 = data;
        console.log(data);
        console.log(this.list2);
      }
    },
    async finish() {
      if (R.isEmpty(this.gameName)) {
        this.$vuetify.goTo(this.$refs.gameInput, {
          time: 300,
          offset: 400,
          easing: 'easeInOutCubic',
        });
        const that = this;
        setTimeout(() => {
          that.$tours.inp.start();
        }, 305);
      } else {
        this.isLoading = true;
        const ansTxt = [];
        for (let i = 0; i < this.list2.length; i += 1) {
          ansTxt.push(this.list3[this.list2[i].id]);
        }

        // const url = `${process.env.VUE_APP_SER}/rule`;
        const ruleLocalStorage = JSON.stringify(sto.get());
        // const data = this.$qs.stringify({
        //   rule: `${this.gameName}||${ansTxt.join(';')}`,
        //   ruleLocalStorage,
        // });

        // 向leancloud同步
        const TimerRule = AV.Object.extend('TimerRule');
        const newTimer = new TimerRule();
        newTimer.set({
          rule: `${this.gameName}||${ansTxt.join(';')}`,
          ruleName: this.gameName,
          localStorage: ruleLocalStorage,
          name: '',
        });
        await newTimer.save();
        await newTimer.fetch();
        // 向leancloud同步

        this.code = newTimer.attributes.timerId;
        this.dialog = true;
        const tmpa = sto.g('his');
        tmpa.push(newTimer.attributes.timerId);
        sto.s('his', tmpa);
        this.isLoading = false;
      }
    },
  },
  computed: {
    nameIsNull() {
      return this.gameName === '';
    },
  },
  components: {
    DebateCard,
    draggable,
  },
  mounted() {
    if (sto.get().length !== 0) {
      this.list2 = sto.get();
    }
    if (
      this.$vuetify.breakpoint.name !== 'xs'
      && this.$vuetify.breakpoint.name !== 'sm'
    ) {
      this.$tours.aaa.start();
    } else {
      // alert(
      //   '辩之竹计时码生成器和辩之竹计时器在手机上也可以使用，不过体验会受到影响~\n推荐使用电脑来生成你的计时码！',
      // );
    }
  },
  watch: {
    list2() {
      sto.set(this.list2);
    },
  },
};
</script>
<style lang="scss" scoped>
.v-tour__target--highlighted {
  padding: 10px;
  box-shadow: 0 0 0 99999px rgba(0, 0, 0, 0.4);
}
</style>
