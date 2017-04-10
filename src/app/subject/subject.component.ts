import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-subject',
  templateUrl: './subject.component.html',
  styleUrls: ['./subject.component.css']
})
export class SubjectComponent implements OnInit {
  title:string = 'Khmer Language';
  subTitle:string = 'Teacher: Vannaravuth Yo';
  content:string = `
    <p>You will spends 3 weeks to finish this courses:</p>
    <ol>
        <li><strong>Writing:</strong>How to write the best paragraphs.</li>
        <li><strong>Reading:</strong> After write those paragraph. How to read and pronunication.</li>
        <li><strong>Speaking:</strong> Write and Read well, Now let's start to make a conversation</li>
    </ol>

    <blockquote>
        By study this course you will...
    </blockquote>
  `;
  
  constructor() { }

  ngOnInit() {
  }

}
