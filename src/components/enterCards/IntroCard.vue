<template>
  <v-card elevation="2" class="leftCard mb-5">
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
</template>

<script>
export default {
  name: 'IntroCard',
};
</script>

<style scoped>

</style>
