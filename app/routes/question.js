import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.store.findRecord('question', params.question_id);
  },
  actions: {
    update(question, params) {
      Object.keys(params).forEach(function(key) {
        if(params[key]!==undefined && params[key]!=="") {
          question.set(key,params[key]);
        }
      });
      question.save();
      this.transitionTo('index');
    },

    delete(question) {
      question.destroyRecord();
      this.transitionTo('index');
    },

    saveAnswer(params) {

      console.log('saving answer');
      var newAnswer = this.store.createRecord('answer', params);
      var question = params.question;
      console.log(question.content)
      question.get('answers').addObject(newAnswer);
      newAnswer.save().then(function() {
        return question.save();
      });
      this.transitionTo('question');
    }
  }
});
