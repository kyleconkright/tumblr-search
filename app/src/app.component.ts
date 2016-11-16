import { Component, ViewEncapsulation } from '@angular/core';

@Component({
	selector: 'ng-app',
	template: require('./app.component.html'),
	styles: [require('./app.component.scss')],
	encapsulation: ViewEncapsulation.None
})

export class AppComponent {

	title:string
	headline:string;

	constructor () {

		this.title = 'Tumblr List Builder'
		this.headline = 'woop woop'

	}

	testSave() {
		alert('save');
	}
}