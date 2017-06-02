# Message Board

Message Board allows users to ask and answer questions.

## Project Plan

1. Configuration/dependencies
  * ember
  * ember-bootstrap
  * emberfire
  * Full list in package.json file

2. Specs

  |Spec|Description|Input|Output|
  |---|---|---|---|
  |1|User can create a question|author:"User", question:"What is code?", Notes:"I just don't get it."|"User asks, What is code? I just don't get it."|
  |2|Home page displays questions|"What is code?" on input form|"User asks, What is code?" on home page|
  |3|User can answer questions.|author:"Gary", answer:"Code is like the sea..."|"Gary says, Code is like the sea..."|

3. Integration
  * Initial route index
  * Template for new-question component
  * Template for question-list component
  * Html page for question
  * Template for new-answer component
  * Template for update-question component

## Known Bugs

* No update or destroy functionality for answers
* No validation to create questions or answers

## Prerequisites

You will need the following things properly installed on your computer.

* [Git](https://git-scm.com/)
* [Node.js](https://nodejs.org/) (with NPM)
* [Ember CLI](https://ember-cli.com/)
* [PhantomJS](http://phantomjs.org/)

## Installation

* `git clone https://github.com/eyelean7/message-board`
* `cd message-board`
* `npm install`

## Running / Development

* `ember serve`
* Visit the app at [http://localhost:4200](http://localhost:4200).

### Running Tests

* `ember test`
* `ember test --server`

### Building

* `ember build` (development)
* `ember build --environment production` (production)

## Further Reading / Useful Links

* [ember.js](http://emberjs.com/)
* [ember-cli](https://ember-cli.com/)
* Development Browser Extensions
  * [ember inspector for chrome](https://chrome.google.com/webstore/detail/ember-inspector/bmdblncegkenkacieihfhpjfppoconhi)
  * [ember inspector for firefox](https://addons.mozilla.org/en-US/firefox/addon/ember-inspector/)
