import { Component } from '@angular/core';
import { ReelComponent } from '../reel/reel.component';

@Component({
  selector: 'app-slot-machine',
  standalone: true,
  imports: [ReelComponent],
  templateUrl: './slot-machine.component.html',
  styleUrls: ['./slot-machine.component.scss']
})
export class SlotMachineComponent {
  sentenceSets = [
    ["The sky is blue.", "Clouds drift by.", "Birds are flying."],
    ["The sun is bright.", "Trees sway gently.", "Leaves fall down."],
    ["Water is calm.", "Ripples spread out.", "Fish swim below."],
    ["Mountains are tall.", "Rocks are steady.", "Snow tops peaks."],
    ["Night is silent.", "Stars shine bright.", "Moon glows softly."]
  ];

  currentSetIndex = -1;
  reels = ["", "", ""];
  spinning = [false, false, false];
  timeoutRefs: any[] = [];

  play() {
    this.currentSetIndex = (this.currentSetIndex + 1) % this.sentenceSets.length;
    console.log(this.currentSetIndex);

    this.spinning = [true, true, true];

    this.timeoutRefs.forEach(t => clearTimeout(t));

    this.timeoutRefs[0] = setTimeout(() => {
      this.reels[0] = this.sentenceSets[this.currentSetIndex][0];
      this.spinning[0] = false;
    }, 1000);

    this.timeoutRefs[1] = setTimeout(() => {
      this.reels[1] = this.sentenceSets[this.currentSetIndex][1];
      this.spinning[1] = false;
    }, 3000);

    this.timeoutRefs[2] = setTimeout(() => {
      this.reels[2] = this.sentenceSets[this.currentSetIndex][2];
      this.spinning[2] = false;
    }, 5000);
  }

  back() {
    this.currentSetIndex = (this.currentSetIndex - 1) % this.sentenceSets.length;
    if (this.currentSetIndex < 0) {
      this.currentSetIndex += this.sentenceSets.length;
    }
    console.log(this.currentSetIndex);

    this.timeoutRefs.forEach(t => clearTimeout(t));

    this.reels[0] = this.sentenceSets[this.currentSetIndex][0];
    this.reels[1] = this.sentenceSets[this.currentSetIndex][1];
    this.reels[2] = this.sentenceSets[this.currentSetIndex][2];

    this.spinning = [false, false, false];
  }
}
