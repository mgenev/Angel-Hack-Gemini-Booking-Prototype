Emberapp.Router.map(function () {
  
  this.resource('user_edit');
  this.resource('user_edit', { path: '/user_edit/:user_edit_id' });
  this.resource('user_edit.edit', { path: '/user_edit/:user_edit_id/edit' });
  
  this.resource('users');
  this.resource('user', { path: '/user/:user_id' });
  this.resource('user.edit', { path: '/user/:user_id/edit' });
  
});
