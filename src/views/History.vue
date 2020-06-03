<template>
    <div id="history">
        <b-container>
            <b-row>
            <b-col md="4"></b-col>
            <b-col md="4" class="text-center"><h2>歷史紀錄</h2></b-col>
            <b-col md="4"><b-button v-if="historys.length > 0" variant="link text-danger" id="show-btn" @click="showModal"><font-awesome-icon  size="lg" :icon = "['fas', 'trash']"></font-awesome-icon></b-button></b-col>
            </b-row>
    <b-table-simple striped hover class="mt-3 w-100 mx-auto">
      <b-thead>
        <b-tr>
          <b-th>時間</b-th>
          <b-th>事項</b-th>
          <b-th>刪除</b-th>
        </b-tr>
      </b-thead>
        <b-tr v-if="historys.length === 0">
            <b-td class="text-center" colspan="3">沒有資料</b-td>
            </b-tr>
            <b-tr v-for = "(history, index) in resHistorys" :key="index">
            <b-td>{{ history.time }}</b-td>
            <b-td>{{ history.name }}</b-td>
            <b-td>
                <b-btn variant="link" @click="delhistory(index)" class="text-danger">
                <font-awesome-icon :icon = "['fas', 'times']"></font-awesome-icon>
                </b-btn>
            </b-td>
            </b-tr>
        </b-table-simple>
            <b-modal ref="my-modal" hide-footer hide-header>
            <div class="d-block text-center">
                <h3 class="my-3">是否刪除全部</h3>
                <b-button class="mr-3 my-3" @click="hideModal">NO</b-button>
                <b-button variant="danger" @click="delHistorys">YES</b-button>
            </div>
            </b-modal>
        </b-container>
    </div>
</template>

<script>
export default {
  data () {
    return {
      fields: [
        {
          key: 'time',
          label: '時間'
        }, // 時間
        {
          key: 'name',
          label: '事項'
        }, // 事項
        {
          key: 'delete',
          label: '刪除'
        } // 事項
      ]
    }
  },
  computed: {
    historys () {
      return this.$store.getters.historys
    },
    resHistorys () {
      return this.historys.slice(0).reverse()
    }
  },
  methods: {
    delHistorys () {
      this.$store.commit('delHistorys')
      this.$refs['my-modal'].hide()
    },
    showModal () {
      this.$refs['my-modal'].show()
    },
    hideModal () {
      this.$refs['my-modal'].hide()
    },
    delhistory (index) {
      this.$store.commit('delHistory', index)
    }
  }
}
</script>
