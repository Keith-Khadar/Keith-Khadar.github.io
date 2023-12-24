import { Component } from '@angular/core';
import { ThreeBackgroundComponent } from './three-background/three-background.component';

@Component({
  selector: 'home-page',
  standalone: true,
  imports: [ThreeBackgroundComponent],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss'
})
export class HomePageComponent {

}
