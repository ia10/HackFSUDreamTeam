import './app.html';
import './app.style.scss';

import angular from 'angular';

/*
 * Import and declare AngularJS module dependencies
 */
import home from './home';
import user from './user';
import signup from './signup';
import login from './login';
import map from './map';

const REQUIRES = [
  home,
  user,
  signup,
  login,
  map
];


/*
 * Setup the app
 * Import each module component and provide it to the new AngularJS module
 */
const APP = angular.module('diversify-uni', REQUIRES);

import locationProviderConfig from './location-provider.config';
APP.config(locationProviderConfig);


/*
 * Bootstrap it!
 */
let strictDi = true;
angular.bootstrap(document, ['diversify-uni'], {strictDi});

export default APP;




