<template lang='pug'>
.page
  //- h1 Virtual Arcadia
  //- p - Online Music Festival -
  h1 LINEUP
  .lineup
    span Fytch
    span CMC$
    span Justin Mylo
    span Burak Yeter
    span Rival
    span Robert Falcon
    span BEAUZ, Egzod
    span Arc North
    span NIVIRO
    span RudeLies
    span LZRD
    span Jinco
    span Anikdote
    span IZECOLD
    span Miles Away
    span Uplink
    span Galvanic
    span Xavier Dunn
    span Jey Vazz
    span Debris
    span Beatcore
    span Snareskin
    span Two Can
    span Levitate
    span Bad Decisions
    span Rosenfeld
    span N3wport
    span Paul Flint
    span Tomatow
    span JFARR
    span Charles B
    span Fixl
    span Annie Sollange
    span Triple M
    span Ehallz
    span Biometrix
</template>

<script>
export default {
  title: 'Virtual Arcadia'
}
</script>

<style lang='sass' scoped>
.page
  display: flex
  flex-direction: column
  align-items: center
  h1
    margin-top: 0px
  .lineup
    width: 550px
    text-transform: uppercase
    font-weight: 600
    font-size: 18px
    display: flex
    flex-wrap: wrap
    justify-content: space-between
    @media (max-width: 600px)
      transform: scale(0.8)
      width: 500px
    @media (max-width: 450px)
      transform: scale(0.6)
      width: 500px
    span
      margin: 10px 10px
</style>
