App = Ember.Application.create();

App.ApplicationAdapter = DS.RESTAdapter; //this is default

App.ApplicationStore = DS.Store.extend({

});

App.Router.map(function(){
	this.resource('services', function(){
		this.resource('service', { path:':service_id'});
	});
	this.resource('about');
	this.resource('contact');
});

App.ServicesRoute = Ember.Route.extend({
	model: function() {
		return this.store.findAll('service');
	}
});

App.ServiceRoute = Ember.Route.extend({ //Can delete this.....
	model: function(params) {
		return this.store.find('product', params.service_id);
	}
});

App.AboutRoute = Ember.Route.extend({
	model: function() {
		return this.store.findAll('about');
	}
});

App.Service = DS.Model.extend({
	type: DS.attr('string'),
	heading: DS.attr('string'),
	body: DS.attr('string'),
	image: DS.attr('string')	
});

App.About = DS.Model.extend({
	trait: DS.attr(),
	heading: DS.attr(),
	body: DS.attr(),
	list: DS.attr()
});



