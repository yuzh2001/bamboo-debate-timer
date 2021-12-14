<template>
  <v-container>
    <v-card class="mx-auto" max-width="500">
      <v-card-title class=" mt-n3">
        <span tag="环节ICON">
          <v-icon medium color="primary" class="mt-n4 hidden-sm-and-down">
            {{ computedIcon }}
          </v-icon>
          <v-icon small color="primary" class="mt-n4 hidden-md-and-up">
            {{ computedIcon }}
          </v-icon>
        </span>
        <p lg="11" class="text-left text-md-h5 text-body-1 ml-2 ml-md-3 font-weight-black">
          {{ combinedTitle }}
        </p>
        <v-spacer></v-spacer>
        <span tag="移动ICON" style="cursor:move">
          <v-icon medium color="warning" class="tryHan mt-n4 hidden-sm-and-down" v-if="displayDrop">
            fa-arrows-alt
          </v-icon>
          <v-icon small color="warning" class="tryHan mt-n4 hidden-md-and-up" v-if="displayDrop">
            fa-arrows-alt
          </v-icon>
        </span>
      </v-card-title>

      <v-card-subtitle class="text-left text-body-2 text-md-subtitle-1 ml-1">
        {{ combinedSubtitle }}
      </v-card-subtitle>

      <v-card-actions class="mt-n15 edit">
        <v-spacer></v-spacer>
        <v-btn icon @click="show = !show" v-if="displayDrop" class="mr-3" color="success">
          <v-icon small>fa-edit</v-icon>
          {{ $t('card.action.edit') }}
        </v-btn>
        <v-btn icon v-if="!displayDrop" @click="doPaste" class="mr-3" color="primary">
          <v-icon small>far fa-clone</v-icon>
          {{ $t('card.action.copy') }}
        </v-btn>
      </v-card-actions>

      <v-expand-transition>
        <div v-show="show">
          <v-divider></v-divider>

          <v-card-text>
            <v-select
              v-model="input.category"
              :items="selList.category"
              item-text="text"
              item-value="value"
              :hide-details="true"
              :label="$t('card.str.roundType')"
            />

            <v-text-field
              class="mt-3"
              v-model="input.title"
              :label="$t('card.str.roundTitle')"
              clearable
              :hide-details="true"
            ></v-text-field>

            <v-select
              v-if="isCustom"
              v-model="input.isCustomDual"
              :items="[
                {text:$t('timer.card.singleSide'),value:false},
                {text: $t('timer.card.dualSide'),value:true}
                ]"
              item-text="text"
              item-value="value"
              :label="$t('card.str.timerCnt')"
              class="mb-n6 mt-3"
            />

            <div v-if="isCustom && isDual">
              <v-select
                v-model="input.attackSide"
                :items="selList.attackSide"
                item-text="text"
                item-value="value"
                :hide-details="true"
                class="mt-3"
                :label="$t('card.str.attackSide')"
              />
            </div>
            <div v-if="!isEmpty">
              <div tag="发起方" v-if="!isCustom">
                <v-select
                  v-if="isFree"
                  v-model="input.attackSide"
                  :items="selList.attackSide"
                  item-text="text"
                  item-value="value"
                  :hide-details="true"
                  class="mt-3"
                  :label="$t('card.str.attackSide')"
                />

                <v-row v-else class="">
                  <v-col cols="6">
                    <v-select
                      v-model="input.attackSide"
                      :items="selList.attackSide"
                      item-text="text"
                      item-value="value"
                      :hide-details="true"
                      :label="$t('card.str.attackSide')"
                    ></v-select>
                  </v-col>
                  <v-col cols="6">
                    <v-select
                      v-model="input.attackPosition"
                      :items="selList.attackPosition"
                      item-text="text"
                      item-value="value"
                      :hide-details="true"
                      :label="$t('card.str.attackPos')"
                    ></v-select>
                  </v-col>
                </v-row>
              </div>

              <v-row v-if="isDual && !isCustom" class="mt-n3">
                <v-col cols="6">
                  <v-select
                    v-model="input.defendSide"
                    :items="selList.attackSide"
                    item-text="text"
                    item-value="value"
                    disabled
                    :hide-details="true"
                    :label="$t('card.str.defendSide')"
                  ></v-select>
                </v-col>
                <v-col cols="6">
                  <v-select
                    v-model="input.defendPosition"
                    :items="selList.defendPosition"
                    :error="hasNotInputted"

                    item-text="text"
                    item-value="value"
                    :hide-details="true"
                    :label="$t('card.str.defendPos')"
                  ></v-select>
                </v-col>
              </v-row>

              <div tag="时间" class="mb-1">
                <div v-if="!isDualTimer && !(isCustom && isDual)">
                  <v-text-field
                    class="mt-3"
                    v-model="input.time"
                    :label="$t('card.str.duration')"
                    suffix="秒"
                    clearable
                    type="number"
                    :hide-details="true"
                  ></v-text-field>
                </div>
                <v-row v-else class="mt-n3">
                  <v-col cols="6">
                    <v-text-field
                      class="mt-3"
                      v-model="input.time"
                      :label="$t('timer.affirm')"
                      suffix="秒"
                      clearable
                      type="number"
                      :hide-details="true"
                    ></v-text-field>
                  </v-col>
                  <v-col cols="6">
                    <v-text-field
                      class="mt-3"
                      v-model="input.timeCC"
                      :label="$t('timer.neg')"
                      suffix="秒"
                      clearable
                      type="number"
                      :hide-details="true"
                    ></v-text-field>
                  </v-col>
                </v-row>
              </div>

              <!-- alert -->
              <v-alert v-if="isDual && hasNotInputted && !isCustom" dense outlined type="error">
                {{ $t('card.hint.selectDefendPos') }}<strong>
                {{ $t('card.hint.selectDefendPos2') }}</strong>
                {{ $t('card.hint.selectDefendPos3') }}
              </v-alert>

            </div>
            <v-divider></v-divider>

            <!-- buttons -->
            <v-row class="mb-n3">
              <v-col cols="4">
                <v-btn block depressed color="accent" @click="copy">
                  <v-icon left>
                    far fa-clone
                  </v-icon>
                  {{$t('card.action.duplicate')}}
                </v-btn>
              </v-col>
              <v-col cols="4">
                <v-btn
                  block
                  depressed
                  color="error"
                  @click="deleteTry"
                >
                  <v-icon left>
                    far fa-trash-alt
                  </v-icon>
                  {{ $t('card.action.delete') }}
                </v-btn>
              </v-col>
              <v-col cols="4">
                <v-btn block depressed @click="submit" color="success">
                  <v-icon left>
                    fa-check
                  </v-icon>
                  {{ $t('card.action.finish') }}
                </v-btn>
              </v-col>
            </v-row>
          </v-card-text>
        </div>
      </v-expand-transition>
    </v-card>
    <v-row justify="center">
      <v-dialog v-model="dialog" persistent max-width="300">
        <v-card>
          <v-card-title class="text-center headline">
            {{ $t('card.hint.deleteHint') }}
          </v-card-title>
          <v-card-text class="text-center">
            确认后该环节将被删除，此操作不可逆！
          </v-card-text
          >
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="error" @click="confirmDelete">
              {{$t('card.action.delete')}}
            </v-btn>
            <v-btn color="success" @click="dialog = false">
              {{ $t('card.action.cancel') }}
            </v-btn>
            <v-spacer></v-spacer>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-row>
  </v-container>
</template>

<script>
// import * as R from 'ramda';
import {
  equals, ifElse, isNil, pipe, when,
} from 'ramda';
import Logger from 'js-logger';
import { genDb } from '../libs/db-const';

const R = {
  isNil, equals, pipe, when, ifElse,
};

let DB = {};
const utils = {
  /**
   * 生成规则的辅助函数，type,主动方,正方辩位,反方辩位,正方时间,反方时间,标题
   * @param {Number} type 环节类别
   * @param {string} attack 环节发起方，0为正1为反
   * @param {String} u1 正方辩位名称
   * @param {String} u2 反方辩位名称
   * @param {string} time1 正方时间
   * @param {string} time2 反方时间
   * @param {String} title 标题
   */
  genRule: (type, attack, u1, u2, time1, time2, title) => [type, attack, u1, u2, time1, time2, title].join(','),
  getRealType: (type) => {
    if (type === 3) return 2;
    return type;
  },
};
/*
  自定义：自己选择标题，选择要一个计时器还是两个计时器，选择对应的时间。选择两个计时器下面那个文字。
 */
const DEBUG = false;
export default {
  name: 'db-card',
  props: {
    id: {
      type: String,
    },
    category: {
      required: DEBUG,
      type: Number,
      default() {
        Logger.debug(this.$store.state);
        return this.$store.state.debate_db.TIMER.CATEGORY.STATEMENT;
      },
    },
    title: {
      type: String,
      required: DEBUG,
      default() {
        return this.$t('timer.card.default.title');
      },
    },
    attackSide: {
      required: DEBUG,
      default() { return this.$store.state.debate_db.SIDE.CATEGORY.CLAIM; },
    },
    attackPosition: {
      required: DEBUG,
      default() { return this.$store.state.debate_db.POS.CATEGORY.FIRST; },
    },
    time: {
      type: [Number, String],
      required: DEBUG,
      default() { return 0; },
    },
    timeCC: {
      type: [Number, String],
      required: DEBUG,
      default() { return 0; },
    },
    displayDrop: {
      type: Boolean,
      default() { return true; },
    },
    defendPosition: {
      default() { return this.$store.state.debate_db.POS.CATEGORY.UNDEF; },
    },
    expand: {
      type: Boolean,
      default() {
        return false;
      },
    },
    isCustomDual: {
      type: Boolean,
      default() { return false; },
    },
    customProps: {
      type: Object,
      default() {
        return {
          affText: this.$t('timer.card.default.props.affText'),
          negText: this.$t('timer.card.default.props.negText'),
        };
      },
    },
  },
  beforeCreate() {
    DB = genDb(this.$i18n);
  },
  data() {
    return {
      show: false,
      dialog: false,
      input: {
        id: '',
        category: 0,
        title: undefined,
        attackSide: DB.SIDE.CATEGORY.CLAIM,
        attackPosition: DB.POS.CATEGORY.FIRST,
        defendSide: DB.SIDE.CATEGORY.COUNTER_CLAIM,
        defendPosition: DB.POS.CATEGORY.FIRST,
        time: 0,
        timeCC: 0,
        timeSm: 0,
        isCustomDual: this.isCustomDual,
      },
      selList: {
        attackSide: DB.SIDE.DATA.map((item, index) => ({
          text: item.str,
          value: index,
        })),
        category: DB.TIMER.DATA.map((item, index) => ({
          text: item.str,
          value: index,
        })),
        attackPosition: DB.POS.DATA1.map((item, index) => ({
          text: item.str,
          value: index,
        })),
        defendPosition: DB.POS.DATA.map((item, index) => ({
          text: item.str,
          value: index,
        })),
      },
    };
  },
  mounted() {
    Logger.setLevel(Logger.DEBUG);
    Object.keys(this.input).forEach((key) => {
      if (!R.isNil(this[key])) this.input[key] = this[key];
      else this.input[key] = '';
    });
    if (R.equals(this.input.title, '')) this.input.title = '未定义环节名称';
    this.input.defendSide = this.input.attackSide === 0 ? 1 : 0;
  },
  watch: {
    // eslint-disable-next-line func-names
    'input.attackSide': function (val) {
      this.input.defendSide = val === 0 ? 1 : 0;
    },
    input: {
      handler() {
        this.$emit('change', this.input, this.ruleText);
        this.$emit('update:ruleTxt', this.ruleText);
      },
      deep: true,
    },
    expand(newV) {
      this.show = newV === true;
    },
    // ruleText() {
    //   this.$emit('change', this.input, this.ruleText);
    // },
  },
  methods: {
    doPaste() {
      this.$emit('doPaste', this.id);
    },
    submit() {
      if (!this.hasNotInputted || !this.isDual || this.isCustom) {
        this.show = false;
        this.$emit('change', this.ruleText);
      }
    },
    confirmDelete() {
      this.dialog = false;
      this.$emit('deleteIt');
    },
    copy() {
      this.$emit('copy', this.input);
    },
    deleteTry() {
      this.dialog = true;
    },
  },
  computed: {
    isCustom() {
      return this.input.category === DB.TIMER.CATEGORY.CUSTOM;
    },
    isFree() {
      return R.equals(this.input.category, DB.TIMER.CATEGORY.FREE);
    },
    hasNotInputted() {
      return this.input.defendPosition === DB.POS.CATEGORY.UNDEF;
    },
    localDuration() {
      return this.input.time;
    },
    localDurationCC() {
      return this.input.timeCC;
    },
    isDual() {
      if (this.input.category === DB.TIMER.CATEGORY.CUSTOM) {
        Logger.info('HELLO');
        return this.input.isCustomDual;
      }
      return DB.TIMER.DATA[this.input.category].isDual;
    },
    isEmpty() {
      return this.input.category === DB.TIMER.CATEGORY.EMPTY;
    },
    isDualTimer() {
      return DB.TIMER.DATA[this.input.category].isDualTimer;
    },
    combinedTitle() {
      return `${DB.TIMER.DATA[this.input.category].str} · “${this.input.title}”`;
    },
    attackDesc() {
      try {
        return `${DB.SIDE.DATA[this.input.attackSide].str
        + DB.POS.DATA[this.input.attackPosition].str}`;
      } catch (e) {
        return '';
      }
    },
    defendDesc() {
      try {
        const a = `${DB.SIDE.DATA[this.input.defendSide].str
        + DB.POS.DATA[this.input.defendPosition].str}`;
        return a;
      } catch (e) {
        Logger.error(e);
        return '';
      }
    },
    combinedSubtitle() {
      if (this.isCustom) {
        if (this.input.isCustomDual) return `${this.input.title} · ${this.localDuration}秒 ·${this.localDurationCC}秒`;
        return `${this.input.title} · ${this.localDuration}秒`;
      }
      if (this.isDualTimer) {
        if (R.equals(this.attackSide, DB.SIDE.CATEGORY.CLAIM)) return `${this.attackDesc} · 正方${this.localDuration}秒 · 反方${this.localDurationCC}秒 · ${this.defendDesc}`;
        return `${this.attackDesc} · 反方${this.localDurationCC}秒 · 正方${this.localDuration}秒 · ${this.defendDesc}`;
      }
      if (this.isFree) return `${DB.SIDE.DATA[this.input.attackSide].str}先发言 · 各${this.localDuration}秒`;
      if (R.equals(DB.TIMER.CATEGORY.EMPTY, this.input.category)) return '无限时间';
      return `${this.attackDesc} · ${this.localDuration}秒${
        this.isDual ? ` · ${this.defendDesc}` : ''
      }`;
    },
    computedIcon() {
      return DB.TIMER.DATA[this.input.category].icon;
    },
    ruleText() {
      let str;
      const {
        attackSide, time, timeCC, title, category, attackPosition, defendPosition,
      } = this.input;
      const getPosStr = (s) => DB.POS.DATA2[s].str;
      const getReal = R.pipe(getPosStr, R.when(R.equals('未定义'), () => ''));
      const getSelection = R.ifElse(
        R.equals(DB.SIDE.CATEGORY.CLAIM),
        () => [getReal(attackPosition), getReal(defendPosition)],
        () => [getReal(defendPosition), getReal(attackPosition)],
      );
      const getEqDouble = (s) => [s, s];
      switch (category) {
        case DB.TIMER.CATEGORY.STATEMENT:
          str = utils.genRule(0, attackSide, getPosStr(attackPosition),
            getPosStr(attackPosition), ...getEqDouble(time), title);
          break;
        case DB.TIMER.CATEGORY.QUESTION:
          str = utils.genRule(1, attackSide, ...getSelection(attackSide),
            ...getEqDouble(time), title);
          break;
        case DB.TIMER.CATEGORY.BIQUESTION:
          str = utils.genRule(2, attackSide, ...getSelection(attackSide), time, timeCC, title);
          break;
        case DB.TIMER.CATEGORY.FREE:
          str = utils.genRule(3, attackSide, ...getEqDouble(''), ...getEqDouble(time), title);
          break;
        case DB.TIMER.CATEGORY.EMPTY:
          str = utils.genRule(4, '', '', '', '', '', title);
          break;
        case DB.TIMER.CATEGORY.CUSTOM:
          str = `5,${attackSide},${this.isDual},,${time},${timeCC},${title}`;
          break;
        default:
          break;
      }
      Logger.info(str);
      return str;
    },
  },
};
</script>
