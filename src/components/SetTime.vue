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
  white-space: nowrap
  margin: 15px 0px
  .time
    background-color: #e1e3e5
    color: #000000
    font-size: 14px
    padding: 1px 6px
    margin: 0px
    margin-right: 10px
  .artist
    margin: 0px
    text-transform: uppercase
</style>
