import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ITask } from 'src/interfaces/task.interface';

@Component({
    selector:'app-task',
    templateUrl:'./task.component.html'
})

export class TaskComponent{
    @Input() task: ITask;
    @Output() itemDeletion = new EventEmitter();

    toDelete = false;

    deleteItem():void{
        this.toDelete = true;
        this.itemDeletion.emit(this.task);
    }
    
 }