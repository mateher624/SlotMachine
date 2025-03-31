import { Component } from '@angular/core';

@Component({
  selector: 'app-slot-machine',
  standalone: true,
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

  currentSetIndex = 0;
  reels = ["", "", ""];
  spinning = [false, false, false];

  play() {
    this.spinning = [true, true, true];

    setTimeout(() => {
      this.reels[0] = this.sentenceSets[this.currentSetIndex][0];
      this.spinning[0] = false;
    }, 1000);

    setTimeout(() => {
      this.reels[1] = this.sentenceSets[this.currentSetIndex][1];
      this.spinning[1] = false;
    }, 3000);

    setTimeout(() => {
      this.reels[2] = this.sentenceSets[this.currentSetIndex][2];
      this.spinning[2] = false;
      this.currentSetIndex = (this.currentSetIndex + 1) % this.sentenceSets.length;
    }, 5000);
  }
}
