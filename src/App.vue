<template lang='pug'>
  #app
    img.bg(src='@/assets/bg.jpg')
    //- h1.logo Virtual <span class='space'/> Arcadia
    //- p.logo - Online Music Festival -
    #nav
      router-link(to='/') HOME
      a(href='https://www.flipcause.com/secure/donate/Nzc4Njg=/individual/44748' target='_blank') DONATE
      router-link(to='/set-times') SET TIMES
      router-link(to='/lineup') LINEUP
      router-link(to='/giveaway') GIVEAWAY
      .sm-container
        a.sm(target='_blank' href='https://www.facebook.com/events/341677256795744')
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-facebook"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
        a.sm(target='_blank' href='https://www.instagram.com/virtual.arcadia')
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-instagram"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
        a.sm(target='_blank' href='https://twitter.com/VirtualArcadia')
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-twitter"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path></svg>
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
  position: relative
  padding: 1px // avoid collapsed margins

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
  z-index: -1

#nav
  display: flex
  flex-wrap: wrap
  justify-content: center
  align-items: center
  margin-top: 30px // avoid margin so body is full size
  margin-bottom: 50px
  padding: 0px 20px
  .sm-container
    display: flex
    flex-direction: row
    justify-content: center
    a
      margin: 10px 2px
      &.router-link-exact-active, &:active
        color: #ffffff
        background-color: transparent
        opacity: 0.7
      svg
        display: block
  a
    display: block
    font-weight: 600
    color: #ffffff
    margin: 10px
    padding: 2px 5px
    text-decoration: none
    white-space: nowrap
    &.router-link-exact-active, &:active
      color: #000000
      background-color: white
.router-view
  margin-bottom: 50px
</style>
