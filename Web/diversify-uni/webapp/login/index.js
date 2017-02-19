import angular from 'angular';

import uiRouter from 'angular-ui-router';


const MODULE_NAME = 'diversify-uni.login',
  MODULE = angular.module(MODULE_NAME, [uiRouter]);

import stateProviderConfig from './state-provider.config';
MODULE.config(stateProviderConfig);

export default MODULE_NAME;
