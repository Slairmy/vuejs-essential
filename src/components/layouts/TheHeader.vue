<template>
  <div class="navbar navbar-default topnav">
    <div class="container">
      <div class="navbar-header">
        <a href="/" class="navbar-brand">
          <span class="title">{{ logo.title }}</span>
          <img :src="logo.src" :alt="logo.title" />
        </a>
      </div>

      <div id="top-navbar-collapse" class="collapse navbar-collapse">
        <ul class="nav navbar-nav">
          <li
            v-for="(item, index) in navList"
            :key="(item, index)"
            :class="{active: index === activeNavIndex}"
          >
            <a href="#" @click="changeNavIndex(index)">{{ item }}</a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "TheHeader",
  data() {
    return {
      logo: {
        src: `${this.uploadsUrl}png/vue.png`,
        title: "VuejsCaff"
      },
      navList: ["社区", "头条", "问答", "教程"],
      activeNavIndex: 0
    };
  },
  beforeCreate() {
    this.uploadsUrl = "https://yp.dayanyu.com.cn/images/";
  },
  methods: {
    changeNavIndex(index) {
      this.activeNavIndex = index;
    }
  }
};
</script>

<style scoped>
img {
  position: relative;
  right: 80px;
  width: 45px;
  height: 40px;
  bottom: 28px;
}
</style>