import template from './home.template.html';


function stateProviderConfig ($stateProvider) {
  'ngInject';

  $stateProvider.state('signup', {
    'url': '/',
    'template': template
  });
}

export default stateProviderConfig;
