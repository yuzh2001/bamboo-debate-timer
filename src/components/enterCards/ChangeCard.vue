<template>

  <v-card elevation="2" class="leftCard mb-5">
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
          <v-expansion-panel-header>
            [0308] 响铃时间自定义
          </v-expansion-panel-header>
          <v-expansion-panel-content>
            在默认设置下，剩余30秒时会响铃+变色以提示辩手，在这里您可以对这个时间进行自定义。可以是60秒、45秒……由您来决定。
          </v-expansion-panel-content>
        </v-expansion-panel>

        <v-expansion-panel>
          <v-expansion-panel-header>
            [0308] 繁体中文、英文——更好的多语言支持
          </v-expansion-panel-header>
          <v-expansion-panel-content>
            现在，我们加入了繁体中文和英文两种选择，您可以在右侧方便地切换。 <br/>
            请注意，使用的最好方法是先切换语言，再生成计时码。在未切换语言时便生成了计时码可能会导致出错。
          </v-expansion-panel-content>
        </v-expansion-panel>

        <v-expansion-panel>
          <v-expansion-panel-header>
            【22年第1季度】 性能优化、赛事码、自定义字体
          </v-expansion-panel-header>
          <v-expansion-panel-content>
            我们对计时器性能进行了大幅优化，优化后未再收到任何有关性能问题的反馈，计时器计时更加稳定、精确；
            <br/> 上线了赛事码平台，简化比赛筹办方自定义背景的流程，可以在右侧赛事码处点击查看；
            <br/> 提供了一个自定义字体供切换，若您有这类修改字体的特殊需求，可以联系我们提供支持。
          </v-expansion-panel-content>
        </v-expansion-panel>

        <v-expansion-panel>
          <v-expansion-panel-header>【21年第4季度】 短域名、全屏、全自定义的环节</v-expansion-panel-header>
          <v-expansion-panel-content>
            您今后可以使用
            <v-chip href="http://debate.icu" color="error" label><h3>debate.icu</h3></v-chip>
            来访问本站。(大家要注意身体哦) <br/>
            加入一键全屏（进入计时器可见） <br/>
            【测试】现在可以在生成计时器页面的环节卡中，选择环节类别为“自定义”，然后自由输入环节名、选择计时器数量、选择时间。<br/>
            使用这个功能，你可以用辩之竹做任何一个活动的计时器，它将不局限在辩论中。<br/>
            由于是测试性质，如果出现bug，烦请加群反馈~
          </v-expansion-panel-content>
        </v-expansion-panel>

        <v-expansion-panel>
          <v-expansion-panel-header>【21年第3季度】 离线版【强烈推荐！！！】</v-expansion-panel-header>
          <v-expansion-panel-content>①无需配置、保证可以稳定运行<br/>
            ②可以在断网环境下使用，适合报告厅等场景<br/>
            有需要的可以加入QQ群992868670申请
          </v-expansion-panel-content>
        </v-expansion-panel>
      </v-expansion-panels>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  name: 'ChangeCard',
  props: {
    app_ver: {
      type: String,
      default: '1',
    },
  },
};
</script>

<style scoped>

</style>
