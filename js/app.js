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

App.Service = DS.Model.extend({
	type: DS.attr(),
	heading: DS.attr(),
	paraone: DS.attr(),
	paratwo: DS.attr(),
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
	heading: 'Importance of Security',
	paraone: 'As requirements for regulatory compliance and asset protection multiply, deploying and maintaining effective and secure IT infrastructure is critical to survival.',
	paratwo:'Dynamic Business Developers can equip your organization with sustainable security practices and integrate them in IT Operations and Development processes.  Information security, development and IT operations should be complimentary functions; we can connect the dots to build a efficient and secure IT infrastructure.',
	listone:'',
	listtwo:'',
	image:''
},
{
	id: '2',
	type:'Why',
	heading: 'Why is this important?',
	paraone:'Secure and efficient IT Operations require focus on protecting assets critical to business, managing risk by implementing controls and continually integrating information security practices into all facets of the operations. In combination this will help:',
	paratwo:'High performing IT organizations embrace cultures of change management, causality, planned work and continuous improvement. When these cultures are adopted organizations can see:',
	listone: ['Safeguard customer data', 'Protect against fraud', 'Protect brand and reputation', 'Maximize revenue through high system availability', 'Safeguard revenue by protecting against errors and malicious activities', 'Ensure timely and accurate reporting'],
	listtwo: ['Security events are less likely to result in loss events', 'Security breaches are more likely to be detected using automated controls', 'Access breaches are detected more quickly', 'Production systems fail less', 'Releases cause unintended failures less', 'Frequency of emergency change requests is less', 'Frequency of repeat audit findings is less', 'Reduction of unplanned work and firefighting', 'Higher ratio of Servers to System Administrators']
},
{
	id: '3',
	type:'How',
	heading: 'The Dyn Biz Approach',
	paraone: 'Our process to get your business on track:',
	paratwo: 'Ready to get started? Contact us for more information.',
	listone: ['Integrate security into current operations', 'Identify highest business risks and the reliance on critical IT functions', 'Get stakeholders from Operations team communicating and working together on shared objectives', 'Set measures for review and track long and short term progress'],
	listtwo: '',
	image:''
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

