const tasks = [
  { id: 1, date: '2021-06-10', detail: '組み込み課題', deadline: '2021-07-10' },
  { id: 2, date: '2021-06-12', detail: '映像処理課題', deadline: '2021-07-11' },
  {
    id: 3,
    date: '2021-06-14',
    detail: 'ゲームプログラミング',
    deadline: '2021-07-15'
  },
]
export default {
  get() {
    return [200, tasks]
  },
  post(d, a) {
    tasks.push({
      detail: d,
      deadline: a,
    })
    return [201]
  }
}