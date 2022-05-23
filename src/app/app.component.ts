import { Component } from '@angular/core';
import { Task } from './task';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  config: { [key: string]: string } | null = null;
  tasks: Task[] = [
    {
      name: 'Siłownia',
      deadline: '2020-01-02',
      done: false,
    },
    {
      name: 'Nauka Angulara',
      deadline: '2020-01-03',
      done: false,
    },
    {
      name: 'Sprzątanie kuwety',
      deadline: '2020-01-04',
      done: false,
    },
  ];

  constructor(){
    this.config = {
      title: 'Lista zadań',
      footer:  '© Lista zadań. All rights reserved.',
      date: new Date().toDateString()
    };
  }

  clearTasks() {
    this.tasks = [];
  }

  createTask(name: string, deadline: string){
    const task: Task = {
      name,
      deadline,
      done: false
    };

    this.tasks.push(task);
  }
}
