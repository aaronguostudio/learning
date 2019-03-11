import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-task-home',
  templateUrl: './task-home.component.html',
  styleUrls: ['./task-home.component.styl']
})
export class TaskHomeComponent implements OnInit {

  lists = [
    {
      id: 1,
      name: 'New',
      tasks: [
        {
          id: 1,
          desc: 'Task 1: Learn Angular',
          owner: {
            id: 1,
            name: 'Aaron',
            avatar: ''
          },
          dueDate: new Date(),
        },
        {
          id: 2,
          desc: 'Task 2: Learn Java',
          owner: {
            id: 1,
            name: 'Alex',
            avatar: ''
          },
          dueDate: new Date(),
        },
        {
          id: 2,
          desc: 'Task 2: Learn Java',
          owner: {
            id: 1,
            name: 'Alex',
            avatar: ''
          },
          dueDate: new Date(),
        },
        {
          id: 2,
          desc: 'Task 2: Learn Java',
          owner: {
            id: 1,
            name: 'Alex',
            avatar: ''
          },
          dueDate: new Date(),
        },
        {
          id: 2,
          desc: 'Task 2: Learn Java',
          owner: {
            id: 1,
            name: 'Alex',
            avatar: ''
          },
          dueDate: new Date(),
        },
        {
          id: 2,
          desc: 'Task 2: Learn Java',
          owner: {
            id: 1,
            name: 'Alex',
            avatar: ''
          },
          dueDate: new Date(),
        },
        {
          id: 2,
          desc: 'Task 2: Learn Java',
          owner: {
            id: 1,
            name: 'Alex',
            avatar: ''
          },
          dueDate: new Date(),
        },
        {
          id: 2,
          desc: 'Task 2: Learn Java',
          owner: {
            id: 1,
            name: 'Alex',
            avatar: ''
          },
          dueDate: new Date(),
        },
        {
          id: 2,
          desc: 'Task 2: Learn Java',
          owner: {
            id: 1,
            name: 'Alex',
            avatar: ''
          },
          dueDate: new Date(),
        },
        {
          id: 2,
          desc: 'Task 2: Learn Java',
          owner: {
            id: 1,
            name: 'Alex',
            avatar: ''
          },
          dueDate: new Date(),
        },
        {
          id: 2,
          desc: 'Task 2: Learn Java',
          owner: {
            id: 1,
            name: 'Alex',
            avatar: ''
          },
          dueDate: new Date(),
        },
        {
          id: 2,
          desc: 'Task 2: Learn Java',
          owner: {
            id: 1,
            name: 'Alex',
            avatar: ''
          },
          dueDate: new Date(),
        },
        {
          id: 2,
          desc: 'Task 2: Learn Java',
          owner: {
            id: 1,
            name: 'Alex',
            avatar: ''
          },
          dueDate: new Date(),
        },
        {
          id: 2,
          desc: 'Task 2: Learn Java',
          owner: {
            id: 1,
            name: 'Alex',
            avatar: ''
          },
          dueDate: new Date(),
        }
      ]
    },
    {
      id: 2,
      name: 'In Progress',
      tasks: [
        {
          id: 1,
          desc: 'Task 1: Learn Angular',
          owner: {
            id: 1,
            name: 'Aaron',
            avatar: ''
          },
          dueDate: new Date(),
        },
        {
          id: 2,
          desc: 'Task 2: Learn Java',
          owner: {
            id: 1,
            name: 'Alex',
            avatar: ''
          },
          dueDate: new Date(),
        }
      ]
    },
    {
      id: 3,
      name: 'Completed',
      tasks: [
        {
          id: 1,
          desc: 'Task 1: Learn Angular',
          owner: {
            id: 1,
            name: 'Aaron',
            avatar: ''
          },
          dueDate: new Date(),
        },
        {
          id: 2,
          desc: 'Task 2: Learn Java',
          owner: {
            id: 1,
            name: 'Alex',
            avatar: ''
          },
          dueDate: new Date(),
        }
      ]
    }
  ]

  constructor() { }

  ngOnInit() {
  }

}
