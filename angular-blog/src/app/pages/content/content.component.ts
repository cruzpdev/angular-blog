import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
  photoCover:string = "https://avatars.githubusercontent.com/u/114313554?v=4"
  contentTitle:string = ""
  contentDescription:string = ""
  constructor() { }

  ngOnInit(): void {
  }

}
