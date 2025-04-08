import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-sentence-editor',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './sentence-editor.component.html',
  styleUrls: ['./sentence-editor.component.scss']
})
export class SentenceEditorComponent implements OnInit {
  @Input() sentenceSets: string[][] = [];
  @Output() save = new EventEmitter<[string, string, string][]>();
  @Output() close = new EventEmitter<void>();

  jsonContent: string = '';

  ngOnInit() {
    this.jsonContent = JSON.stringify(this.sentenceSets, null, 2);
  }

  onSave() {
    try {
      const parsed = JSON.parse(this.jsonContent);
      if (Array.isArray(parsed)) {
        this.save.emit(parsed);
      } else {
        alert('Invalid JSON format: expected an array.');
      }
    } catch (e: any) {
      alert('Invalid JSON: ' + e.message);
    }
  }

  onClose() {
    this.close.emit();
  }
}
