<template lang='pug'>
.set-time
  p.time {{ time }}
  p.artist {{ artist }}
</template>

<script>
export default {
  props: {
    artist: String,
    time: String
  }
}
</script>

<style lang='sass' scoped>
.set-time
  display: flex
  .time
    background-color: #424a52
    color: #ffffff
    padding: 1px 6px
    margin-right: 10px
  .artist
    text-transform: uppercase
</style>
