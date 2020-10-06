<template lang='pug'>
.page
  .yt-container
    //- <iframe width="560" height="315" src="https://www.youtube.com/embed/live_stream?channel=UCQpQGT51tQbDQztiEH6hBcQ&autoplay=1" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    <iframe src="https://player.twitch.tv/?channel=lacunarecs&parent=virtualarcadia.com"></iframe>
    p <a href='https://www.twitch.tv/lacunarecs' target='_blank'>Follow</a> on Twitch to be notified when streams start

  img(src='@/assets/poster.jpg')
</template>

<script>
export default {
  title: 'Virtual Arcadia'
}
</script>

<style lang='sass' scoped>
p
  margin: 20px 0px
  a
    color: white
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
      border: 0px
      @media (max-width: 800px)
        width: 640px
        height: 360px
      @media (max-width: 640px)
        width: 512px
        height: 288px
      @media (max-width: 512px)
        width: 384px
        height: 216px
      @media (max-width: 384px)
        width: 256px
        height: 144px
  h1
    margin-top: 0px
</style>
