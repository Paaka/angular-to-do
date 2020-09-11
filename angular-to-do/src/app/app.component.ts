import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-to-do';

  tasks = [];

  creatingTask = '';

  createNewTask():void{
    if(this.creatingTask.length > 0){
      const task = {
        id:`${this.tasks.length}-${Date.now()}`,
        task:this.creatingTask,
        isDone:false,
      };
      this.tasks.push(task);
      this.creatingTask = '';
    }
  }

}
