import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-reel',
  standalone: true,
  templateUrl: './reel.component.html',
  styleUrl: './reel.component.scss'
})
export class ReelComponent {
  @Input() text: string = "";
  @Input() spinning: boolean = false;
}
