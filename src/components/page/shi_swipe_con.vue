<template>
  <div>
      <slot name="shi_con_pic"></slot>
      
      <h3>{{shi_con_tit}}</h3>
  </div>
</template>
<script>
export default{
    props:['shi_con_tit']
}
</script>
<style>
.shi_con_pic{
    display: inline-block;
    width: 5.12rem;
    height: 7.32rem;
    margin: 2.4rem auto 0;
}
.shi_con_pic img{
    width: 100%;
}
</style>
