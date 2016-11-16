import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';

import { SearchFormComponent } from './search-form/search-form.component';
import { FavoritesListComponent } from './favorites-list/favorites-list.component';
import { SearchService } from './app-service';

import { AppComponent } from './app.component';


@NgModule({
	imports: [ BrowserModule, ReactiveFormsModule, HttpModule, JsonpModule ],
	declarations: [ AppComponent, SearchFormComponent, FavoritesListComponent ],
	providers: [ SearchService ],
	bootstrap: [ AppComponent ]
})

export class AppModule { }