import { Injectable } from '@angular/core';
import Docxtemplater from 'docxtemplater';
import * as JSZip from 'jszip';
import * as fs from 'file-saver';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WordSearchServiceService {

  constructor(private http: HttpClient) {}
  loadBook1() {
    return this.http.get('../asset/book1.docx');
  }

  loadBook2() {
    return this.http.get('../asset/book2.docx');
  }
  
  findTamilWords(file: File): Promise<string[]> {
    return new Promise<string[]>((resolve, reject) => {
      const reader = new FileReader();
  
      reader.onload = (event: any) => {
        const content = event.target.result;
        const zip = new JSZip(content);
        const doc = new Docxtemplater().loadZip(zip);
  
        // Get the content as plain text
        const text = doc.getFullText();
  
        // Use regular expressions to find Tamil words
        const tamilWordRegex = /[\u0B80-\u0BFF]+/g;
        const tamilWords = text.match(tamilWordRegex);
  
        if (tamilWords) {
          resolve(tamilWords);
        } else {
          resolve([]);
        }
      };
  
      reader.onerror = (event: any) => {
        reject(event.target.error);
      };
  
      reader.readAsArrayBuffer(file);
    });
  }

  
  
}
