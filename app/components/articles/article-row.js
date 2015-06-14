import Ember from 'ember';

export default Ember.Component.extend({
	tagName: 'tr',
	article: null,
	articleStates: null,
	actions: {
		saveArticle: function() {
			this.sendAction('save', article);
		}
	}
});
