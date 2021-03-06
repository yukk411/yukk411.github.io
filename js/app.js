App = Ember.Application.create();

App.ApplicationAdapter = DS.FixtureAdapter;

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
		return this.store.find('service', params.service_id);
	}
});

App.AboutRoute = Ember.Route.extend({
	model: function() {
		return this.store.findAll('about');
	}
});

App.IndexController = Ember.Controller.extend({
	jumbotext: 'The ever-changing threat landscape requires IT frameworks that stabilize, secure, manage and improve security.'

});

App.AboutController = Ember.ArrayController.extend({
	boldtext:'Bringing together the best in people to produce the best in business.',
	abouttext:'At Dynamic Business Developers we believe in partnering with our clients - in doing so better quality services and products are the result. The actions we take as a company stem from our core values. Our belief is that we can only achieve superior results when we operate under these values.'
});

App.ContactController = Ember.ObjectController.extend({
	actions: {
		sendInfo: function() {
			if(this.get('real') === 7) {			
				var email = this.store.createRecord('contact',  {
					name: this.get('name'),
					email: this.get('email'),
					message: this.get('message'),
					dateSent: new Date()
				});
				var controller = this;
			
			contact.save().then(function(email) {
				controller.set('name', '');
				controller.set('email', '');
				controller.set('message', '');
				controller.get('model').addObject(email);
				$('.alert').find('.alert-success').show();
			});
			}
			else {
				$('.alert').find('.alert-danger').show();
			}
		}
	}
});

App.Contact = DS.model.extend({
	name: DS.attr(),
	email: DS.attr(),
	message: DS.attr(),
	dateSent: DS.attr()
});

App.Service = DS.Model.extend({
	type: DS.attr(),
	heading: DS.attr(),
	paraone: DS.attr(),
	paratwo: DS.attr(),
	parathree: DS.attr(),
	listone: DS.attr(),
	listtwo: DS.attr(),
	image: DS.attr()
});

App.About = DS.Model.extend({
	trait: DS.attr(),
	list: DS.attr(),
	image: DS.attr
});


App.Service.FIXTURES = [
{
	id:'1',
	type: 'What',
	heading: 'Importance of Information Security',
	paraone: 'As requirements for regulatory compliance and asset protection multiply, deploying and maintaining effective and secure IT infrastructure is critical to survival.',
	paratwo: 'In a perfect world an organization is only one change from a security disaster. Information security needs change management to gain situational awareness of production changes and to influence decisions and outcomes. The combination of the two allows an organization to:', 
	parathree:'Dynamic Business Developers can equip your organization with sustainable security practices and integrate them in IT Operations and Development processes.  Information security, development and IT operations should be complimentary functions; we can connect the dots to build a efficient and secure IT infrastructure.',
	listone:'',
	listtwo:['Identify operational impact of changes','Check change requests comply with information security requirements, internal policies and industry standards','Gain awareness for risky changes and offer better options','Initiate change requests to address information security risks'],
	image:'/img/equip.jpg'
},
{
	id: '2',
	type:'Why',
	heading: 'Why is this important?',
	paraone:'Secure and efficient IT Operations require focus on protecting assets critical to business, managing risk by implementing controls and continually integrating information security practices into all facets of the operations. In combination this will help:',
	paratwo:'High performing IT organizations embrace cultures of change management, causality, planned work and continuous improvement. When these cultures are adopted organizations can see:',
	listone: ['Safeguard customer data', 'Protect against fraud', 'Protect brand and reputation', 'Maximize revenue through high system availability', 'Safeguard revenue by protecting against errors and malicious activities', 'Ensure timely and accurate reporting'],
	listtwo: ['Security events are less likely to result in loss events', 'Security breaches are more likely to be detected using automated controls', 'Access breaches are detected more quickly', 'Production systems fail less', 'Releases cause unintended failures less', 'Frequency of emergency change requests is less', 'Frequency of repeat audit findings is less', 'Reduction of unplanned work and firefighting'],
	image:'/img/services2.jpg'
},
{
	id: '3',
	type:'How',
	heading: 'The Dyn Biz Approach',
	paraone: 'Let us help your organization get back on track. Our expertise can get security integrated into your operations, identify business risks and organizational reliance on critical IT functions, nurture the relationship of stakeholders in various business functions to work together on shared objectives and set the organization up for continuous delivery, continuous deployment and continuous integration.',
	paratwo: 'Ready to get started? Contact us at info@dynbiz.com for more information regarding our services:',
	listone:'',
	listtwo:['Security program management, strategy, architecture, policy and metrics implementation','Identity and access management','Vulnerability assessment','Compliance management','Vendor management and technical due diligence' ],
	image:'/img/approach.jpg'
}
];

App.About.FIXTURES = [
{
	id:'21',
	trait:'Integrity',
	list: ['We own up to our mistakes', 'Honest always goes further', 'We do what is right, especially when nobody is watching']
},
{
	id:'22',
	trait:'Teamwork',
	list: ['Our customers are part of our team - success is shared between a company and their clients', 'Team success is your success', 'We are all one team']
},
{
	id:'23',
	trait:'Talent',
	list: ['Talent and passions should be developed, not niched', 'Talent adapts in the quest of personal mastery - we empower this', 'People are most valuable when aligned with their passions']
},
{
	id:'24',
	trait:'Discipline',
	list: ['When the journey ahead is tough we stay on path', 'Professionalism is rooted in self-discipline']
},
{
	id:'25',
	trait:'Community',
	list: ['It is our community that supports us, we must support it', 'We take pride in supporting our community through volunteerism']
}
];


