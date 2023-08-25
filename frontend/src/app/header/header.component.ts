import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  storeName = "We ♥️ Books";

  @Input()
  query: string | undefined;

  @Output()
  queryEvent: EventEmitter<string> = new EventEmitter<string>();

  setQuery(query: string) {
    this.queryEvent.emit(query);
  }
}
