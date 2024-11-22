import { Component, OnInit } from '@angular/core';
// import { RouterOutlet } from '@angular/router';
// import { HomeComponent } from './home/home.component';
import { HttpCallerService } from './http-caller.service'

@Component({
  selector: 'app-root',
  // imports: [RouterOutlet ],
  // templateUrl: './app.component.html',
  template: `<button class="primary" type="button" (click)="filterResults()" name="task_button">Activate Task</button>`,
  styleUrl: './app.component.css'
})
export class AppComponent {
  constructor(private httpservice: HttpCallerService) {}
  title = 'ADS';
  // ngOnInit() {}
  filterResults(){
    // http = HttpClient();
    this.httpservice.generate_task().subscribe((respone)=>{
      console.log(respone)
    })
  }
}

