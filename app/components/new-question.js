import Ember from 'ember';

export default Ember.Component.extend({
  addQuestion: false,

  actions: {
    questionFormShow() {
      this.set('addQuestion', true);
    },

    saveQuestion() {
      var params = {
        author: this.get('author'),
        question: this.get('question'),
        note: this.get('note'),
      };
      this.set('addQuestion', false);
      this.sendAction('saveQuestion', params)
    }
  }
});