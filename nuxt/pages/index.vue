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
      <v-col cols="4">
        <v-btn elevation="2">登録</v-btn>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <ul>
          <li v-for="task in tasks" :key="task.id">
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
    }
  },
  methods: {
    taskAdd() {
      tasks.push(this.taskName)
    },

  },
}
</script>

<style scoped>
.text-field {
  margin-top: 30px;
}
</style>
