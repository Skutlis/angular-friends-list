import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  newFriend: string | null = null;
  favorites: string[] | null = null;

  people: string[] = ['lewis', 'jules', 'ed', 'nathan', 'dave', 'nigel'];

  addFriend() {
    if (!this.newFriend) {
      return;
    }
    this.people.push(this.newFriend);
    this.newFriend = null;
  }

  addFavorite(friend : string){
    if (this.favorites == null){
      this.favorites = []
    }
    if (this.favorites.indexOf(friend) === -1)
    this.favorites.push(friend);
  }

  removeFavorite(friend : string){
    if (this.favorites == null){
      this.favorites = []
    }
    this.favorites = this.favorites.filter(fav => fav !== friend);
  }
}
