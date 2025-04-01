import { Component } from '@angular/core';
import { SlotMachineComponent } from "./slot-machine/slot-machine.component";
import { ReelComponent } from './reel/reel.component';

@Component({
  selector: 'app-root',
  imports: [SlotMachineComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'SlotMachine';
}
