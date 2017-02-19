import template from './home.template.html';


function stateProviderConfig ($stateProvider) {
  'ngInject';

  $stateProvider.state('login', {
    'url': '/',
    'template': template
  });
}

export default stateProviderConfig;
