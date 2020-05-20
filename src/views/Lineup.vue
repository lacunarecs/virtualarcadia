<template lang='pug'>
  .page
    .lineup
      span AXEN
      span Anikdote
      span Annie Sollange
      span Arc North
      span Atlast
      span BEAUZ
      span Beatcore
      span Biometrix
      span Burak Yeter
      span CMC$
      span Charles B
      span EQRIC
      span Egzod
      span Ehallz
      span Fixl
      span Fox Stevenson
      span Fytch
      span Galvanic
      span Geoxor
      span Holly
      span JFARR
      span Jinco
      span Justin Mylo
      span Kastra
      span LEVITATE
      span Lammer
      span Lizzy Jane
      span Loopers
      span MAHALO
      span Miles Away
      span N3wport
      span NIVIRO
      span Nasko
      span Omri
      span PLS&TY
      span Papercut
      span Paul Flint
      span Robby East
      span Robert Falcon
      span Rosenfeld
      span RudeLies
      span Snareskin
      span Steff Da Campo
      span Synymata
      span TELYKast
      span Teminite
      span The Him
      span Todd Helder
      span Tomatow
      span Triple M
      span Two Can
      span Uplink
      span Voost
      span xChenda
</template>

<script>
export default {
  title: 'Virtual Arcadia Lineup'
}
</script>

<style lang='sass' scoped>
.page
  display: flex
  flex-direction: column
  align-items: center
  .lineup
    width: 562px
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
