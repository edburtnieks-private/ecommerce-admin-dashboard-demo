# Ecommerce admin dashboard demo

Fully responsive dashboard example written with React, TypeScript using SASS and CSS Modules.

## About this demo and process

The idea came from [this post](https://techcrunch.com/2020/05/11/primer/?guccounter=1) about [Primer](https://primer.io/) and I decided to implement a simplified dashboard section for seeing and managing all transactions.

I started with brainstorming session, [user stories](https://www.figma.com/file/Q1gKfQA2EOjkcWvlH9tbW7/Ecommerce-admin-dashboard?node-id=25%3A67) and [information architecture](https://www.figma.com/file/Q1gKfQA2EOjkcWvlH9tbW7/Ecommerce-admin-dashboard?node-id=25%3A67). After getting some structure in mind I continued with [wireframes](https://www.figma.com/file/Q1gKfQA2EOjkcWvlH9tbW7/Ecommerce-admin-dashboard?node-id=39%3A0) and moved to [layout](https://www.figma.com/file/Q1gKfQA2EOjkcWvlH9tbW7/Ecommerce-admin-dashboard?node-id=47%3A0) and [design exploration](https://www.figma.com/file/Q1gKfQA2EOjkcWvlH9tbW7/Ecommerce-admin-dashboard?node-id=54%3A833).

At this point I started to set up React project, configuring the development environment, and started to develop basic structure.

After I got more detailed and set on design, I started breaking down a design into basic components with static data, styling, and basic functionality.

And after couple iterations on design and development, I set up basic REST API using [json-server](https://github.com/typicode/json-server).

Upon implementing a new component, I added it to documentation together with sample usage with [react-styleguidist](https://react-styleguidist.js.org/), wrote tests using [React Testing Library](https://testing-library.com/docs/react-testing-library/intro), and refactored necessary code.

## Links

Live site - https://ecommerce-admin-dashboard-demo.netlify.app/

Styleguide - https://ecommerce-admin-dashboard-demo.netlify.app/styleguide

API - https://ead-api.herokuapp.com/

API repo - https://github.com/edburtnieks/ecommerce-admin-dashboard-demo-api

Design - https://www.figma.com/file/Q1gKfQA2EOjkcWvlH9tbW7/Ecommerce-admin-dashboard?node-id=0%3A1

## Local Development Setup

### Install

`git clone git@github.com:edburtnieks/ecommerce-admin-dashboard-demo.git`

`npm i`

### Run project

`npm start`

### Run tests

`npm test`

### Build project

`npm run build`

### Lint javascript / typescript files

`npm run lint:js`

### Fix auto-fixable linting errors in javascript / typescript files

`npm run lint:js:fix`

### Run local styleguide server

`npm run styleguide`

### Build styleguide server

`npm run styleguide:build`

## Technology stack

Project boilerplate was generated using [create-react-app](https://create-react-app.dev/).

### Design

- [Figma](https://www.figma.com/)

### Frontend

Hosted on Netlify

- [React](https://reactjs.org/)
- [React Router](https://reacttraining.com/react-router/web/guides/quick-start)
- [React Styleguidist](https://react-styleguidist.js.org/) - Isolated React component development environment with a living style guide
- [React Testing Library](https://testing-library.com/docs/react-testing-library/intro) - Library for testing React components
- [Typescript](https://www.typescriptlang.org/)
- [SASS](https://sass-lang.com/)
- [CSS Modules](https://github.com/css-modules/css-modules)
- [classnames](https://github.com/JedWatson/classnames) - Javascript utility for conditionally joining classNames together
- [Easy Peasy](https://easy-peasy.now.sh/) - React state library

### API

Hosted on Heroku

- [json-server](https://github.com/typicode/json-server) - Fake REST API
