<template lang='pug'>
.page
  .yt-container
    <iframe width="560" height="315" src="https://www.youtube.com/embed/live_stream?channel=UCQpQGT51tQbDQztiEH6hBcQ&autoplay=1" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
  img(src='@/assets/poster.jpg')
</template>

<script>
export default {
  title: 'Virtual Arcadia'
}
</script>

<style lang='sass' scoped>
img
  width: 100%
  max-width: 750px
.page
  display: flex
  flex-direction: column
  align-items: center
  .yt-container
    width: 100%
    max-width: 840px
    iframe
      width: 752px
      height: 423px
  h1
    margin-top: 0px
</style>
