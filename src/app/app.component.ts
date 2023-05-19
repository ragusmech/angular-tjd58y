import { Component } from '@angular/core';
import { WordSearchServiceService } from './word-search.service';
@Component({
  selector: 'app-root',
  template: `
  <input type="file" multiple  accept=".docx" (change)="onFileSelected($event)" />
  <input type="text" name="query" [(ngModel)] ="query">
  <button (click)="searchTamilWords()">Search Tamil Words</button>
  <ul>
    <li *ngFor="let message of messages; ">{{message}}</li>
  </ul>
`,
})
export class AppComponent {
  tamilWords: any[] = [];
  query:any;
  messages:any[] = [];
  book: any[] = [];
  constructor(private wordSearchService: WordSearchServiceService) {}

  onFileSelected(event: any) {
    const file = event.target.files;
    console.log(file,'file');
    
    // Do additional checks if required (e.g., file type validation)
    for (let index = 0; index < file.length; index++) {
      const element = file[index];
      
      this.wordSearchService.findTamilWords(element).then((words) => {
        this.book[index] = element.name;
        this.tamilWords[index] = words;
      });
    }
    
  }

  searchTamilWords() {
    let i = 0;
    // Perform additional processing if needed
    for (let index = 0; index < this.tamilWords.length; index++) {
      const element = this.tamilWords[index];
      if(element.includes(this.query)){
        this.messages[i] = "Match Found in "+this.book[index];
        i++;
      }
    }
    if(this.messages.length ==0){
      this.messages[0] = "Match Not Found";
    }
   
  }
}
