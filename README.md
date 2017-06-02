# message-board

This README outlines the details of collaborating on this Ember application.
A short introduction of this app could easily go here.

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
  |3|User can answer questions.|author:"Me", answer:"Code is like the sea..."|"Me says, Code is like the sea..."|

3. Integration
  * Initial route index
  * Template for new-question component
  * Template for question-list component
  * Html page for question
  * Template for question-tile component
  * Template for new-answer component
  * Template for answer-list component

## Prerequisites

You will need the following things properly installed on your computer.

* [Git](https://git-scm.com/)
* [Node.js](https://nodejs.org/) (with NPM)
* [Ember CLI](https://ember-cli.com/)
* [PhantomJS](http://phantomjs.org/)

## Installation

* `git clone <repository-url>` this repository
* `cd message-board`
* `npm install`

## Running / Development

* `ember serve`
* Visit your app at [http://localhost:4200](http://localhost:4200).

### Code Generators

Make use of the many generators for code, try `ember help generate` for more details

### Running Tests

* `ember test`
* `ember test --server`

### Building

* `ember build` (development)
* `ember build --environment production` (production)

### Deploying

Specify what it takes to deploy your app.

## Further Reading / Useful Links

* [ember.js](http://emberjs.com/)
* [ember-cli](https://ember-cli.com/)
* Development Browser Extensions
  * [ember inspector for chrome](https://chrome.google.com/webstore/detail/ember-inspector/bmdblncegkenkacieihfhpjfppoconhi)
  * [ember inspector for firefox](https://addons.mozilla.org/en-US/firefox/addon/ember-inspector/)
