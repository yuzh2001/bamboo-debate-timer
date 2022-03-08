<template>
  <v-app>
    <v-navigation-drawer app
                         v-model="drawer"
                         v-if="!isElectron && $route.name !== 'Show'">
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="title primary--text">
            {{ $t('navbar.header') }}
          </v-list-item-title>
          <v-list-item-subtitle class="primary--text">
            timer.bianlun.online
          </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>

      <v-list
        dense
        nav
      >
        <v-list-item
          v-for="item in items"
          :key="item.title"
          link
          :to="item.to"
          active-class="primary--text"
        >
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-divider/>
        <v-list-item
          link
          href="https://support.qq.com/products/297263"
          active-class="primary--text"
        >
          <v-list-item-icon>
            <v-icon>far fa-comments</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ $t('navbar.feedback') }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item
          link
          href="https://puluter.cn"
          active-class="primary--text"
        >
          <v-list-item-icon>
            <v-icon>fa-blog</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ $t('navbar.blog') }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item
          link
          href="https://qm.qq.com/cgi-bin/qm/qr?k=UjcenypMqyB16Z1zjW00EkudpVxZilht&jump_from=webapi"
          active-class="primary--text"
        >
          <v-list-item-icon>
            <v-icon>fa-users</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ $t('navbar.qqGroup') }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-divider/>
        <v-list-item
          link
          href="https://mp.weixin.qq.com/profile?src=3&timestamp=1612098411&ver=1&signature=bIFrHzzQ-vvnbRCbYakiyx3gwDTBWSNkpqbyvrcyrIwzEZL7gp3NaM1BbCIdyWzZ7lLmOF7PIzAtQvc1VZW6Dg=="
          active-class="primary--text"
        >
          <v-list-item-content>
            {{ $t('app.slogan') }}
            <v-img src="https://cdn.puluter.cn/onlinebianlun.jpg"></v-img>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar app v-if="!isShowPage">
      <!-- -->
      <v-app-bar-nav-icon
        v-if="!isElectron"
        @click.stop="drawer = !drawer">
        <v-icon>fa-bars</v-icon>
        </v-app-bar-nav-icon>
      <v-toolbar-title>
        {{ $t('footbar.title') }} {{ ver }}
        <span class="red--text font-weight-bold" v-if="isElectron">{{ $t('app.electron') }}</span>
      </v-toolbar-title>
    </v-app-bar>

    <!-- Sizes your content based upon application components -->
    <v-main>
      <!-- Provides the application the proper gutter -->
      <v-container fluid
                   :style="containerStyle">
        <!-- If using vue-router -->
        <div id="commento"></div>
        <router-view></router-view>
      </v-container>
    </v-main>

    <v-footer app class="text-left white--text" color="primary" v-if="!isShowPage">
      {{ $t('footbar.title') }} {{ ver }} @ 2020-2021
      <a style="color:white;margin-left:auto;" href="https://beian.miit.gov.cn/" v-if="!isElectron">鲁ICP备19033198号-3</a>
    </v-footer>
  </v-app>
</template>
<script>
import AV from 'leancloud-storage';
import { nowVersion } from './libs/version';

export default {
  computed: {
    isShowPage() {
      return this.$route.name === 'Show';
    },
    containerStyle() {
      return {
        height: !this.isShowPage ? 'calc(100vh - 124px)' : '100%',
        'overflow-y': this.isShowPage ? 'hidden' : 'auto',
        'overflow-x': this.isShowPage ? 'hidden' : 'auto',
        padding: this.isShowPage ? '0px' : '12px',
      };
    },
  },
  watch: {
  },
  async mounted() {
    await this.$cloudbase.auth().anonymousAuthProvider().signIn();
    // console.log(this.$route);
    if (process.env.NODE_ENV === 'production') {
      if (window) {
        window.console.log = () => {
        };
      }
    }
    this.ver = nowVersion;
    if (process.env.IS_ELECTRON) return;
    const a = AV.Object.createWithoutData('Version', '60f92d4b23353c0ba538f0b5');
    await a.fetch();
    const { attributes: { version } } = a;
    if (version !== this.ver) {
      // eslint-disable-next-line no-alert
      alert(`您在使用过时的版本，最新版是【${version}】，请按ctrl+f5来更新！`);
    }
  },
  data() {
    const navItems = {
      web: [
        { title: this.$t('navbar.navs.gen'), icon: 'fa-edit', to: '/gen' },
        { title: this.$t('navbar.navs.enter'), icon: 'fa-sign-in-alt', to: '/' },
      ],
      electron: [
        { title: this.$t('navbar.navs.enter'), icon: 'fa-sign-in-alt', to: '/' },
      ],
    };
    return {
      isElectron: process.env.IS_ELECTRON === true,
      ver: '',
      items: navItems[process.env.IS_ELECTRON === true ? 'electron' : 'web'],
      drawer: true,
    };
  },
};
</script>
<style lang="scss">
html {
  /* 禁用html的滚动条，因为用的无框架窗口，默认就会有一个滚动条，所以去掉 */
  overflow-y: hidden;
}

/*定义滚动条高宽及背景 高宽分别对应横竖滚动条的尺寸*/
::-webkit-scrollbar {
  width: 2px; /*滚动条宽度*/
  /*height: 2px;  !*滚动条高度*!*/
}

/*定义滚动条轨道 内阴影+圆角*/
::-webkit-scrollbar-track {
  /*-webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);*/
  /*border-radius: 10px;  !*滚动条的背景区域的圆角*!*/
  /*background-color: red;!*滚动条的背景颜色*!*/
}

/*定义滑块 内阴影+圆角*/
::-webkit-scrollbar-thumb {
  border-radius: 99px; /*滚动条的圆角*/
  /*-webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, .3);*/
  /*background-color: green;  !*滚动条的背景颜色*!*/
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
