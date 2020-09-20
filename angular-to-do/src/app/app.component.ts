import { Component } from '@angular/core';
import { ITask } from 'src/interfaces/task.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-to-do';

  tasks:Array<ITask> = [];

  creatingTask = '';


  createNewTask():void{
    if(this.creatingTask.length > 0){
      const task:ITask = {
        id:`${this.tasks.length}-${Date.now()}`,
        content:this.creatingTask,
        isDone:false,
      };

      this.tasks.push(task);
      this.creatingTask = '';
    }
  }

  deleteTask(task:ITask):void{
    this.tasks = this.tasks.filter(toDoTasks => toDoTasks.id !== task.id);
  }

}
