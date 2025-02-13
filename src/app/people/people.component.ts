import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-people',
  standalone: true,
  imports: [],
  templateUrl: './people.component.html',
  styleUrl: './people.component.css'
})
export class PeopleComponent {
  @Input() name: string = "";
  @Input() isFav: boolean = false;
  @Output() addFav: EventEmitter<string> = new EventEmitter<string>();
  @Output() removeFav: EventEmitter<string> = new EventEmitter<string>();

  addToFavs(){
    this.addFav.emit(this.name);
  }

  removeFromFavs(){
    this.removeFav.emit(this.name);
  }
}
