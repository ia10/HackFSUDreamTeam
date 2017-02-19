import {isString, isDefined, isObject} from 'angular';

import {map} from 'lodash';


class User {
  constructor() {
    this.data = {};
  }

  getAll() {
    return map(collection, (o) => o);
  }


  getById(id) {
    if (!isString(id)) {
      throw new Error('Expected `id` argument to be string type.');
    }

    if (isDefined(data[id])) {
      return data[id];
    }
    return null;
  }

  put(user) {
    if (!isObject(user)) {
      throw new Error('Expected `user` argument to be object type.');
    }

    if (!isString(user.id)) {
      throw new Error('Expected `user` argument to have an `id` string property.');
    }

    return (this.data[user.id] = user);
  }
}


export default User;
