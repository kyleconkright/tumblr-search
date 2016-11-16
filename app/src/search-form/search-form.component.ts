import { Component, OnInit } from '@angular/core';
import { SearchService } from '../app-service';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';

@Component({
	selector: 'search-form',
	template: require('./search-form.component.html'),
	styles: [require('./search-form.component.scss')]
})

export class SearchFormComponent implements OnInit {

	title:String = 'Find Posts'

	resultsList:Array<any>;

	searchForm: FormGroup;

	constructor (private _searchService: SearchService, private formBuilder: FormBuilder) { }

	ngOnInit() {
		this.searchForm = this.formBuilder.group({
			blogname: '',
			posttag: '',
		});

		this.searchForm.valueChanges
			.debounceTime(400)
			.subscribe(value => {
		    console.log(value);
		    this._searchService.getPosts(value.blogname, value.posttag)
		    	.subscribe(
		    		data => this.resultsList = data.response.posts,
		    		error => console.log(error),
		    		() => console.log('finished')
		    	)
	    });
	}

	addToFavorites(post) {
		this._searchService.saveFavorite(post);
	}
	
}