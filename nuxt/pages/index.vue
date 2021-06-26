<template>
  <v-container>
    <v-row justify="center" align="center">
      <v-col cols="4" sm="8" md="6">
        <AddTasks class="text-field"></AddTasks>
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
          <v-date-picker v-model="date" no-title scrollable>
            <v-spacer></v-spacer>
            <v-btn text color="primary" @click="menu = false">Cancel</v-btn>
            <v-btn text color="primary" @click="$refs.menu.save(date)">
              OK
            </v-btn>
          </v-date-picker>
        </v-menu>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <v-card v-for="task in tasks" :key="task.id" class="task-card">
          <v-card-title>{{ task.detail }} </v-card-title>
          <v-card-subtitle>締め切り {{ task.deadline }}</v-card-subtitle>
          <v-card-actions>
            <v-btn color="indigo"> 完了 </v-btn>
          </v-card-actions>
        </v-card>
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
  },
}
</script>

<style scoped>
.text-field {
  margin-top: 30px;
}
.task-card {
  margin: 10px;
}
</style>
