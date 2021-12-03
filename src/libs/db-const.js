export const genDb = (i18n) => ({
  NULL: -1,
  TIMER: {
    CATEGORY: {
      STATEMENT: 0,
      QUESTION: 1,
      BIQUESTION: 2,
      FREE: 3,
      EMPTY: 4,
      CUSTOM: 5,
    },
    DATA: [
      {
        str: i18n.t('timer.cate.statement'),
        icon: 'fa-quote-left',
        isDual: false,
        isDualTimer: false,
      }, {
        str: i18n.t('timer.cate.question'),
        icon: 'fa-question',
        isDual: true,
        isDualTimer: false,
      }, {
        str: i18n.t('timer.cate.bitalk'),
        icon: 'fa-exchange-alt',
        isDual: true,
        isDualTimer: true,
      }, {
        str: i18n.t('timer.cate.free'),
        icon: 'fa-random',
        isDual: false,
        isDualTimer: false,
      }, {
        str: i18n.t('timer.cate.blank'),
        icon: 'fa-infinity',
        isDual: false,
        isDualTimer: false,
      }, {
        str: i18n.t('timer.cate.custom'),
        icon: 'fa-infinity',
        isDual: false,
        isDualTimer: false,
      },
    ],
  },
  SIDE: {
    CATEGORY: {
      CLAIM: 0,
      COUNTER_CLAIM: 1,
    },
    DATA: [
      {
        str: i18n.t('timer.affirm'),
      }, {
        str: i18n.t('timer.neg'),
      },
    ],
  },
  POS: {
    DATA: [
      {
        str: i18n.t('timer.pos.n1'),
      }, {
        str: i18n.t('timer.pos.n2'),
      }, {
        str: i18n.t('timer.pos.n3'),
      }, {
        str: i18n.t('timer.pos.n4'),
      }, {
        str: i18n.t('timer.pos.all'),
      }, {
        str: i18n.t('timer.pos.undefined'),
      },
    ],
    DATA2: [
      {
        str: i18n.t('timer.pos.n1'),
      }, {
        str: i18n.t('timer.pos.n2'),
      }, {
        str: i18n.t('timer.pos.n3'),
      }, {
        str: i18n.t('timer.pos.n4'),
      }, {
        str: '',
      }, {
        str: i18n.t('timer.pos.undefined'),
      },
    ],
    DATA1: [
      {
        str: i18n.t('timer.pos.n1'),
      }, {
        str: i18n.t('timer.pos.n2'),
      }, {
        str: i18n.t('timer.pos.n3'),
      }, {
        str: i18n.t('timer.pos.n4'),
      }, {
        str: i18n.t('timer.pos.all'),
      },
    ],
    CATEGORY: {
      FIRST: 0,
      SECOND: 1,
      THIRD: 2,
      FOURTH: 3,
      ALL: 4,
      UNDEF: 5,
    },
  },
});
// export default DB;
export const noUse = {};
