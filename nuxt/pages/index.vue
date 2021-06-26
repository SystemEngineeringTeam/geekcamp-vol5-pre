<template>
  <v-container>
    <v-row justify="center" align="center">
      <v-col cols="4" sm="8" md="6">
        <v-text-field
          v-model="taskName"
          class="text-field"
          solo
          label="やることを入力してね"
          clearable
        ></v-text-field>
      </v-col>
      <v-col cols="2">
        <v-menu
          ref="menu"
          v-model="menu"
          :close-on-content-click="false"
          :return-value.sync="date"
          transition="scale-transition"
          offset-y
          min-width="auto"
        >
          <template v-slot:activator="{ on, attrs }">
            <v-text-field
              v-model="date"
              label="締め切り日を入力してね"
              prepend-icon="mdi-calendar"
              readonly
              v-bind="attrs"
              v-on="on"
            ></v-text-field>
          </template>
          <v-date-picker v-model="date" no-title scrollable>
            <v-spacer></v-spacer>
            <v-btn text color="primary" @click="menu = false">Cancel</v-btn>
            <v-btn text color="primary" @click="$refs.menu.save(date)">
              OK
            </v-btn>
          </v-date-picker>
        </v-menu>
      </v-col>
      <v-col cols="4">
        <v-btn elevation="2" @click="taskAdd()">登録</v-btn>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <ul>
          <li v-for="task in $store.state.tasks" :key="task.id">
            {{ task.detail }}
          </li>
        </ul>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      taskName: '',
      tasks: [
        {
          id: 1,
          date: '2021-06-10',
          detail: '組み込み課題',
          deadline: '2021-07-10',
        },
        {
          id: 2,
          date: '2021-06-10',
          detail: '映像処理課題',
          deadline: '2021-07-10',
        },
      ],
      date: new Date(Date.now() - new Date().getTimezoneOffset() * 60000)
        .toISOString()
        .substr(0, 10),
      menu: false,
      modal: false,
      menu2: false,
    }
  },
  created() {
    this.get()
    console.log("create")
  },
  methods: {
    taskAdd() {
      // const today = new Date(
      //   Date.now() - new Date().getTimezoneOffset() * 60000
      // )
      //   .toISOString()
      //   .substr(0, 10)
      const task = { detail: this.taskName, deadline: this.date }
      this.$store.dispatch('postTask', task)
      // console.log(today)
      // console.log(this.date)
    },
    get() {
      this.$store.dispatch('getTask')
    },
  },
}
</script>

<style scoped>
.text-field {
  margin-top: 30px;
}
</style>
