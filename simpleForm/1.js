// js nya belum dipanggil

new Vue({
  el: '#app',
  data: {
    form: {
      formName: 'Tell Us About Yourself',
      userName: '',
      favoriteColor: 'Red',
      favoriteHamburger: '',
      favoriteHangout: [],
      workHours: 0
    },
    showSubmitFeedback: false
  },
  methods: {
    fakeSubmit(){
      this.showSubmitFeedback = true;
      setTimeout(() => {
        this.showSubmitFeedback = false;
      }, 3000);
    }
  }
});
