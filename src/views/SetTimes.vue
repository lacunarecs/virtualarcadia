<template lang='pug'>
.page
  .tz
    //- p {{ tz.label }}
    //- p TO BE ANNOUNCED SHORTLY
    vSelect.tz-select(
      v-model='tz'
      :options='timezones'
      :clearable='false'
      ref='select'
    )
      template(#open-indicator='{ attributes }')
        span(v-bind='attributes')
          Edit2Icon.edit-icon(size='1x' @click='console.log($refs.select)')
  .set-times
    .col(v-for='day in setTimesByDay')
      h1 {{ day.weekdayStart }}
      template(v-for='setTime in day.setTimes')
        SetTime(:artist='setTime.artist' :time='setTime.time')
</template>

<script>
/* eslint-disable no-multi-spaces */
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
        const name = tz.replace('_', ' ')
        const tzText = `${name} (${moment.tz.zone(tz).abbr(1590098400000)})`
        return {
          name: tz,
          label: tzText
        }
      })
    }
  },
  computed: {
    setTimesByDay () {
      const cestSetTimesByDay = [
        // time must be sorted from earliest to latest
        {
          setTimes: [
            { artist: 'Robert Falcon',  time: 'May 22 8:00 PM' },
            { artist: 'Todd Helder',    time: 'May 22 9:00 PM' },
            { artist: 'Charles B',      time: 'May 22 9:30 PM' },
            { artist: 'Biometrix',      time: 'May 22 9:55 PM' },
            { artist: 'N3wport',        time: 'May 22 10:25 PM' },
            { artist: 'Voost',          time: 'May 22 11:00 PM' },
            { artist: 'Steff Da Campo', time: 'May 23 12:00 AM' },
            { artist: 'Paul Flint',     time: 'May 23 1:00 AM' },
            { artist: 'Beatcore',       time: 'May 23 1:30 AM' },
            { artist: 'EQRIC',          time: 'May 23 2:30 AM' },
            { artist: 'Omri',           time: 'May 23 3:00 AM' },
            { artist: 'Fox Stevenson',  time: 'May 23 3:30 AM' },
            { artist: 'Lizzy Jane',     time: 'May 23 4:30 AM' },
            { artist: 'Two Can',        time: 'May 23 5:30 AM' },
            { artist: 'Teminite',       time: 'May 23 6:00 AM' },
            { artist: 'Kastra',         time: 'May 23 6:30 AM' },
            { artist: 'LEVITATE',       time: 'May 23 7:20 AM' },
            { artist: 'xChenda',        time: 'May 23 8:20 AM' }
          ]
        },
        {
          setTimes: [
            { artist: 'Robby East',     time: 'May 23 8:00 PM' },
            { artist: 'BEAUZ',          time: 'May 23 9:00 PM' },
            { artist: 'Snareskin',      time: 'May 23 9:50 PM' },
            { artist: 'Arc North',      time: 'May 23 10:00 PM' },
            { artist: 'RudeLies',       time: 'May 23 10:30 PM' },
            { artist: 'Egzod',          time: 'May 23 11:00 PM' },
            { artist: 'NIVIRO',         time: 'May 24 12:00 AM' },
            { artist: 'The Him',        time: 'May 24 1:00 AM' },
            { artist: 'AXEN',           time: 'May 24 2:00 AM' },
            { artist: 'Justin Mylo',    time: 'May 24 2:30 AM' },
            { artist: 'Galvanic',       time: 'May 24 3:00 AM' },
            { artist: 'Mahalo',         time: 'May 24 3:30 AM' },
            { artist: 'Atlast',         time: 'May 24 4:00 AM' },
            { artist: 'TELYKast',       time: 'May 24 5:00 AM' },
            { artist: 'Holly',          time: 'May 24 6:00 AM' },
            { artist: 'Jinco',          time: 'May 24 6:55 AM' },
            { artist: 'Geoxor',         time: 'May 24 7:50 AM' },
            { artist: 'Synymata',       time: 'May 24 8:20 AM' }
          ]
        },
        {
          setTimes: [
            { artist: 'Miles Away',     time: 'May 24 7:30 PM' },
            { artist: 'JFARR',          time: 'May 24 8:00 PM' },
            { artist: 'Fytch',          time: 'May 24 8:30 PM' },
            { artist: 'Burak Yeter',    time: 'May 24 9:00 PM' },
            { artist: 'Anikdote',       time: 'May 24 10:00 PM' },
            { artist: 'Rosenfeld',      time: 'May 24 10:45 PM' },
            { artist: 'Annie Sollange', time: 'May 24 11:05 PM' },
            { artist: 'CMC$',           time: 'May 24 11:30 PM' },
            { artist: 'Uplink',         time: 'May 25 12:30 AM' },
            { artist: 'Loopers',        time: 'May 25 1:30 AM' },
            { artist: 'Ehallz',         time: 'May 25 2:30 AM' },
            { artist: 'Triple M',       time: 'May 25 3:00 AM' },
            { artist: 'Lammer',         time: 'May 25 3:30 AM' },
            { artist: 'Tomatow',        time: 'May 25 4:35 AM' },
            { artist: 'FIXL',           time: 'May 25 5:05 AM' },
            { artist: 'Papercut',       time: 'May 25 5:35 AM' },
            { artist: 'Nasko',          time: 'May 25 6:05 AM' },
            { artist: 'PLS&TY',         time: 'May 25 6:35 AM' }
          ]
        }
      ]
      const setTimesByDay = []
      for (const day of cestSetTimesByDay) {
        let firstSetTime = ''

        const todaysSetTimes = []
        for (const cestSetTime of day.setTimes) {
          const cestTime = moment(cestSetTime.time, 'MMM D HH:mm A').year(2020)
          const localTime = cestTime.tz(this.tz.name)
          if (firstSetTime === '') firstSetTime = localTime
          todaysSetTimes.push({
            artist: cestSetTime.artist,
            time: moment(localTime).format('LT')
          })
        }

        setTimesByDay.push({
          weekdayStart: firstSetTime.format('ddd'),
          setTimes: todaysSetTimes
        })
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
