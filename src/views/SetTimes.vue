<template lang='pug'>
.page
  .tz
    //- p {{ tz.label }}
    p TO BE ANNOUNCED SHORTLY
  //-   vSelect.tz-select(
  //-     v-model='tz'
  //-     :options='timezones'
  //-     :clearable='false'
  //-     ref='select'
  //-   )
  //-     template(#open-indicator='{ attributes }')
  //-       span(v-bind='attributes')
  //-         Edit2Icon.edit-icon(size='1x' @click='console.log($refs.select)')
  //- .set-times
  //-   .col(v-for='day in setTimesByDay')
  //-     h1 {{ day.weekday }}
  //-     template(v-for='setTime in day.setTimes')
  //-       SetTime(:artist='setTime.artist' :time='setTime.time')
</template>

<script>
import SetTime from '@/components/SetTime.vue'

import moment from 'moment-timezone'
import vSelect from 'vue-select'
import 'vue-select/dist/vue-select.css'
import { Edit2Icon } from 'vue-feather-icons'

export default {
  title: 'Virtual Arcadia Set Times',
  components: {
    SetTime,
    vSelect,
    Edit2Icon
  },
  data: function () {
    const tzGuess = moment.tz.guess(true)
    return {
      tz: {
        name: tzGuess,
        label: `${tzGuess} (${moment.tz.zone(tzGuess).abbr(1590098400000)})`
      },
      timezones: moment.tz.names().map(tz => {
        const tzText = `${tz} (${moment.tz.zone(tz).abbr(1590098400000)})`
        return {
          name: tz,
          label: tzText
        }
      })
    }
  },
  computed: {
    setTimesByDay () {
      const utcSetTimes = [
        // time must be sorted from earliest to latest
        { artist: 'Omri', time: 'May 22 8:00' },
        { artist: 'Debris', time: 'May 22 9:00' },
        { artist: 'RudeLies', time: 'May 22 10:00' },
        { artist: 'Tomatow', time: 'May 22 11:00' },
        { artist: 'Bad Decisions', time: 'May 22 12:00' },
        { artist: 'Arc North', time: 'May 22 13:00' },
        { artist: 'Fytch', time: 'May 22 14:00' },
        { artist: 'NIVIRO', time: 'May 22 15:00' },
        { artist: 'Galvanic', time: 'May 22 16:00' },
        { artist: 'LEVITATE', time: 'May 22 17:00' },
        { artist: 'Miles Away', time: 'May 22 18:00' },
        { artist: 'JFARR', time: 'May 22 19:00' },
        { artist: 'Charles B', time: 'May 22 20:00' },
        { artist: 'Anikdote', time: 'May 22 21:00' },
        { artist: 'Annie Sollange', time: 'May 23 8:00' },
        { artist: 'Debris', time: 'May 23 9:00' },
        { artist: 'Egzod', time: 'May 23 10:00' },
        { artist: 'BEAUZ', time: 'May 23 11:00' },
        { artist: 'Robby East', time: 'May 23 12:00' },
        { artist: 'Jordan Jay', time: 'May 23 13:00' },
        { artist: 'LZRD', time: 'May 23 14:00' },
        { artist: 'Biometrix', time: 'May 23 15:00' },
        { artist: 'IZECOLD', time: 'May 23 16:00' },
        { artist: 'MAHALO', time: 'May 23 17:00' },
        { artist: 'Justin Mylo', time: 'May 23 18:00' },
        { artist: 'Snareskin', time: 'May 23 19:00' },
        { artist: 'Jinco', time: 'May 23 20:00' },
        { artist: 'Ehallz', time: 'May 23 21:00' },
        { artist: 'Beatcore', time: 'May 24 8:00' },
        { artist: 'Fixl', time: 'May 24 9:00' },
        { artist: 'Paul Flint', time: 'May 24 10:00' },
        { artist: 'Two Can', time: 'May 24 11:00' },
        { artist: 'Rosenfeld', time: 'May 24 12:00' },
        { artist: 'Steff Da Campo', time: 'May 24 13:00' },
        { artist: 'Uplink', time: 'May 24 14:00' },
        { artist: 'Triple M', time: 'May 24 15:00' },
        { artist: 'N3wport', time: 'May 24 16:00' },
        { artist: 'CMC$', time: 'May 24 17:00' },
        { artist: 'Burak Yeter', time: 'May 24 18:00' },
        { artist: 'Robert Falcon', time: 'May 24 19:00' },
        { artist: 'xChenda', time: 'May 24 20:00' },
        { artist: 'EQRIC', time: 'May 24 21:00' },
        { artist: 'Kastra', time: 'May 24 22:00' }
      ]
      const setTimesByDay = []
      for (const utcSetTime of utcSetTimes) {
        const utcTime = moment.utc(utcSetTime.time, 'MMM D HH:mm').year(2020)
        const time = utcTime.tz(this.tz.name)
        const ymd = time.format('YYYY-MM-DD')
        const latestDay = setTimesByDay[setTimesByDay.length - 1]
        if (latestDay && latestDay.ymd === ymd) {
          latestDay.setTimes.push({
            artist: utcSetTime.artist,
            time: moment(time).format('LT')
          })
        } else {
          setTimesByDay.push({
            ymd,
            weekday: time.format('ddd'),
            setTimes: [
              { artist: utcSetTime.artist, time: moment(time).format('LT') }
            ]
          })
        }
      }
      return setTimesByDay
    }
  }
}
</script>

<style lang='sass'>
.tz-select
  // width: 350px
  font-weight: 600
  .vs__dropdown-toggle
    cursor: pointer
    border: none
    .vs__search
      font-weight: 600
      color: #ffffff
    .vs__selected
      color: #ffffff
    .vs1__combobox
      border: none
    .vs__open-indicator
      display: flex
      .edit-icon
        display: block
  &:not(.vs--open)
    .vs__search
      padding-left: 0px
      padding-right: 0px
      margin-left: 0px
      margin-right: 0px
      border: none
  &.vs--open
    width: 350px
    .vs__dropdown-toggle
      cursor: text
    .vs__open-indicator
      transform: none
</style>
<style lang='sass' scoped>
.tz
  display: flex
  align-items: center
  justify-content: center
.set-times
  display: grid
  grid-template-columns: repeat(auto-fit, minmax(220px, auto))
  justify-content: space-evenly
  grid-gap: 20px
  margin: auto
  max-width: 1100px
  padding: 0px 20px
  .col
    width: 100%
    // max-width: 10%
    h1
      margin-top: 0px
</style>
