 new Vue({
      el: '#app',
      data: {
        message: '1',
        ee:'zzz'
      },
      methods: {
        handleClick() {
          this.message = '123'; // 更新数据，Vue 会自动更新视图
        }
      }
    });