import Vuex from 'vuex'

const createStore = () => {
  return new Vuex.Store({
    state: () => ({
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
    }),
    actions: () => ({
      getTask(context) {
        this.$axios
          .get('http://localhost:8083/task')
          .then((res) => {
            console.log(res)
            res.forEach((element) => {
              context.tasks.push(element)
            })
          })
          .catch((er) => {
            console.log('error')
            console.log(er)
          })
      },
      postTask(context, task) {
        axios
          .post('http://localhost:8083/task', {
            detail: task.detail,
            deadline: task.deadline,
          })
          .then((res) => {
            console.log(res.data)
            console.log(context.state.tasks)
          })
      },
    }),
  })
}
export default createStore
