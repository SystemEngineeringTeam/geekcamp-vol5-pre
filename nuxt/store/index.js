import Vuex from 'vuex'
import axios from 'axios'

const createStore = () => {
  return new Vuex.Store({
    state: {
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
    },
    actions: {
      getTask(context) {
        this.$axios
          .get('/tasks')
          .then((res) => {
            console.log(res.data)
            context.state.tasks = res.data
          })
          .catch((er) => {
            console.log('error')
            console.log(er)
          })
      },
      postTask(context, task) {
        axios
          .post('/task', {
            detail: task.detail,
            deadline: task.deadline,
          })
          .then((res) => {
            console.log(res.data)
            console.log(context.state.tasks)
          })
      },
      putTask(context, task) {
        this.$axios
          .put('http://localhost:8083/task', {
            taskID: context.taskID,
          })
          .then((res) => {
            console.log(res)
            console.log('Ok')
          })
          .catch((er) => {
            console.log('error')
            console.log(er)
          })
      },
    },
  })
}
export default createStore
