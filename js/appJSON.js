App = Ember.Application.create();

App.Router.map(function(){
	this.resource('about');
	this.resource('posts', function() {
		this.resource('post', { path: ':post_id'});
	});
});
	


App.PostsRoute = Ember.Route.extend({
	model: function() {
		return $.getJSON('http://dynbizzz.com/a[o/get_recent_posts/?callback=?').then(function(data) {
			return data.posts.map(function(post) {
				post.body = post.content;
				return post;
			});
		});
	}
});

App.PostRoute = Ember.Route.extend({
	model: function(params) {
		return $.getJSON('http://dynbizz.com/api='+params.post_id+'$callback=?').then(function(data) {
			data.post.body = data.post.content;
			return data.post;
		});
	}
});

App.PostController = Ember.ObjectController.extend({
	isEditing: false,
	actions: {
		edit: function() {
			this.set('isEditing', true);
		},
		doneEditing: function() {
			this.set('isEditing', false);
		}
	}
});

Ember.Handlebars.helper('format-date', function(date) {
	return moment(date).fromNow();
});

Ember.Handlebars.helper('markdown', function(input) {
	return new Handlebars.SafeString(showdown.makeHtml(input));
});


