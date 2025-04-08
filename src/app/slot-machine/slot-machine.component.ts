import { Component } from '@angular/core';
import { ReelComponent } from '../reel/reel.component';
import { SentenceEditorComponent } from '../sentence-editor/sentence-editor.component';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-slot-machine',
  standalone: true,
  imports: [NgIf, ReelComponent, SentenceEditorComponent],
  templateUrl: './slot-machine.component.html',
  styleUrls: ['./slot-machine.component.scss']
})
export class SlotMachineComponent {
  sentenceSets = [
    ["MS-1643", "w mmsie app settingi", "cachowane"],
    ["MS-1638", "nie działa", "ściąganie plików z kontrolera"],
    ["MS-1672", "installer", "ma installować pupper agenta"],
    ["MS-3", "aws 3", "najlepszy"],
    ["MS-1399", "produkcja", "ma problem z rabbitem i zabbixem"],
    ["MS-1644", "frontend", "skacze i źle wygląda na logowaniu"],
    ["MS-1505", "tickety", "nie pokazują się na Webie"],
    ["MS-1648", "installer", "wysyła logi tylko do prod mmsa"],
    ["MS-1655", "poproś produkcję", "żeby wreszcie zaczeli robić rzeczy na qa"],
    ["MS-1642", "logowanie", "nie resetuje licznika zapomnianego hasła"],
  ];

  currentSetIndex = -1;
  reels = ["", "", ""];
  spinning = [false, false, false];
  timeoutRefs: any[] = [];
  showEditor: boolean = false;

  play() {
    this.currentSetIndex = (this.currentSetIndex + 1) % this.sentenceSets.length;

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

    this.timeoutRefs.forEach(t => clearTimeout(t));

    this.reels[0] = this.sentenceSets[this.currentSetIndex][0];
    this.reels[1] = this.sentenceSets[this.currentSetIndex][1];
    this.reels[2] = this.sentenceSets[this.currentSetIndex][2];

    this.spinning = [false, false, false];
  }

  edit() {
    this.showEditor = !this.showEditor;
  }

  save(updatedSets: [string, string, string][]) {
    this.sentenceSets = updatedSets;
    this.showEditor = false;
  }
}
