<template>
  <div id="List">
    <b-container>
    <div class="input-group w-75 mx-auto mt-5">
      <b-form-input :class="borderColor" v-model="newtodo" @keydown.enter="addTodo" placeholder="Enter your List"></b-form-input>
      <b-btn class="text-dark" @click="addTodo"> <font-awesome-icon :icon = "['fas', 'plus']"></font-awesome-icon></b-btn>
    </div>
    <b-table-simple striped hover class="mt-5 w-100 mx-auto">
      <b-thead>
        <b-tr>
          <b-th>時間</b-th>
          <b-th>事項</b-th>
          <b-th>動作</b-th>
        </b-tr>
      </b-thead>
      <draggable v-model="todos" tag="tbody" v-bind="dragOption">
        <b-tr v-if="todos.length === 0">
          <b-td class="text-center" colspan="3">沒有資料</b-td>
        </b-tr>
        <b-tr v-for = "(todo, index) of todos" :key="index">
          <b-td>{{ todo.time }}</b-td>
          <b-td>
            <div class="d-flex flex-wrap justify-content-center">
            <b-form-input v-model="todo.model" class="w-75" @keydown.esc="cancelTodo(todo)" v-if="todo.edit" @keydown.enter="saveTodo(todo)"></b-form-input>
              <div>
              <b-btn variant="link" @click="cancelTodo(todo)" v-if="todo.edit" class="text-danger">
                <font-awesome-icon :icon = "['fas', 'undo']"></font-awesome-icon>
              </b-btn>
              <b-btn variant="link" @click="saveTodo(todo)" v-if="todo.edit" class="text-success">
                <font-awesome-icon :icon = "['fas', 'save']"></font-awesome-icon>
              </b-btn>
              </div>
            </div>
            <span  v-if="!todo.edit"> {{ todo.name }} </span>
          </b-td>
          <b-td>
            <b-btn variant="link" @click="editTodo(todo)" class="text-primary">
              <font-awesome-icon :icon = "['fas', 'pen']"></font-awesome-icon>
            </b-btn>
            <b-btn variant="link" @click="delTodo(index)" class="text-danger">
              <font-awesome-icon :icon = "['fas', 'times']"></font-awesome-icon>
            </b-btn>
          </b-td>
        </b-tr>
      </draggable>
    </b-table-simple>
    </b-container>
  </div>
</template>

<script>
export default {
  data () {
    return {
      newtodo: '',
      dragOption: {
        animation: 200
      }
    }
  },
  methods: {
    addTodo () {
      this.$store.commit('addTodo', this.newtodo.trim())
      this.newtodo = ''
    },
    delTodo (index) {
      this.$store.commit('delTodo', index)
    },
    editTodo (todo) {
      this.$store.commit('editTodo', todo)
    },
    cancelTodo (todo) {
      this.$store.commit('cancelTodo', todo)
    },
    saveTodo (todo) {
      this.$store.commit('saveTodo', todo)
    }
  },
  computed: {
    todos: {
      get () {
        return this.$store.getters.todos
      },
      set (value) {
        this.$store.commit('dragTodo', value)
      }
    },
    borderColor () {
      const length = this.newtodo.trim().length
      return (length === 0) ? 'border-dark' : (length >= 3 && length < 15) ? 'is-valid' : 'is-invalid'
    }
  }
}
</script>
