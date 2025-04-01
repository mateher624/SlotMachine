import { Component, Input, OnInit, OnDestroy, OnChanges, SimpleChanges } from '@angular/core';
import { NgIf, CommonModule } from '@angular/common';

@Component({
  selector: 'app-reel',
  standalone: true,
  imports: [NgIf, CommonModule],
  templateUrl: './reel.component.html',
  styleUrls: ['./reel.component.scss']
})
export class ReelComponent implements OnInit, OnDestroy, OnChanges {
  @Input() text: string = "";
  @Input() spinning: boolean = false;

  dummyTexts: string[] = [];

  private intervalId: any;

  private subjects = ['kot', 'pies', 'ptaszek', 'słońce', 'drzewo', 'dziecko', 'samochód', 'księżyc', 'chmura', 'dom', 'mężczyzna', 'kobieta', 'miasto', 'ptak', 'ocean'];

  private verbs = ['biega', 'lata', 'siedzi', 'skacze', 'rośnie', 'pływa', 'wspina się', 'chodzi', 'śpiewa', 'gra', 'tańczy', 'buduje', 'krzyczy', 'bada', 'jeździ'];
  
  private adjectives = ['szybko', 'szczęśliwie', 'z gracją', 'cicho', 'mocno', 'śmiało', 'jasno', 'delikatnie', 'gniewnie', 'ostrożnie', 'radośnie', 'spokojnie', 'nerwowo', 'ostro', 'leniwe'];
  
  private objects = ['na trawie', 'na niebie', 'w parku', 'pod drzewem', 'obok rzeki', 'na ulicy', 'przy morzu', 'w mieście', 'na górze', 'w lesie', 'obok jeziora', 'przy ognisku', 'pod gwiazdami', 'na dachu', 'na pustyni']
  ;

  generateRandomString(): string {
    const subject = this.subjects[Math.floor(Math.random() * this.subjects.length)];
    const verb = this.verbs[Math.floor(Math.random() * this.verbs.length)];
    const adjective = this.adjectives[Math.floor(Math.random() * this.adjectives.length)];
    const object = this.objects[Math.floor(Math.random() * this.objects.length)];

    return `${subject} ${adjective} ${verb} ${object}`;
  }

  ngOnInit(): void {
    if (this.spinning) {
      this.startSpinning();
    }
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['spinning']) {
      if (this.spinning) {
        this.startSpinning();
      } else {
        this.stopSpinning();
      }
    }
  }

  ngOnDestroy(): void {
    this.stopSpinning();
  }

  private startSpinning(): void {
    this.intervalId = setInterval(() => {
      this.dummyTexts = [];
      for (let i = 0; i < 12; i++) {
        this.dummyTexts.push(this.generateRandomString())
      }
    }, 200);
  }

  private stopSpinning(): void {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }
}