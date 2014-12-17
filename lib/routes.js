console.log('[SERVER-CLIENT] Loading routes ...');

function userIsLogged () {
  if ( Meteor.userId() !== null ) {
    Router.go('home');
  }
  else {
    this.next();
  }
}

Router.map(function(){
  this.route('home', {path: '/'});
  this.route('about', {path: '/about'});
  this.route('account', {
    path: '/account',
    onBeforeAction: function () {
      if ( Meteor.userId() === null ) {
        Router.go('login');
      }
      else {
        this.next();
      }
    }
  });
  // User is not logged
  this.route('register', {
    path: '/register',
    onBeforeAction: userIsLogged
  });
  this.route('register/step2', {
    path: '/register/step2',
    onBeforeAction: userIsLogged
  });
  this.route('login', {
    path: '/login',
    onBeforeAction: userIsLogged
  });
  this.route('logout', {
    path: '/logout',
    onBeforeAction: function (){
      Meteor.logout();
      Router.go('home')
    }
  });

  Router.route('/restful', {where: 'server'})
  .get(function () {
    this.response.end('output test');
  })
  .post(function () {
    this.response.end('post request\n');
  });

  this.route('notfound', {path: '/(.*)'});
});