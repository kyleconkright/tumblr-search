import { Injectable } from '@angular/core';
import { Jsonp } from '@angular/http';

@Injectable()

export class SearchService {

	favoritesList:Array<any> = [];

	constructor(private _http:Jsonp) { }

	getCount() {
		this.favoritesList.length;
	}

	getFavorites() {
		return this.favoritesList;
	}

	saveFavorite(value) {
		if(this.favoritesList.indexOf(value) == -1) {
			this.favoritesList.push(value);
		}
	}

	deleteFavorite(value) {
		this.favoritesList.splice(this.favoritesList.indexOf(value), 1));
	}

	getPosts(blog, tag) {
		return this._http.request(
			`https://api.tumblr.com/v2/blog/${blog}.tumblr.com/posts?api_key=PWsdWLW74EIkI55llYmxLtdsT8swND1U5jonYctJj7kcInXuW4&tag=${tag}&callback=JSONP_CALLBACK`, {method:'Get'})
			.map(res => res.json())
	}
}