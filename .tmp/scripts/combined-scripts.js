(function() {

var Emberapp = window.Emberapp = Ember.Application.create();

/* Order and include as you please. */


})();

(function() {

Emberapp.UserEditController = Ember.ObjectController.extend({
  save: function(){
    // we're cheating here that there's no commit()
    // but the UI element is already bound to the model
    this.transitionToRoute('user',this.get('model'));
  }
});



})();

(function() {

Emberapp.UsersController = Ember.ObjectController.extend({
  // Implement your controller here.
});



})();

(function() {

Emberapp.Store = DS.Store.extend();
Emberapp.ApplicationAdapter = DS.FixtureAdapter;


})();

(function() {

/*global Ember*/
Emberapp.User = DS.Model.extend({
    name: DS.attr('string'),

    zipcode: DS.attr('number')
});

// probably should be mixed-in...
Emberapp.User.reopen({
  // certainly I'm duplicating something that exists elsewhere...
  attributes: function(){
    var attrs = [];
    var model = this;
    Ember.$.each(Ember.A(Ember.keys(this.get('data'))), function(idx, key){
      var pair = { key: key, value: model.get(key) };
      attrs.push(pair);
    });
    return attrs;
  }.property()
});

// delete below here if you do not want fixtures
Emberapp.User.FIXTURES = [
  
  {
    id: 0,
    
    name: 'foo',
    
    zipcode: 'foo'
    
  },
  
  {
    id: 1,
    
    name: 'foo',
    
    zipcode: 'foo'
    
  }
  
];


})();

(function() {

Emberapp.ApplicationRoute = Ember.Route.extend({
    // admittedly, this should be in IndexRoute and not in the
    // top level ApplicationRoute; we're in transition... :-)
    model: function () {
        return ['red', 'yellow', 'blue'];
    }
});


})();

(function() {

Emberapp.UserEditRoute = Ember.Route.extend({
  model: function(model) {
    return this.get('store').find('user', model.user_id);
  }
});



})();

(function() {

Emberapp.UserRoute = Ember.Route.extend({
  model: function(model) {
    return this.get('store').find('user', model.user_id);
  }
});



})();

(function() {

Emberapp.UsersRoute = Ember.Route.extend({
  model: function() {
    return this.get('store').find('user');
  }
});



})();

(function() {

Emberapp.BoundTextFieldView = Ember.TextField.extend({
  valueBinding: 'content.value',
  contentChanged: function() {
    this.get('controller').get('model').set(
      this.get('content').key,
      this.get('content').value
    ); // ugly, but gets the job done
  }.observes('content.value')
});


})();

(function() {

Emberapp.UserEditView = Ember.View.extend({
    templateName: 'user_edit'
});


})();

(function() {

Emberapp.UserView = Ember.View.extend({
    templateName: 'user'
});


})();

(function() {

Emberapp.UsersView = Ember.View.extend({
    templateName: 'users'
});


})();

(function() {

Emberapp.Router.map(function () {
  
  this.resource('user_edit');
  this.resource('user_edit', { path: '/user_edit/:user_edit_id' });
  this.resource('user_edit.edit', { path: '/user_edit/:user_edit_id/edit' });
  
  this.resource('users');
  this.resource('user', { path: '/user/:user_id' });
  this.resource('user.edit', { path: '/user/:user_id/edit' });
  
});


})();