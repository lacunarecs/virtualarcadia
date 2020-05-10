<template lang='pug'>
  #app
    img.bg(src='@/assets/bg.jpg')
    .content
      #nav
        router-link(to='/') HOME
        router-link(to='/set-times') SET TIMES
        router-link(to='/lineup') LINEUP
      router-view
</template>

<style lang="sass">
body
  margin: 0px
  background-color: #000000
#app
  font-family: Avenir, Helvetica, Arial, sans-serif
  -webkit-font-smoothing: antialiased
  -moz-osx-font-smoothing: grayscale
  text-align: center
  color: #ffffff

a:hover
  text-decoration: none
p
  margin: 10px 0px

img.bg
  opacity: 0.5
  position: absolute
  object-fit: cover
  top: 0px
  left: 0px
  width: 100%
  height: 100%
  z-index: -1

#nav
  padding: 30px
  a
    font-weight: bold
    color: #ffffff
    margin: 10px
    padding: 2px 5px
    text-decoration: none
    &.router-link-exact-active
      color: #000000
      background-color: white
</style>
