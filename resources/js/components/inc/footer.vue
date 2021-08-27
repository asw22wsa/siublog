<template>
  <div class="footer">
    this is footer
    <div class="offcanvas offcanvas-start" tabindex="-1" id="offcanvasWithBackdrop" aria-labelledby="offcanvasWithBackdropLabel">
      <div class="offcanvas-header">
        <h5 class="offcanvas-title" id="offcanvasWithBackdropLabel">안녕하세요 여기는 시우의 공부 공간 입니다.</h5>
        <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>
      <div class="offcanvas-body">
        <p>하나</p>
        <p>둘</p>
        <p>셋</p>
        <p>넷</p>
        <p>다섯</p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name:'',
  components : {},
  data(){
    return {
      sampleData:''
    };
  },
  setup(){},
  created(){},
  mounted(){},
  methods: {
  },
}
</script>
<style scoped>
.footer{
  background-color: #999999;
  text-align: center;
  height: 100px;
}
</style>