import { Component } from '@angular/core';
import { SearchService } from '../app-service';

@Component({
	selector: 'favorites-list',
	template: require('./favorites-list.component.html'),
	styles: [require('./favorites-list.component.scss')]
})

export class FavoritesListComponent {

	title:string

	favorites:Array<any> = [];

	constructor (private _searchService: SearchService) {
		this.title = 'My Favorites'

		this.favorites = this._searchService.getFavorites();
	}

	removeFromFavs(post) {
		this._searchService.deleteFavorite(post);
		console.log(this._searchService.favoritesList);
	}
}