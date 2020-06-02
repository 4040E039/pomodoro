<template>
    <div id = "settings">
      <b-form-group label="自訂你的鈴聲時間">
        <b-form-radio-group
          v-model="selected"
          :options="options"
          class="mb-2"
          value-field="opItem"
          text-field="name">
        </b-form-radio-group>
      </b-form-group>
        {{ radioChange () }}
        <b-table striped hover :items="items" :fields="fields" @row-clicked = "selectAlarm">
            <template  v-slot:cell(preview) = "data">
                <audio class="w-100" controls :src="'./alarms/'+data.item.file"></audio>
            </template>
            <template v-slot:cell(select) = "data">
                <font-awesome-icon v-if = "data.item.file === alarm" :icon = "['fas', 'check']"></font-awesome-icon>
            </template>
        </b-table>
    </div>
</template>

<script>
export default {
  data () {
    return {
      selected: 0,
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
    }
  },
  mounted () {
    this.selected = this.alarmSec
  }
}
</script>
