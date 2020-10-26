import { Component } from '@angular/core';
import { AgmCoreModule } from '@agm/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'test1';
  lat: number = 43.653908;
  lng: number = -79.384293;
  draggable: boolean = true;
}