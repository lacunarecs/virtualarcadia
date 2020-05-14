<template lang='pug'>
div
  h1 Razer Giveaway
  p Donate 20$ or more and get a chance of winning one of 5 Razer Hammerhead True Wireless Earbuds.
  //- a(href='https://www.flipcause.com/secure/donate/Nzc4Njg=/individual/44748' target='_blank')
  //-   button(v-if='!continued' type='button') DONATE
  a(href='https://gleam.io/zMdsl/virtual-arcadia-razer-giveaway' target='_blank')
    button(v-if='!continued' type='button') ENTER
  //- button(v-if='!continued' type='button' @click='continued = true') CONTINUE
  //- input.text-field(v-if='continued' v-model='email' type='text' name='email' placeholder='Email' required)
  //- input.button(@click='submit()' v-if='continued' type='submit' value='ENTER')
</template>

<script>
// export default {
//   data: function () {
//     return {
//       continued: false,
//       email: ''
//     }
//   }
// }
</script>

<style lang="sass">
p
  max-width: 400px
  margin: auto
  padding: 0px 20px
iframe
  height: auto
// .text-field
//   background-color: transparent
//   background-color: rgba(#000000, 0.1)
//   &::placeholder
//     color: #999999
//   font-family: inherit
//   border: 3px solid white
//   box-sizing: border-box
//   padding: 0px 12px
//   height: 34px
//   outline: none
//   color: #ffffff
//   font-size: 14px
//   font-weight: 600
//   width: 220px
//   margin: 10px
//   text-transform: uppercase
.button, button
  background-color: #ffffff
  font-family: inherit
  border: none
  padding: 0px 12px
  height: 34px
  outline: none
  color: #000
  font-size: 14px
  font-weight: 600
  margin: 10px
  cursor: pointer
</style>
