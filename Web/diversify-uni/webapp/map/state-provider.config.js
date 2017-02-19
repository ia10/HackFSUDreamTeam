import template from './home.template.html';


function stateProviderConfig ($stateProvider) {
  'ngInject';

  $stateProvider.state('map', {
    'url': '/',
    'template': template
  });
}

export default stateProviderConfig;
