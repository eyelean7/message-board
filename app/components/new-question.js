import Ember from 'ember';

export default Ember.Component.extend({

  addQuestion: false,

  actions: {
    questionFormShow() {
      this.set('addQuestion', true);
    },

    saveQuestion() {
      console.log('you are getting the content')
      var params = {
        author: this.get('author'),
        content: this.get('content'),
        note: this.get('note'),
      };
      this.sendAction('saveQuestion', params)
      this.set('addQuestion', false);
    }
  }
});
