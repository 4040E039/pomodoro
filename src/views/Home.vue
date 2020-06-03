<template>
  <div id="home">
    <h3>{{ getTimeUp() }} {{ getTime }}</h3>
    <div class="text-light mt-3 py-5 mx-auto DisplayArea">
      <h1>{{ currentText }}</h1>
      <h2>{{ timetext }}</h2>
    <b-btn  @click="start" variant="link" class="text-danger mt-3"  v-if="status != 1" >
      <font-awesome-icon size="lg" :icon="['fas','play']"></font-awesome-icon>
    </b-btn>

    <b-btn @click="pause" variant="link"  class="text-danger mt-3"  v-if="status == 1" >
      <font-awesome-icon size="lg" :icon="['fas','pause']"></font-awesome-icon>
    </b-btn>

    <b-btn @click="finish(true)" variant="link" class="text-danger mt-3" v-if="current.length > 0 || todos.length > 0">
      <font-awesome-icon size="lg" :icon="['fas','step-forward']"></font-awesome-icon>
    </b-btn>

    <b-btn v-if="!sound" variant="link" @click="muted" class="text-danger mt-3">
      <font-awesome-icon size="lg" :icon="['fas','bell']"></font-awesome-icon>
    </b-btn>
    <b-btn v-if="sound" variant="link" @click="Nomuted" class="text-danger mt-3">
      <font-awesome-icon size="lg" :icon="['fa','bell-slash']"></font-awesome-icon>
    </b-btn>
    <div class="loaders">
    <vue-loaders v-if="status == 1" name="pacman" color="white" scale="1.5"></vue-loaders>
    </div>
    <span>{{ saysomething }}</span>
    </div>
    {{nextTodo ()}}
    <div class="next py-3 mx-auto">
          <h3 class="m-0">NEXT : {{ next }}</h3>
    </div>
    <b-modal ref="my-modal" ok-only title="恭喜你">
      <div class="d-block text-center m-5">
        <h3>已完成所有事項</h3>
      </div>
    </b-modal>

  </div>
</template>

<script>
import moment from 'moment'
const audio = new Audio()
// @ is an alias to /src
export default {
  name: 'Home',
  data () {
    return {
      // 0 = 停止 1 = 撥放 // 2 = 暫停
      status: 0,
      timer: 0,
      sound: false,
      getTime: moment().format('MM月DD日(A)' + 'h點mm分ss秒')
    }
  },
  computed: {
    currentText () {
      return this.current.length > 0 ? this.current : this.todos.length > 0 ? '點擊開始' : '沒有事項'
    },
    timetext () {
      const m = Math.floor(this.timeleft / 60)
      const s = Math.floor(this.timeleft % 60)
      return `${m} : ${s}`
    },
    alarm () {
      return this.$store.getters.alarm
    },
    timeleft () {
      return this.$store.getters.timeleft
    },
    current () {
      return this.$store.getters.current
    },
    next () {
      return this.$store.getters.next
    },
    todos () {
      return this.$store.getters.todos
    },
    alarmSec () {
      return this.$store.getters.alarmSec
    },
    saysomething () {
      return this.$store.getters.saysomething
    }
  },
  methods: {
    start () {
      if (this.status === 2) {
        // 暫停後繼續
        this.status = 1
        this.timer = setInterval(() => {
          if (this.timeleft <= 0) {
            this.finish(false)
          } else {
            this.$store.commit('countdown')
          }
        }, 1000)
      } else {
        // 開始新倒數
        if (this.todos.length > 0) {
          this.$store.commit('start')
          this.status = 1
          this.timer = setInterval(() => {
            console.log(this.timeleft)
            this.$store.commit('countdown')
            if (this.timeleft < 0) {
              this.finish(false)
            }
          }, 1000)
        } else {
          alert('沒有事項')
        }
      }
    },
    finish (skip) {
      clearInterval(this.timer)
      this.status = 0
      this.$store.commit('finish')

      if (!skip) {
        audio.src = './alarms/' + this.alarm
        audio.play()
        setTimeout(() => {
          audio.pause()
        }, this.alarmSec * 1000)
      }
      if (this.todos.length > 0) this.start()
      else this.$refs['my-modal'].show()
    },
    pause () {
      clearInterval(this.timer)
      this.status = 2
    },
    muted () {
      audio.muted = true
      this.sound = true
    },
    Nomuted () {
      audio.muted = false
      this.sound = false
    },
    getTimeUp () {
      setInterval(() => {
        this.getTime = moment().format('MM月DD日(A)' + 'h點mm分ss秒')
        // console.log(this.getTime)
      }, 800)
    },
    nextTodo () {
      this.$store.commit('nextTodo')
    }
  }
}
</script>
