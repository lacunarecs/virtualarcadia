<template lang='pug'>
  #app
    img.bg(src='@/assets/bg.jpg')
    .content
      //- h1.logo Virtual <span class='space'/> Arcadia
      //- p.logo - Online Music Festival -
      #nav
        router-link(to='/') HOME
        router-link(to='/set-times') SET TIMES
        router-link(to='/lineup') LINEUP
        a(href='https://www.flipcause.com/secure/donate/Nzc4Njg=/individual/44748' target="_blank") DONATE
      router-view.router-view
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
  font-weight: 600
h1
  text-transform: uppercase
  font-family: serif
span.space
  display: inline-block
  width: 0px

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
  margin-top: 30px
  margin-bottom: 50px
  a
    font-weight: 600
    color: #ffffff
    margin: 10px
    padding: 2px 5px
    text-decoration: none
    &.router-link-exact-active, &:active
      color: #000000
      background-color: white
.router-view
  margin-bottom: 50px
</style>
