

function userMock(User) {
  'ngInject';

  User.put({
    'id': '5ada082e-65f2-4512-9eda-1a648bfa0456',
    'avatar': 'http://example.com/avatar.png',
    'name': 'Robert Hodgen',
    'country': 'US',
    'languages': [
      'en-us'
    ],
    'location': {
      'latitude': 0,
      'longitude': 0
    }
  })
}

export default userMock;
