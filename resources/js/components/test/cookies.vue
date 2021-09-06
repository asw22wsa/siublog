<template>
  <div>
    <a @click="getTest">get cookie</a><br>
    <a @click="setTest">set cookie</a><br>
    <a @click="resetTest">reset cookie</a><br>
    <a @click="getTest2">get cookie2</a><br>
    <a @click="setTest2">set cookie2</a><br>
    <a @click="resetTest2">reset cookie2</a><br>
  </div>
</template>

<script>
import VueCookies from 'vue-cookies'
export default {
  name: 'CookieTest',
  methods: {
    getTest: () => {
      if (VueCookies.isKey('test')) { alert(VueCookies.get('test')) } else {
        alert('값 없음')
      }
    },
    setTest: () => {
      VueCookies.set('test', new Date())
    },
    resetTest: () => {
      VueCookies.remove('test')
      alert('삭제됨')
    },
    getTest2: () => {
      if (VueCookies.isKey('siu')) { alert(VueCookies.get('siu')) } else {
        alert('값 없음')
      }
    },
    setTest2: () => {
      VueCookies.set('siu', "i am siu")
    },
    resetTest2: () => {
      VueCookies.remove('siu')
      alert('삭제됨')
    }
  }
}
</script>