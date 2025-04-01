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

  // Predefined word lists for sentence generation
  private subjects = ['The cat', 'A dog', 'The bird', 'The sun', 'A tree', 'A child', 'A car', 'The moon', 'A cloud', 'The house', 'A man', 'A woman', 'The city', 'A bird', 'The ocean'];

  private verbs = ['runs', 'flies', 'sits', 'jumps', 'grows', 'swims', 'climbs', 'walks', 'sings', 'plays', 'dances', 'builds', 'screams', 'explores', 'drives'];
  
  private adjectives = ['quickly', 'happily', 'gracefully', 'silently', 'strongly', 'boldly', 'brightly', 'gently', 'angrily', 'carefully', 'joyfully', 'calmly', 'nervously', 'sharply', 'lazily'];
  
  private objects = ['on the grass', 'in the sky', 'in the park', 'under the tree', 'beside the river', 'on the street', 'by the sea', 'in the city', 'on the mountain', 'in the forest', 'beside the lake', 'by the fire', 'under the stars', 'on the roof', 'in the desert'];

  // Generate a random sentence
  generateRandomString(): string {
    const subject = this.subjects[Math.floor(Math.random() * this.subjects.length)];
    const verb = this.verbs[Math.floor(Math.random() * this.verbs.length)];
    const adjective = this.adjectives[Math.floor(Math.random() * this.adjectives.length)];
    const object = this.objects[Math.floor(Math.random() * this.objects.length)];

    return `${subject} ${verb} ${adjective} ${object}.`;
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
    }, 200); // Update every 0.2 seconds
  }

  private stopSpinning(): void {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }
}