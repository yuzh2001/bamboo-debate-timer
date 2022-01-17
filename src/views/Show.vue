<template>
  <div class="con" ref = "conn">

    <div class="body1 support-webp"
         oncontextmenu="return false;"
         onselectstart="return false"
         onbeforeunload="checkLeave()">
      <div class="audio">
        <link id="cssLink"/>
        <audio

          style="display: none; height: 0"
          id="mic-1"
          preload="auto"
          loop="loop"
        ></audio>
        <audio

          style="display: none; height: 0"
          id="mic-2"
          preload="auto"
          loop="loop"
        ></audio>
        <audio

          style="display: none; height: 0"
          id="mic-3"
          preload="auto"
          loop="loop"
        ></audio>

      </div>
      <div class="" id="custom">
        选择图片:<input type="file" id="images" accept="image/*"/>
        <input type="button" value="确认图片" id="changeBack"/>
      </div>
      <div class="copyright">{{$t('timer.ad.1l')}}
        <br/>
        {{$t('timer.ad.2l')}}
        <br/>
        {{$t('timer.ad.3l')}}
      </div>
      <div class="mainWrapper" id="main" tabindex="0" style="background-color:rgb(53,73,82);">
        <p
          style="font-family: 'Digiface';color: red; position: fixed; bottom: 0;font-size: 30px;"
          id='load-font'>
          如果网页这里没有出现弹窗，一片空白，你可以看到这行文字，请先耐心等待几秒钟看看会不会只是网络太卡。<br/>
          如果等待一段时间仍然没有任何变化，你还是可以看到这行文字，这说明你在使用的浏览器太过于古老，计时器很不幸并不支持它。<br/>
          你可以做的尝试：<br/>
          ①如果使用的是国产的浏览器（如搜狗浏览器，QQ浏览器），在网址栏的末尾看看有没有一个IE浏览器的图标，点它一下。（或者百度搜索“XX浏览器 如何开启极速模式”）<br/>
          ②如果使用的是IE（Internet Explorer），请换成一个现代一些的浏览器，如Chrome，或者QQ浏览器之类的。<br/>
          <br/>
          如果你的情况并不满足上述两条，可以加QQ群992868670来反馈。<br/>
          同时，紧急情况下可以直接加微信：yuzhuohao来反馈。
        </p>
        <p
          style="color: blue; position: fixed; top: 0;font-size: 30px;display:none;"
          id='load-font-2'
        class="text-left px-10 py-10">
          如果网页这里没有出现弹窗，一片空白，你可以看到这行文字，这有两个原因。<br/>
          一是你的网络不太稳定，建议你<span class="red--text">多刷新几次或者更换网络</span>再试；<br/>
          二是如果多次刷新仍然没有任何变化，你还是可以看到这行
          文字，这说明你在使用的浏览器太过于古老，计时器很不幸 <span class="red--text">并不支持它</span>。<br/>
          你可以做的尝试：<br/>
          ①如果使用的是国产的浏览器（如搜狗浏览器，QQ浏览器），在网址栏的末尾看看有没有一个IE浏览器的图标，点它一下。（或者百度搜索“XX浏览器 如何开启极速模式”）<br/>
          ②如果使用的是IE（Internet Explorer），请换成一个现代一些的浏览器，如Chrome，或者QQ浏览器之类的。<br/>
          <span class="red--text">③【强烈推荐】申请离线版（加下面的那个QQ群）</span><br/>
          <br/>
          如果你的情况并不满足上述两条，可以加QQ群992868670来反馈。<br/>
          同时，紧急情况下可以直接加微信：yuzhuohao来反馈。
        </p>
        <div class="up">
          <p class="teamName teamNameC" id="teamName-C"></p>
          <p class="teamName teamNameCC" id="teamName-CC"></p>
          <p class="down downC" id="down-C"></p>
          <p class="down downCC" id="down-CC"></p>
        </div>
        <div class="txt">
          <p class="titleOfTimer" id="title"></p>
          <p class="status" id="status"></p>
          <p class="emptyRound" id="emptyRound"></p>
          <p class="bigTime" id="mainTimer">00 : 00</p>
          <div class="timeSet" id="freeTimerId" style="position: fixed">
          <span>
            <p class="CTime" id="CTime">01 : 37</p>
            <p class="sideTxt sideC" id="CTime1">{{$t('timer.ui.timer.aff')}}</p>
          </span>
            <span>
            <p class="CCTime" id="CCTime">01 : 37</p>
            <p class="sideTxt sideCC" id="CCTime1">{{$t('timer.ui.timer.neg')}}</p>
          </span>
          </div>
        </div>

      </div>
      <div class="controllerGroup">
        <div
          class="btn-toolbar"
          role="toolbar"
          aria-label="Toolbar with button groups"
        >
          <div class="btn-group mr-2" role="group" aria-label="First group">
            <button
              type="button"
              id="prevButton"
              class="btn btn-light  btn-lg"
            >
              ←
            </button>
          </div>

          <div class="btn-group mr-2" role="group" aria-label="Second group">
            <button
              type="button"
              id="btn-method-start"
              class="btn btn-success btn-lg"
            >
              开始
            </button>
          </div>
          <div class="btn-group mr-2 double-0" da="1" role="group" aria-label="Second group">
            <button
              type="button"
              id="btnc"
              class="btn btn-success btn-lg"
            >
              {{$t('timer.ui.aff')}}
            </button>
          </div>
          <div class="btn-group mr-2 double-1" da="1" role="group" aria-label="Second group">
            <button
              type="button"
              id="btncc"
              class="btn btn-success btn-lg"
            >
              {{$t('timer.ui.neg')}}
            </button>
          </div>
          <div class="btn-group mr-2" role="group" aria-label="Second group">
            <button
              type="button"
              id="stopBoth"
              class="btn btn-danger btn-lg"
            >
              {{$t('timer.ui.stopBoth')}}
            </button>
          </div>
          <div class="btn-group mr-2" role="group" aria-label="Second group">
            <button
              type="button"
              id="resetTime"
              class="btn btn-danger btn-lg"
            >
              {{$t('timer.ui.reset')}}
            </button>
          </div>
          <div class="btn-group mr-2" role="group"
               aria-label="Second group" v-if="isElectron">
            <button
              type="button"
              @click="$router.push({path:'/'});"
              class="btn btn-success btn-lg"
            >
              {{$t('timer.ui.return')}}
            </button>
          </div>
          <div class="btn-group mr-2" role="group"
               aria-label="Second group">
            <button
              type="button"
              @click="toggleFull"
              ref="lastBtn"
              style="--animate-duration:1.5s;"
              class="btn btn-success btn-lg"
            >{{isFullscreen?$t('timer.ui.closeFull'):$t('timer.ui.openFull')}}
            </button>
          </div>
          <div class="btn-group" role="group" aria-label="Third group">
            <button
              type="button"
              id="stepButton"
              class="btn btn-light  btn-lg"
            >
              →
            </button>
          </div>
        </div>
      </div>
      <v-dialog
        v-model="dialog"
        width="500"
      >
        <v-card>
          <v-card-title class="text-h5 primary white--text">
            使用说明
          </v-card-title>

          <v-card-text class="text-left">
            <p>
              <br>
              <v-chip
                class="mb-2"
                color="pink"
                label
                text-color="white"
              >
                <v-icon left>
                  mdi-label
                </v-icon>
                键盘操作
              </v-chip>
              <br>
              <v-chip small>←</v-chip><v-chip small>→</v-chip>&nbsp;切换环节 <br>
              <v-chip small>{{spaceKeyMap}}</v-chip>&nbsp;开始/暂停计时 <br>
              <v-chip small>回车</v-chip>&nbsp;强制停止双方计时 <br>
              <v-chip small>R</v-chip>&nbsp;重置时间<br>
              <v-chip small>小于号&lt;</v-chip> 正方开始，<v-chip small>大于号&gt;</v-chip>
              反方开始(也可以直接按{{spaceKeyMap}}来一键切换正反方)。<br>
              <br>

              <v-chip
                class="my-2"
                color="pink"
                label
                text-color="white"
              >
                <v-icon left>
                  mdi-label
                </v-icon>
                展示提示音
              </v-chip>
              <br>按下<v-chip small>数字键1</v-chip>展示30秒倒计时提示音，按下<v-chip small>数字键2</v-chip>
              展示时间到提示音。<br>
            </p>
          </v-card-text>

          <v-divider></v-divider>

          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn
              color="primary"
              text
              @click="closeDialog"
            >
              我了解了
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </div>
  </div>
</template>

<!--<script src="./lib/jquery.min.js"></script>-->
<!--<script src="./lib/howler.min.js"></script>-->
<script>
/* eslint no-use-before-define: ["off", { "functions": false }] */
/* eslint-disable radix */
import $ from 'jquery';
import { Howl } from 'howler';
import VueI18n from 'vue-i18n';
import Logger from 'js-logger';
import Vue from 'vue';
import { useFullscreen } from '@vueuse/core';
import * as lc from 'leancloud-storage';

import 'animate.css';

// eslint-disable-next-line import/extensions
import offlineConfig from '@/libs/offlineConfig.js';
import zh from '@/assets/lang/zh.json';
import en from '@/assets/lang/en.json';

const { toggle } = useFullscreen();

Logger.useDefaults();
window.addEventListener('DOMContentLoaded', () => {
  const isSupportWebP = document.createElement('canvas')
    .toDataURL('image/webp')
    .indexOf('data:image/webp') === 0;
  document.documentElement.classList.add(isSupportWebP ? '.hello' : '.no-support-webp');
});

let link = document.createElement('link');
link.rel = 'preload';
link.crossOrigin = true;
link.as = 'font';
link.href = 'https://cdn.puluter.cn/bamboo-cqu2019_font1.otf';
document.head.appendChild(link);

link = document.createElement('link');
link.rel = 'preload';
link.crossOrigin = true;
link.as = 'font';
link.href = 'https://cdn.puluter.cn/font2.ttf';
document.head.appendChild(link);

Vue.use(VueI18n);
const i18n = new VueI18n({
  locale: 'en',
  messages: {
    zh,
    en,
  },
});

const electronRules = [offlineConfig.rules];

const TEAM = {
  正: 0,
  反: 1,
};

const KEYMAP = {
  RIGHT: 39,
  LEFT: 37,
  ENTER: 13,
  SPACE: 32,
  R: 82,
  '<': 188,
  '>': 190,
  B: 66,
};
let DOM = {};
const TYPE = {
  陈词: '0',
  质询: '1',
  对辩: '2',
  高级自定: '3',
  大计时器: 100,
  双计时器: 101,
  空: '4',
  CUSTOM: '5',
};

const utils = {
  isZheng: (id) => parseInt(id, 10) === TEAM.正,
  /**
   * 生成规则的辅助函数，type,主动方,正方辩位,反方辩位,正方时间,反方时间,标题
   * @param {Number} type 环节类别
   * @param {Number} attack 环节发起方，0为正1为反
   * @param {String} u1 正方辩位名称
   * @param {String} u2 反方辩位名称
   * @param {Number} time1 正方时间
   * @param {Number} time2 反方时间
   * @param {String} title 标题
   */
  genRule: (type, attack, u1, u2, time1, time2, title) => [type, attack, u1, u2, time1, time2, title].join(','),
};
const TIME_PARTICLE = 10;
const TIME_INTER = TIME_PARTICLE / 1000;
const rules = [];
let statusNowLocal = 0;
let bigTimerTime = 0;
let freeTimerTime = [0, 0];
let CTimerId = {
  cancel: () => {
  },
};
let CCTimerId = {
  cancel: () => {
  },
};
let BigTimerId = {
  cancel: () => {
  },
};
let timerStatus = [0, 0];
// 第二个代表了双计时器 -1是刚切换过来且未开始，1是正方0是反方
let timerUsing = TYPE.大计时器;
let rulesOriginal = [];

const url = (i) => `../assets/${i}.wav`;
// eslint-disable-next-line no-undef
const sounds = [new Howl({ src: [url(1)], loop: true, autoplay: false }),
// eslint-disable-next-line no-undef
  new Howl({ src: [url(2)], loop: true, autoplay: false }),
  // eslint-disable-next-line no-undef
  new Howl({ src: [url(3)], loop: true, autoplay: false })];

sounds.forEach((item) => {
  item.once('load', () => {
    item.stop();
  });
});
// time = ref[1];
// eslint-disable-next-line func-names
const accurateInterval = function (fn, time) {
  let nextAt;
  let timeout;
  let ref;
  const
    ongoing = true;
  nextAt = new Date().getTime() + time;
  timeout = null;
  if (typeof time === 'function') {
    ref = [time, fn];
    // eslint-disable-next-line no-param-reassign
    [fn, time] = ref;
  }
  // eslint-disable-next-line func-names
  const wrapper = function () {
    nextAt += time;
    timeout = setTimeout(wrapper, nextAt - new Date().getTime());
    return fn();
  };
  // eslint-disable-next-line func-names
  const cancel = function () {
    this.ongoing = false;
    return clearTimeout(timeout);
  };
  timeout = setTimeout(wrapper, nextAt - new Date().getTime());
  return {
    cancel,
    ongoing,
  };
};

function changeTitle(str) {
  $('#status').html(str);
}

function checkTimer() {
  let min;
  let sec;
  let str;
  if (timerUsing === TYPE.大计时器) {
    if (timerStatus[0] === 0) DOM.methodBtn.html(i18n.t('timer.ui.start')).attr('class', 'btn btn-success btn-lg');
    else DOM.methodBtn.html(i18n.t('timer.ui.pause')).attr('class', 'btn btn-danger btn-lg');
  } else {
    DOM.methodBtn.html(i18n.t('timer.ui.switch')).attr('class', 'btn btn-light btn-lg');
  }

  if (timerUsing === TYPE.大计时器) {
    min = Math.floor(bigTimerTime / 60);
    sec = Math.floor(bigTimerTime - min * 60);
    if (min < 10) min = `0${min}`;
    if (sec < 10) sec = `0${sec}`;
    str = `${min} : ${sec}`;
    $('#mainTimer').html(str);

    if (bigTimerTime <= 30) $('#mainTimer').attr('class', 'bigTime danger-time-big');
    else $('#mainTimer').attr('class', 'bigTime');
  } else {
    // $('#mainTimer').hide();
    min = Math.floor(freeTimerTime[0] / 60);
    sec = Math.floor(freeTimerTime[0] - min * 60);
    if (min < 10) min = `0${min}`;
    if (sec < 10) sec = `0${sec}`;
    str = `${min} : ${sec}`;
    $('#CTime').html(str);
    if (freeTimerTime[0] <= 30) $('#CTime').attr('class', 'CTime danger-time-small');
    else $('#CTime').attr('class', 'CTime');

    min = Math.floor(freeTimerTime[1] / 60);
    sec = Math.floor(freeTimerTime[1] - min * 60);
    if (min < 10) min = `0${min}`;
    if (sec < 10) sec = `0${sec}`;
    str = `${min} : ${sec}`;
    $('#CCTime').html(str);
    if (freeTimerTime[1] <= 30) $('#CCTime').attr('class', 'CCTime danger-time-small');
    else $('#CCTime').attr('class', 'CCTime');
  }
}

/* BigTimer start */
function stopBigTimer() {
  timerStatus[0] = 0;
  BigTimerId.cancel();
}

let bigCanPlay = true;

function bigTimerDecline() {
  if (Math.abs(bigTimerTime - 30) <= 0.1 && bigCanPlay) {
    playSound(2);
    bigCanPlay = false;
    setTimeout(() => {
      stopPlaySound(2);
      bigCanPlay = true;
    }, 700);
  }
  if (bigTimerTime <= 0.1) {
    bigTimerTime = 0;
    Logger.debug('STOPPED!');
    playSound(3);
    setTimeout(() => {
      stopPlaySound(3);
    }, 5000);
    stopBigTimer();
    return;
  }
  bigTimerTime -= TIME_INTER;
}

function startBigTimer() {
  if (bigTimerTime === 0) return;
  if (BigTimerId.ongoing === true) return;
  timerStatus[0] = 1;
  BigTimerId = accurateInterval(bigTimerDecline, TIME_PARTICLE);
}

/* BigTimer end */

const canPlayFree = [true, true];

/* CTimer Start */
function stopCTimer() {
  timerStatus[1] = 1;
  CTimerId.cancel();
}

function CTimerDecline() {
  if (Math.abs(freeTimerTime[1] - 30) <= 0.1 && canPlayFree[0]) {
    playSound(2);
    canPlayFree[0] = false;
    setTimeout(() => {
      stopPlaySound(2);
      canPlayFree[0] = true;
    }, 700);
  }
  if (freeTimerTime[1] <= 0.1) {
    freeTimerTime[1] = 0;
    stopCTimer();
    playSound(3);
    if (freeTimerTime[0] >= 0.5) {
      setTimeout(() => {
        stopPlaySound(3);
      }, 3000);
    } else {
      setTimeout(() => {
        stopPlaySound(3);
      }, 5000);
    }
    // eslint-disable-next-line no-use-before-define
    const roundNow = statusNowLocal;
    setTimeout(() => {
      if (roundNow === statusNowLocal) startCCTimer();
    }, 2000);
    return;
  }
  freeTimerTime[1] -= TIME_INTER;
}

function startCTimer() {
  if (freeTimerTime[1] === 0) {
    if (freeTimerTime[0] !== 0) startCCTimer();
  }
  if (freeTimerTime[1] <= 0.1) {
    freeTimerTime[1] = 0;
    return;
  }
  if (CTimerId.ongoing === true) return;
  timerStatus[1] = 0;
  CTimerId = accurateInterval(CTimerDecline, TIME_PARTICLE);
}

function stopCCTimer() {
  timerStatus[1] = 0;
  CCTimerId.cancel();
}

function CCTimerDecline() {
  if (Math.abs(freeTimerTime[0] - 30) <= 0.1 && canPlayFree[1]) {
    playSound(2);
    canPlayFree[1] = false;
    setTimeout(() => {
      stopPlaySound(2);
      canPlayFree[1] = true;
    }, 700);
  }
  if (freeTimerTime[0] <= 0.1) {
    freeTimerTime[0] = 0;
    stopCCTimer();
    playSound(3);
    if (freeTimerTime[1] >= 0.5) {
      setTimeout(() => {
        stopPlaySound(3);
      }, 3000);
    } else {
      setTimeout(() => {
        stopPlaySound(3);
      }, 5000);
    }
    const roundNow = statusNowLocal;
    setTimeout(() => {
      if (roundNow === statusNowLocal) startCTimer();
    }, 2000);
    return;
  }
  freeTimerTime[0] -= TIME_INTER;
}

function startCCTimer() {
  if (freeTimerTime[0] === 0 && freeTimerTime[1] !== 0) startCTimer();
  if (freeTimerTime[0] <= 0.1) {
    freeTimerTime[0] = 0;
    return;
  }
  if (CCTimerId.ongoing === true) return;
  timerStatus[1] = 1;
  CCTimerId = accurateInterval(CCTimerDecline, TIME_PARTICLE);
}

/* CTimer end */

function useBigTimer(time) {
  bigTimerTime = time;
  DOM.bigTimer.show();
  DOM.freeTimer.hide();
  DOM.double0.hide();
  DOM.double1.hide();
  timerUsing = TYPE.大计时器;
}

function useFreeTimer(time1, time2) {
  DOM.bigTimer.hide();
  DOM.freeTimer.show();
  DOM.double0.show();
  DOM.double1.show();
  timerUsing = TYPE.双计时器;
  timerStatus[1] = -1;
  freeTimerTime = [time1, time2];
}

function setStartTimer(side) {
  if (utils.isZheng(side)) timerStatus = [0, -1];
  else timerStatus = [0, 1];
}

function useNoTimer(str) {
  DOM.bigTimer.hide();
  DOM.freeTimer.hide();
  DOM.status.hide();
  DOM.double0.hide();
  DOM.double1.hide();
  DOM.emptyTitle.show();
  DOM.emptyTitle.html(str);
}

function resetTime() {
  rules[statusNowLocal] = rulesOriginal[statusNowLocal];
  changeStatusTo(statusNowLocal);
}

function saveTime(id) {
  // 把当前环节的时间存储到rulesAfter里
  // 因为changeStatusTo是直接把rules里的取出来，所以很适合直接对rules做改变这样就好做了
  // saveTime的话，就应该判断一下目前是用哪个计时器，然后存对应时间
  if (timerUsing === TYPE.大计时器) {
    rules[id][4] = bigTimerTime;
    rules[id][5] = bigTimerTime;
  } else if (timerUsing === TYPE.双计时器) {
    const [time1, time2] = freeTimerTime;
    rules[id][4] = time1;
    rules[id][5] = time2;
  }
  Logger.debug(`1${timerStatus}`);
  rules[id][7] = timerStatus;
}

function changeStatusTo(id) {
  stopBigTimer();
  stopCTimer();
  stopCCTimer();
  DOM.status.show();
  DOM.emptyTitle.hide();
  statusNowLocal = id;
  // type,主动方,正方辩位,反方辩位,正方时间,反方时间,标题
  const [type, attack, u1, u2, time11, time21, title] = rules[id];

  const time1 = parseInt(time11, 10);
  const time2 = parseInt(time21, 10);
  const attackSide = utils.isZheng(attack);
  let str = '';

  if (type === TYPE.陈词) {
    if (attackSide) str = `${i18n.t('timer.affirm')}${u1} · ${title}`;
    else str = `${i18n.t('timer.neg')}${u2} · ${title}`;
    if (u1 === '无' && u2 === '无') {
      if (attackSide) str = `${i18n.t('timer.affirm')} · ${title}`;
      else str = `${i18n.t('timer.neg')} · ${title}`;
    }
    useBigTimer(time1 || time2);
  } else if (type === TYPE.质询) {
    if (attackSide) str = `${i18n.t('timer.affirm')}${u1} · ${title} · ${i18n.t('timer.neg')}${u2}`;
    else str = `${i18n.t('timer.neg')}${u2} · ${title} · ${i18n.t('timer.affirm')}${u1}`;
    if (u1 === '无' && u2 === '无') {
      if (attackSide) str = `${i18n.t('timer.affirm')} · ${title} · ${i18n.t('timer.neg')}`;
      else str = `${i18n.t('timer.neg')} · ${title} · ${i18n.t('timer.affirm')}`;
    }
    useBigTimer(time1 || time2);
  } else if (type === TYPE.对辩) {
    if (attackSide) str = `${i18n.t('timer.affirm')}${u1} · ${title} · ${i18n.t('timer.neg')}${u2}`;
    else str = `${i18n.t('timer.neg')}${u2} · ${title} · ${i18n.t('timer.affirm')}${u1}`;
    if (u1 === '无' && u2 === '无') {
      if (attackSide) str = `${i18n.t('timer.affirm')} · ${title} · ${i18n.t('timer.neg')}`;
      else str = `${i18n.t('timer.neg')} · ${title} · ${i18n.t('timer.affirm')}`;
    }
    useFreeTimer(time1, time2);
    setStartTimer(attack);
  } else if (type === TYPE.高级自定) {
    Logger.debug([time1, time2, time1 && time2]);
    if (time1 && time2) {
      useFreeTimer(time1, time2);
      setStartTimer(attack);
    } else useBigTimer(time1 || time2);
  } else if (type === TYPE.空) {
    useNoTimer(title);
  } else if (type === TYPE.CUSTOM) {
    // 5,false,,,180,0,Opening141
    if (u1 === 'false') {
      useBigTimer(time1);
    } else {
      useFreeTimer(time1, time2);
      setStartTimer(attack);
    }
    str = title;
  }
  // if(rules[id][7] !== undefined) {
  //   timerStatus = rules[id][7];
  //   Logger.debug(1);
  //   Logger.debug(timerStatus);
  //   Logger.debug(rules[id][7]);
  // }
  changeTitle(str || title);
}

function stopPlaySound(i) {
  if (document.getElementById('mic-2') === null) return;
  if (i === undefined) {
    sounds[1].stop();
    sounds[2].stop();
  } else {
    sounds[i - 1].stop();
  }
}

function playSound(i) {
  if (document.getElementById('mic-2') === null) return;
  sounds[i - 1].play();
}

function stepStatus() {
  stopPlaySound();
  if (statusNowLocal === rules.length - 1) return;
  saveTime(statusNowLocal);
  changeStatusTo(statusNowLocal + 1);
}

function declineStatus() {
  stopPlaySound();
  if (statusNowLocal === 0) return;
  saveTime(statusNowLocal);
  changeStatusTo(statusNowLocal - 1);
}

// eslint-disable-next-line no-unused-vars
function changeStatus() {
  Logger.debug('histatus');
  if (timerUsing === TYPE.双计时器) {
    if (timerStatus[1] === -1) {
      startCCTimer();
    } else if (timerStatus[1] === 0) {
      stopCTimer();
      startCCTimer();
    } else if (timerStatus[1] === 1) {
      stopCCTimer();
      startCTimer();
    }
  } else if (timerStatus[0] === 0) startBigTimer();
  else stopBigTimer();
}

function startSide(side) {
  // 当目前在暂停的时候，side要另外判断
  Logger.debug(CTimerId);
  Logger.debug(CCTimerId);
  if (timerStatus[1] === -1) {
    if (side === 1) startCTimer();
    else startCCTimer();
  } else if (!CCTimerId.ongoing && !CTimerId.ongoing) {
    if (side === 1) startCTimer();
    else startCCTimer();
  } else if (CCTimerId.ongoing || CTimerId.ongoing) {
    if (side === 1) {
      startCTimer();
      stopCCTimer();
    } else {
      startCCTimer();
      stopCTimer();
    }
  }
}

function stopBothTimer() {
  // 0,0→反方计时 0,1→正方计时
  stopBigTimer();
  if (timerStatus[1] === 0) {
    stopCTimer();
  } else if (timerStatus[1] === 1) {
    stopCCTimer();
  }
}

// 1,0,一辩,无,180,0,陈词
// 1,0,无,无,180,0,陈词
// type,主动方,正方辩位,反方辩位,正方时间,反方时间,标题
const res = {
  team: [],
  battle: {
    rule: [].join(';'),
    title: '加载中',
    // title: '霍格沃兹第二十五届辩论赛',
  },
};

function getQueryVariable(variable) {
  let query = window.location.search.substring(1);
  if (window.location.search === '') {
    // eslint-disable-next-line prefer-destructuring
    query = window.location.href.split('?')[1];
  }
  const vars = query.split('&');
  for (let i = 0; i < vars.length; i += 1) {
    const pair = vars[i].split('=');
    if (pair[0] === variable) {
      return pair[1];
    }
  }
  return false;
}

function getDecode(key) {
  if (getQueryVariable(key) === false) return false;
  return decodeURIComponent(getQueryVariable(key));
}

function dealOthers(data) {
  Logger.debug(data);
  const title = data.split('||')[0];
  DOM.titleJ.html(title);
  Logger.debug(DOM);
  Logger.debug(DOM.titleJ);
  DOM.titleJ.html(title);
  const ruleArr = data.split('||')[1].split(';');
  for (let i = 0; i < ruleArr.length; i += 1) {
    rules[i] = ruleArr[i].split(',');
  }
  rulesOriginal = JSON.parse(JSON.stringify(rules));
  changeStatusTo(0);
  const team = [getDecode('t0'), getDecode('t1')];
  const title1 = [getDecode('n0'), getDecode('n1')];
  if (team[0] !== false) {
    $('#teamName-C').html(team[0]);
    $('#teamName-CC').html(team[1]);
    if (team[0].length > 13) $('#teamName-C').attr('class', 'twoLine teamName teamNameC');
    if (team[1].length > 13) $('#teamName-CC').attr('class', 'twoLine teamName teamNameCC');
  }
  if (title1[0] !== false) {
    $('#down-C').html(title1[0]);
    $('#down-CC').html(title1[1]);
  }
  if (getQueryVariable('nub') !== false) {
    if (getQueryVariable('nub') === 'true') $('.controllerGroup').hide();
  }
  if (getQueryVariable('water') !== false) {
    if (getQueryVariable('water') === 'false') $('.copyright').hide();
  }
  if (getQueryVariable('custom') !== false) {
    if (getQueryVariable('custom') === 'true') {
      $('#custom').show();
      $('#main').hide();
    }
  }
  if (getQueryVariable('notify') !== false) {
    const notify = getQueryVariable('notify');
    if (notify === 'false') {
      document.getElementById('mic-2').remove();
      document.getElementById('mic-3').remove();
    }
  }
  if (getQueryVariable('color') !== false) {
    const color = getQueryVariable('color');
    if (color === 'true') {
      let colorCode = getQueryVariable('colorCode');
      colorCode = decodeURIComponent(colorCode).split('|');
      const [title2, team1, match, round, bigTimer, timerZheng, timerFan] = colorCode;
      $('#title').css('color', match);
      $('#emptyRound').css('color', round);
      $('#status').css('color', round);
      $('.teamName').css('color', title2);
      $('.down').css('color', team1);
      $('.bigTime').css('color', bigTimer);
      $('.CTime').css('color', timerZheng);
      $('#CTime1').css('color', timerZheng);
      $('.CCTime').css('color', timerFan);
      $('#CCTime1').css('color', timerFan);
    }
  }
  console.log(getQueryVariable('bgUrl'));
  if (getQueryVariable('bgUrl') !== false) {
    const bgUrl = decodeURIComponent(getQueryVariable('bgUrl'));
    $('#main').css('background', `url(${bgUrl}) no-repeat`);
    $('#main').css('background-size', '100%');
  }
  // let spaceKeyMap = '空格';
  // if (getQueryVariable('useb') !== false) {
  //   if (getQueryVariable('useb') === 'true') {
  //     spaceKeyMap = 'B键';
  //   }
  // }
  //   alert(`键盘操作：←→切换环节，${spaceKeyMap}开始/暂停计时，回车强制停止双方计时，R重置时间；
  //     小于号<正方开始，大于号>反方开始(也可以直接按空格来一键切换正反方)。
  // 展示提示音：按下数字键1展示30秒倒计时提示音，按下数字键2展示时间到提示音。
  // 鼠标操作：很明显。`);
  DOM.titleJ.html(title);
  Logger.debug(title);
  DOM.titleJ.html(title);
}

async function loadRule() {
  $('#load-font').hide();
  DOM.mainWrapper.focus();
  DOM.mainWrapper.blur(() => {
    $(this).focus();
  });
  $('#custom').hide();
  if (getQueryVariable('rid') === false) {
    // eslint-disable-next-line no-alert
    alert('您未输入比赛码！');
    return;
  }
  Logger.debug(getQueryVariable('off'));
  if (getQueryVariable('off') !== false) {
    if (getQueryVariable('off') === 'true') {
      const rule = electronRules[0];
      Logger.debug(rule);
      [res.battle.title] = rule.split('||');
      DOM.titleJ.html();
      dealOthers(rule);
      return;
    }
  }
  const ridd = getQueryVariable('rid');
  Logger.debug(ridd);
  const qr = new lc.Query('TimerRule');
  if (parseInt(ridd, 10).toString() === ridd) {
    qr.equalTo('timerId', parseInt(ridd, 10));
  } else {
    qr.equalTo('name', decodeURIComponent(ridd));
  }
  try {
    const queryTimerRuleRes = await qr.find();
    if (queryTimerRuleRes.length === 0) {
      res.battle.title = '看到这行字说明计时码错误，请检查';
      DOM.titleJ.html(res.battle.title);
      return;
    }
    const { rule } = queryTimerRuleRes[0].attributes;
    dealOthers(rule);
    const trInc = queryTimerRuleRes[0];
    trInc.increment('useTimes', 1);
    await trInc.save();
  } catch (e) {
    res.battle.title = '看到这行字说明出现网络问题或浏览器版本过旧，请检查';
    DOM.titleJ.html(res.battle.title);
    $('#load-font-2').show();
    $('[role=document]').hide();
    $('.v-overlay').hide();
    $('.txt').hide();
    $('#main').css('background', 'white');
  }
}

// eslint-disable-next-line no-unused-vars
function changeBackground() {
  const { files } = document.getElementById('images');
  // background: url("https://cdn.puluter.cn/bamboo-cqu2019_background.png")
  // no-repeat;
  for (let i = 0; i < files.length; i += 1) {
    const file = files[i];
    const imageType = /^image\//;

    // eslint-disable-next-line no-continue
    if (!imageType.test(file.type)) continue;

    const reader = new FileReader();
    // eslint-disable-next-line no-loop-func
    reader.onload = (e) => {
      Logger.debug(e);
      Logger.debug(`url(${e.target.result}) no-repeat`);
      DOM.main.show();
      DOM.main.css('background', `url(${e.target.result}) no-repeat`);
      DOM.main.css('background-size', '100%');
    };
    reader.readAsDataURL(file);
  }
  $('#custom').hide();
  $('#main').show();
}

function loadCss() {
  const css = document.createElement('link');
  css.href = '';
  css.id = 'cssLink';
  css.rel = 'stylesheet';
  css.type = 'text/css';
  document.head.appendChild(css);
}

let isElectron = false;

function changeRatio() {
  const resRatio = $(window).width() / $(window).height();
  const resRatioStandard = 16 / 9;
  const ratio = resRatio / resRatioStandard;
  const onOrOff = isElectron ? 'off' : 'on';
  if (ratio > 1.01) {
    $('#cssLink').attr({
      rel: 'stylesheet',
      type: 'text/css',
      href: `../assets/css-combine/h-${onOrOff}.css`,
    });
  } else {
    $('#cssLink').attr({
      rel: 'stylesheet',
      type: 'text/css',
      href: `../assets/css-combine/w-${onOrOff}.css`,
    });
  }
}

const documentReady = () => {
  setTimeout(async () => {
    Logger.warn('HELLO WORLD');
    Logger.debug(document);
    Logger.debug(window);
    const { userAgent } = navigator; // 取得浏览器的userAgent字符串
    if (userAgent.indexOf('Firefox') > -1) { // 判断是否Firefox浏览器
      // eslint-disable-next-line no-alert
      alert('本计时器不支持火狐浏览器！！！务必换用其他浏览器！');
    }

    $(window).resize(() => {
      changeRatio();
    });
    changeRatio();
    useNoTimer();
    if (getQueryVariable('useb') !== false) {
      if (getQueryVariable('useb') === 'true') {
        KEYMAP.SPACE = 66;
      }
    }
    document.onkeydown = () => {
      const { keyCode } = window.event;
      // Logger.debug(KEYMAP);
      if (keyCode === KEYMAP.RIGHT) {
        stepStatus();
      } else if (keyCode === KEYMAP.LEFT) {
        declineStatus();
      } else if (keyCode === KEYMAP.ENTER) {
        stopBothTimer();
      } else if (keyCode === KEYMAP.SPACE || keyCode === KEYMAP.B) {
        if (timerUsing === TYPE.双计时器) {
          if (timerStatus[1] === -1) {
            startCCTimer();
          } else if (timerStatus[1] === 0) {
            stopCTimer();
            startCCTimer();
          } else if (timerStatus[1] === 1) {
            stopCCTimer();
            startCTimer();
          }
        } else if (timerStatus[0] === 0) startBigTimer();
        else stopBigTimer();
      } else if (keyCode === 49) {
        playSound(2);
        setTimeout(() => {
          stopPlaySound(2);
        }, 700);
      } else if (keyCode === 50) {
        playSound(3);
        setTimeout(() => {
          stopPlaySound(3);
        }, 5000);
      } else if (keyCode === KEYMAP.R) {
        resetTime();
      } else if (keyCode === KEYMAP['<']) {
        startSide(0);
      } else if (keyCode === KEYMAP['>']) {
        startSide(1);
      }
    };
    const { battle, team } = res;
    if (battle.title.length >= 18) DOM.titleJ.addClass('two-line');
    DOM.titleJ.html(battle.title);
    $('#teamName-C').html(team[0]);
    $('#teamName-CC').html(team[1]);
    const ruleArr = battle.rule.split(';');
    for (let i = 0; i < ruleArr.length; i += 1) {
      rules[i] = ruleArr[i].split(',');
    }
    changeStatusTo(0);
    accurateInterval(checkTimer, 50);
    loadRule();
  }, 10);
};

export default {
  name: 'Show',
  setup() {
    const { isFullscreen } = useFullscreen();
    return { isFullscreen };
  },
  methods: {
    toggleFull() {
      toggle();
      if (!this.isFullscreen) {
        this.$refs.conn.className = 'full con';
      } else this.$refs.conn.className = 'con';
    },
    closeDialog() {
      this.dialog = false;
      this.$refs.lastBtn.className = 'btn btn-success btn-lg animate__animated animate__bounce animate__repeat-3';
    },
  },
  data() {
    return {
      dialog: true,
      isElectron: process.env.IS_ELECTRON,
      spaceKeyMap: '空格',
    };
  },
  mounted() {
    i18n.locale = this.$i18n.locale;
    isElectron = this.isElectron;
    loadCss();
    DOM = {
      bigTimer: $('#mainTimer'),
      main: $('#main'),
      mainWrapper: $('#mainWrapper'),
      freeTimer: $('#freeTimerId'),
      titleJ: $('#title'),
      methodBtn: $('#btn-method-start'),
      emptyTitle: $('#emptyRound'),
      status: $('#status'),
      double0: $('.double-0'),
      double1: $('.double-1'),
      buttons: {
        claimSide: $('#btnc'),
        counterClaimSide: $('#btncc'),
        stopBoth: $('#stopBoth'),
        resetTime: $('#resetTime'),
        step: $('#stepButton'),
        prev: $('#prevButton'),
      },
    };
    DOM.methodBtn.click(() => {
      changeStatus();
    });
    DOM.buttons.claimSide.click(() => {
      startSide(0);
    });
    DOM.buttons.counterClaimSide.click(() => {
      startSide(1);
    });
    DOM.buttons.stopBoth.click(() => {
      stopBothTimer();
    });
    DOM.buttons.resetTime.click(() => {
      resetTime();
    });
    DOM.buttons.step.click(() => {
      stepStatus();
    });
    DOM.buttons.prev.click(() => {
      declineStatus();
    });
    $('#changeBack').click(() => {
      changeBackground();
    });
    if (getQueryVariable('useb') !== false) {
      if (getQueryVariable('useb') === 'true') {
        this.spaceKeyMap = 'B键';
      }
    }
    documentReady();
  },
};
</script>

<style scoped lang="scss">
.container {
  overflow-y: hidden !important;
  padding: 8px;
}
.full {
  .mainWrapper {
    height: 100vh !important;
  }
}
.v-application {
  line-height: normal !important;
}

.v-application p {
  margin-bottom: 0;
}

button,
select {
  text-transform: none;
}

*,
::after,
::before {
  box-sizing: border-box;
}

button,
input,
optgroup,
select,
textarea {
  margin: 0;
  font-family: inherit;
  font-size: inherit;
  line-height: inherit;
}

button,
input {
  overflow: visible;
}

.btn {
  display: inline-block;
  font-weight: 400;
  color: #212529;
  text-align: center;
  vertical-align: middle;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  background-color: transparent;
  border: 1px solid transparent;
  padding: 0.375rem 0.75rem;
  font-size: 1rem;
  line-height: 1.5;
  border-radius: 0.25rem;
  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
  border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
}

.btn-light {
  color: #212529;
  background-color: #f8f9fa;
  border-color: #f8f9fa;
}

.btn-danger {
  color: #fff;
  background-color: #dc3545;
  border-color: #dc3545;
}

.btn-toolbar {
  display: -ms-flexbox;
  display: flex;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  -ms-flex-pack: start;
  justify-content: flex-start;
}

.btn-group,
.btn-group-vertical {
  position: relative;
  display: -ms-inline-flexbox;
  display: inline-flex;
  vertical-align: middle;
}

.mr-2,
.mx-2 {
  margin-right: 0.5rem !important;
}

.btn-success {
  color: #fff;
  background-color: #28a745;
  border-color: #28a745;
}

.btn-lg {
  padding: 0.5rem 1rem;
  font-size: 1.25rem;
  line-height: 1.5;
  border-radius: 0.3rem;
}

.btn-group > .btn:not(:last-child):not(.dropdown-toggle) {
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
}

.btn-group > .btn {
  position: relative;
  -ms-flex: 1 1 auto;
  flex: 1 1 auto;
}

.btn-group > .btn:not(:first-child) {
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
}

.btn-group > .btn:not(:first-child) {
  margin-left: -1px;
}

.btn-light:not(:disabled):not(.disabled):active,
.show > .btn-light.dropdown-toggle {
  color: #212529;
  background-color: #dae0e5;
  border-color: #d3d9df;
}

.btn-success:not(:disabled):not(.disabled):active,
.show > .btn-success.dropdown-toggle {
  color: #fff;
  background-color: #1e7e34;
  border-color: #1c7430;
}

.btn-danger:not(:disabled):not(.disabled):active,
.show > .btn-danger.dropdown-toggle {
  color: #fff;
  background-color: #bd2130;
  border-color: #b21f2d;
}

.btn:active {
  z-index: 1;
}
</style>
