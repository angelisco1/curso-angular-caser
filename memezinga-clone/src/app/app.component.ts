import { Component, OnInit } from '@angular/core';
import { environment as env } from '../environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'memezinga-clone';

  ngOnInit() {
    debugger;
    console.log(env);
  }
}
