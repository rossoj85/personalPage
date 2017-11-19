# react-router-transitions

> Brings transitions to react-router.

[![npm version](https://img.shields.io/npm/v/react-router-transitions.svg?style=flat-square)](https://www.npmjs.com/package/react-router-transitions)
[![npm downloads](https://img.shields.io/npm/dm/react-router-transitions.svg?style=flat-square)](https://www.npmjs.com/package/react-router-transitions)
[![Build Status](https://travis-ci.org/doctolib/react-router-transitions.svg?branch=master)](https://travis-ci.org/doctolib/react-router-transitions)

[![Dependencies](https://img.shields.io/david/doctolib/react-router-transitions.svg?style=flat-square)](https://david-dm.org/doctolib/react-router-transitions)
[![DevDependencies](https://img.shields.io/david/dev/doctolib/react-router-transitions.svg?style=flat-square)](https://david-dm.org/doctolib/react-router-transitions#info=devDependencies&view=list)

## Installation

```sh
npm install --save react-router-transitions
```

## The problem solved

The main goal of this module is to handle history navigation by providing the correct animation if the user goes back or goes forward.
It is a requirement especially on mobile to provide a great user experience.

## Getting started

### Set up routes

The requirement to use this module is to set up transition context at the root level
of your application using `useTransitions`.

Then you can enable transitions at several levels of your application using `withTransition`.
In a simple application, you should only wrap your root component.

```js
import React from 'react';
import {Router, Route, browserHistory, applyRouterMiddleware} from 'react-router';
import {useTransitions, withTransition} from 'react-router-transitions';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import App from './App';
import Home from './Home';
import AboutUs from './AboutUs';

export default () => (
  <Router
    history={browserHistory}
    render={applyRouterMiddleware(useTransitions({
      TransitionGroup: ReactCSSTransitionGroup,
      defaultTransition: {
        transitionName: 'fade',
        transitionEnterTimeout: 500,
        transitionLeaveTimeout: 300
      }
    }))}
  >
    <Route path="/" component={withTransition(App)}>
      <Route path="home" component={Home} />
      <Route path="about-us" component={AboutUs} />
    </Route>
  </Router>
);
```

### Navigate into your application

If you are familiar with react-router, you have probably already used methods like `router.push` or `router.replace`.
Starting now, you should not use them to navigate into your application.

You have to think your navigation in a view logic, just like in a mobile application.
To make it possible, a new property is now accessible in the `transitionRouter` context. This property has three main methods: `show`, `dismiss` and `swap`.

#### transitionRouter.show(location)

Go to a location using a `show` animation.
You have to use this method each time you want to display a new view.

It adds a new entry in the history to give the user the ability to use the back button.

Internally, it uses the `router.push` method.

#### transitionRouter.dismiss(location, options)

Go to a location using a `dismiss` animation.
You have to use this method when you want to hide a view (e.g. simulate a *close* or a *go back*).

The `options` argument accept an object.
- `depth`: default to 1. Is the number of history records you want to revert.

It doesn't add a new entry in the history.

Internally, if we have an history, it uses the `router.go(-n)` method, otherwise it uses `transitionRouter.swap` with a `dismiss` action.

#### transitionRouter.swap(location, [transitionAction])

Go to a location using the default transition or the transition specified in the second argument.
You have to use this method if you want to change route without affecting the history (e.g. tabs, accordion, etc).

It doesn't add a new entry in the history.

Internally, it merges the new location with the current one and uses `router.replace`.
The `transitionAction` is added to the location state if specified. Available values are "show" or "dismiss".

#### Specify transitions

You can specify a transition associated with a view directly in the location state.
You have to specify two transition configurations: `showTransition` and `dismissTransition`.

If you specify these properties, they will be the transition used to show or dismiss the view.

#### Example

```js
import React, {Component} from 'react';

export default class Home extends Component {
  static contextTypes = {
    transitionRouter: React.PropTypes.object,
  };

  onClickAboutUs(event) {
    event.preventDefault();
    this.context.transitionRouter.show({
      pathname: '/about-us',
      state: {
        showTransition: {
          transitionName: 'show-from-top',
          transitionEnterTimeout: 500,
          transitionLeaveTimeout: 300,
        },
        dismissTransition: {
          transitionName: 'dismiss-from-top',
          transitionEnterTimeout: 500,
          transitionLeaveTimeout: 300,
        },
      },
    });
  }

  render() {
    return (
      <div className="home">
        <a href="/about-us" onClick={this.onClickAboutUs}>
          About us
        </a>
      </div>
    );
  }
}
```

## API

### useTransitions(options)

Available options are:

- `TransitionGroup`: The transition group component used to make transition. You can use any kind of transition group, [ReactCSSTransitionGroup](https://facebook.github.io/react/docs/animation.html) being the default.
Transition specified in `showTransition`, `dismissTransition` or `defaultTransition` are the properties used to render your `TransitionGroup`.
- `defaultTransition`: The default transition applied on the component. The default transition is applied
when no transition is specified or when we can't determine the type of transition to apply.
- `onShow`: Hook function called after a "show" action has been requested.
- `onDismiss`: Hook function called after a "dismiss" action has been requested.
- `getComponentKey`: Function used to generate the component key. Defaults to the complete route path.

This method has to be called in the render method of the Router component.

```js
<Router
  history={browserHistory}
  render={applyRouterMiddleware(useTransitions({
    TransitionGroup: ReactCSSTransitionGroup,
    defaultTransition: {
      transitionName: 'fade',
      transitionEnterTimeout: 500,
      transitionLeaveTimeout: 300
    }
  }))}
/>
```

### withTransition(Component, config)

Enable transitions in the component (children of the component will be animated).

The config provided is merged with the config provided into `useTransitions`.

In a simple application, this high order component has to be applied at the root level.

```js
<Route path="/" component={withTransition(App)}>
  <Route path="home" component={Home} />
  <Route path="about-us" component={AboutUs} />
</Route>
```

## Advanced usage

### Use hooks to determine transition automatically

You can use hooks to determine transitions automatically without having to specify it in every "show" or "dismiss".

**Example:**

```js
<Router
  history={browserHistory}
  render={applyRouterMiddleware(useTransitions({
    TransitionGroup: ReactCSSTransitionGroup,
    onShow(prevState, nextState, replaceTransition) {
      replaceTransition({
        transitionName: `show-${nextState.children.props.route.transition}`,
        transitionEnterTimeout: 500,
        transitionLeaveTimeout: 300,
      });
    },
    onDismiss(prevState, nextState, replaceTransition) {
      replaceTransition({
        transitionName: `dismiss-${prevState.children.props.route.transition}`,
        transitionEnterTimeout: 500,
        transitionLeaveTimeout: 300,
      });
    },
    defaultTransition: {
      transitionName: 'fade',
      transitionEnterTimeout: 500,
      transitionLeaveTimeout: 300,
    },
  }))}
>
  <Route path="/" component={withTransition(App)}>
    <Route path="home" component={Home} transition="from-right" />
    <Route path="about-us" component={AboutUs} transition="from-top" />
  </Route>
</Router>
```

### Create a custom component key

If the animation is not played, one of the reason could be that your key is not different from the key of the last location.
To fix that, you can create a custom component by specifying `getComponentKey` in the configuration.

By default, the key used is the full path to the current route. Params are ignored.

**Example:**

```js
<Route path="books/:id" component={withTransition(BooksDetail, {
  getComponentKey(child, props) {
    return `books/${child.props.routeParams.id}`;
  }
})}
```

### Use with custom history

React router transitions work with every histories available in [react-router](https://github.com/reactjs/react-router) and available in [history](https://github.com/mjackson/history).

The only requirement to use this module with a custom history is to set an "action" and a "key" property in location. You can refer to [history](https://github.com/mjackson/history) to see examples.

## License

MIT
