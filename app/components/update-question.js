import Ember from 'ember';

export default Ember.Component.extend({

  updateQuestion: false,

  actions: {
    updateQuestionFormShow() {
      this.set('updateQuestion', true);
    },

    update(question) {
      var params = {
        author: this.get('author'),
        content: this.get('content'),
        note: this.get('note'),
      };
      this.set('updateQuestion', false);
      this.sendAction('update', question, params)
    }
  }
});
