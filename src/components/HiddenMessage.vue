<template>
   <div id="wrapper">
      <button class="button" v-on:click="isHidden = !isHidden">
         Show hidden message
      </button>
      <h1 v-if="!isHidden">{{ message }}</h1>
   </div>
</template>
<script>
export default {
   data() {
      return {
         isHidden: true
      }
   },
   props: {
      message: {
         type: String,
         default: () => ''
      }
   }
}
</script>
