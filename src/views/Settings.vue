<template>
    <div id = "settings">
      <b-container class="mb-3">
      <b-row>
        <b-col md="6" sm="12" class="p-0">
          <b-form-group class="w-100" label="自訂你的鈴聲時間">
            <b-form-radio-group
              v-model="selected"
              :options="options"
              value-field="opItem"
              text-field="name">
            </b-form-radio-group>
          </b-form-group>
        </b-col>
        <b-col md="6" sm="12" class="p-0">
        <div class="input-group w-75 mx-auto ">
          <input variant="secondary" class="w-75 ml-3" v-model="Newthing"/>
          <b-btn squared variant="outline-dark" @click="savesaysomthing"><font-awesome-icon :icon = "['fas', 'save']"></font-awesome-icon></b-btn>
        </div>
        </b-col>
      </b-row>
      </b-container>
      {{ radioChange () }}
      <b-container class="p-0">
        <b-table striped hover :items="items" :fields="fields" @row-clicked = "selectAlarm">
            <template  v-slot:cell(preview) = "data">
                <audio class="w-100" controls :src="'./alarms/'+data.item.file"></audio>
            </template>
            <template v-slot:cell(select) = "data">
                <font-awesome-icon v-if = "data.item.file === alarm" :icon = "['fas', 'check']"></font-awesome-icon>
            </template>
        </b-table>
        </b-container>
    </div>
</template>

<script>
export default {
  data () {
    return {
      selected: 0,
      Newthing: '',
      options: [
        { opItem: 2, name: '2s' },
        { opItem: 3, name: '3s' },
        { opItem: 4, name: '4s' },
        { opItem: 5, name: '5s' }
      ],
      items: [
        {
          name: '鬧鐘1',
          file: 'alarm1.mp3'
        },
        {
          name: '鬧鐘2',
          file: 'alarm2.mp3'
        },
        {
          name: '鬧鐘3',
          file: 'alarm3.mp3'
        },
        {
          name: '鬧鐘4',
          file: ''
        }
      ],
      fields: [
        {
          key: 'name',
          label: '名稱'
        }, // 鈴聲名稱
        {
          key: 'preview',
          label: '預覽'
        }, // 預覽鈴聲
        {
          key: 'select',
          label: '選擇'
        } // 選擇到的鈴聲打勾
      ]
    }
  },
  computed: {
    alarm () {
      return this.$store.getters.alarm
    },
    alarmSec () {
      return this.$store.getters.alarmSec
    },
    saysomething () {
      return this.$store.getters.saysomething
    }
  },
  methods: {
    selectAlarm (item) {
      this.$store.commit('selectAlarm', item.file)
    },
    radioChange () {
      if (this.selected !== 0 && this.alarmSec !== this.selected) {
        this.$store.commit('radioChange', this.selected)
      }
    },
    savesaysomthing (Newthing) {
      if (this.Newthing !== '' && this.saysomething !== this.Newthing) {
        this.$store.commit('savesaysomthing', this.Newthing.trim())
      }
    }
  },
  mounted () {
    this.selected = this.alarmSec
    this.Newthing = this.saysomething
  }
}
</script>
