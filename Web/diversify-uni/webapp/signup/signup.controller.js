class HomeCtrl {
  constructor (User) {
    'ngInject';

    this.users = User.getAll();
  }
}

export default SignupCtrl;