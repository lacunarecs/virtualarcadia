<template lang='pug'>
.page
  p.tz-text {{ timezone }}
  .set-times
    .col
      h1 FRI
      SetTime(artist='Fytch' time='12:00 AM')
      SetTime(artist='Fytch' time='12:00 AM')
      SetTime(artist='Fytch' time='12:00 AM')
      SetTime(artist='Fytch' time='12:00 AM')
    .col
      h1 SAT
      SetTime(artist='Fytch' time='12:00 AM')
    .col
      h1 SUN
      SetTime(artist='Fytch' time='12:00 AM')
</template>

<script>
import SetTime from '@/components/SetTime.vue'

import moment from 'moment-timezone'
import Dropdown from 'vue-simple-search-dropdown'

export default {
  title: 'Virtual Arcadia Set Times',
  data: function () {
    return {
      timezone: `${moment.tz.guess(true)} (${moment.tz.zone(moment.tz.guess(true)).abbr(1590098400000)})`,
      timezones: moment.tz.names().map((tzName, i) => {
        return {
          id: i,
          name: tzName
        }
      })
    }
  },
  methods: {
    selectTimezone (timezone) {
      console.log(timezone)
    }
  },
  components: {
    SetTime,
    Dropdown
  }
}
</script>

<style lang='sass' scoped>
.tz-text
  margin-top: 0px
.set-times
  display: flex
  margin: auto
  max-width: 800px
  justify-content: space-between
  .col
    width: 200px
    h1
      margin-top: 0px
</style>
