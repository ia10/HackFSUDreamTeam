import angular from 'angular';


const MODULE_NAME = 'diversify-uni.user',
  MODULE = angular.module(MODULE_NAME, []);

import User from './user.service';
MODULE.service('User', User);

import Usermock from "./user.run";
MODULE.run(Usermock);

export default MODULE_NAME;