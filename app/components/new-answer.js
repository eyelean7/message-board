import Ember from 'ember';

export default Ember.Component.extend({

  addAnswer: false,

  actions: {
    answerFormShow() {
      this.set('addAnswer', true);
    },

    saveAnswer() {
      var params = {
        author: this.get('author'),
        content: this.get('content'),
        question: this.get('question'),
      };
      this.sendAction('saveAnswer', params)
      this.set('addAnswer', false);
    }
  }
});
