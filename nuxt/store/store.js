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
      getTask(content) {
        this.$axios
          .get('http://localhost:8083/task')
          .then((res) => {
            console.log(res)
            res.forEach((element) => {
              content.tasks.push(element)
            })
          })
          .catch((er) => {
            console.log('error')
            console.log(er)
          })
      },
    }),
  })
}
export default createStore
