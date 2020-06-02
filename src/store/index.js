import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'
import moment from 'moment'
Vue.use(Vuex)
const timeleft = parseInt(process.env.VUE_APP_TIMELEFT)
const timeleftBreak = parseInt(process.env.VUE_APP_TIMELEFT_BREAK)
const getTimes = moment().format('YYYY年MM月DD日')
export default new Vuex.Store({
  state: {
    todos: [], // 代辦有哪些事情要做
    historys: [],
    timeleft, // 倒數計時 // 如果key值跟上面ㄉ變數名稱一樣可以這樣簡寫
    alarm: 'alarm1.mp3', // 鬧鐘名稱
    current: '', // 目前在進行(倒數)的東西
    next: '',
    isBreak: false, // 是否休息中
    alarmSec: 2
  },
  getters: {
    alarm (state) {
      return state.alarm
    },
    todos (state) {
      return state.todos
    },
    timeleft (state) {
      return state.timeleft
    },
    current (state) {
      return state.current
    },
    next (state) {
      return state.next
    },
    isBreak (state) {
      return state.isBreak
    },
    historys (state) {
      return state.historys
    },
    alarmSec (state) {
      return state.alarmSec
    }
  },
  mutations: {
    selectAlarm (state, data) {
      state.alarm = data
    },
    addTodo (state, data) {
      if (data.length <= 2) alert('低於2個字')
      else if (data.length >= 15) alert('超過15個字')
      else state.todos.push({ name: data, edit: false, model: data, time: getTimes })
    }, // 改寫vuex資料
    dragTodo (state, data) {
      state.todos = data // 同步寫入vuex
    },
    delTodo (state, data) {
      state.todos.splice(data, 1)
    },
    editTodo (state, data) {
      data.edit = true
    },
    cancelTodo (state, data) {
      data.edit = false
      data.model = data.name
    },
    saveTodo (state, data) {
      if (data.model.length <= 2) alert('低於2個字')
      else if (data.model.length >= 15) alert('超過15個字')
      else {
        data.name = data.model
        data.edit = false
      }
    },
    start (state) {
      if (state.isBreak) {
        state.current = '休息一下'
      } else if (!state.isBreak) {
        state.current = state.todos[0].name
        state.historys.push(state.todos[0])
        state.todos.splice(0, 1)
      }
    },
    nextTodo (state) {
      if (state.todos.length > 0) state.next = state.todos[0].name
      else state.next = '沒有下一筆'
    },
    countdown (state) {
      state.timeleft--
    },
    finish (state) {
      if (state.todos.length > 0) {
        state.isBreak = !state.isBreak
      }
      state.current = ''
      state.timeleft = state.isBreak ? timeleftBreak : timeleft
    },
    radioChange (state, data) {
      state.alarmSec = data
    },
    delHistorys (state) {
      if (state.historys.length > 0) state.historys = []
    },
    delHistory (state, data) {
      state.historys.splice(state.historys.length - data - 1, 1)
    }
  },
  actions: {
  },
  modules: {
  },
  plugins: [createPersistedState()]
})
