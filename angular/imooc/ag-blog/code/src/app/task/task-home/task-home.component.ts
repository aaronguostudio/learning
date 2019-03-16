import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { NewTaskComponent } from '../new-task/new-task.component';
import { CopyTaskComponent } from '../copy-task/copy-task.component';
import { ConfirmDialogComponent } from 'src/app/shared/confirm-dialog/confirm-dialog.component';
import { NewTaskListComponent } from '../new-task-list/new-task-list.component';

@Component({
  selector: 'app-task-home',
  templateUrl: './task-home.component.html',
  styleUrls: ['./task-home.component.styl'],
  changeDetection: ChangeDetectionStrategy.OnPush
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
          completed: true,
          owner: {
            id: 1,
            name: 'Aaron',
            avatar: ''
          },
          dueDate: new Date(),
          reminder: true,
          priority: 1,
        },
        {
          id: 2,
          desc: 'Task 2: Learn Java',
          completed: false,
          owner: {
            id: 1,
            name: 'Alex',
            avatar: ''
          },
          dueDate: new Date(),
          priority: 2,
        },
        {
          id: 3,
          desc: 'Task 2: Learn Java',
          completed: false,
          owner: {
            id: 1,
            name: 'Alex',
            avatar: ''
          },
          dueDate: new Date(),
          priority: 3,
        },
        {
          id: 4,
          desc: 'Task 2: Learn Java',
          completed: false,
          owner: {
            id: 1,
            name: 'Alex',
            avatar: ''
          },
          dueDate: new Date(),
          priority: 3,
        },
        {
          id: 5,
          desc: 'Task 2: Learn Java',
          completed: false,
          owner: {
            id: 1,
            name: 'Alex',
            avatar: ''
          },
          dueDate: new Date(),
          priority: 3,
        },
        {
          id: 6,
          desc: 'Task 2: Learn Java',
          completed: false,
          owner: {
            id: 1,
            name: 'Alex',
            avatar: ''
          },
          dueDate: new Date(),
          priority: 3,
        },
        {
          id: 7,
          desc: 'Task 2: Learn Java',
          completed: false,
          owner: {
            id: 1,
            name: 'Alex',
            avatar: ''
          },
          dueDate: new Date(),
          priority: 3,
        },
        {
          id: 8,
          desc: 'Task 2: Learn Java',
          completed: false,
          owner: {
            id: 1,
            name: 'Alex',
            avatar: ''
          },
          dueDate: new Date(),
          priority: 3,
        },
        {
          id: 9,
          desc: 'Task 2: Learn Java',
          completed: false,
          owner: {
            id: 1,
            name: 'Alex',
            avatar: ''
          },
          dueDate: new Date(),
          priority: 3,
        },
        {
          id: 10,
          desc: 'Task 2: Learn Java',
          completed: false,
          owner: {
            id: 1,
            name: 'Alex',
            avatar: ''
          },
          dueDate: new Date(),
          priority: 3,
        },
        {
          id: 11,
          desc: 'Task 2: Learn Java',
          completed: false,
          owner: {
            id: 1,
            name: 'Alex',
            avatar: ''
          },
          dueDate: new Date(),
          priority: 3,
        },
        {
          id: 12,
          desc: 'Task 2: Learn Java',
          completed: false,
          owner: {
            id: 1,
            name: 'Alex',
            avatar: ''
          },
          dueDate: new Date(),
          priority: 3,
        },
        {
          id: 13,
          desc: 'Task 2: Learn Java',
          completed: false,
          owner: {
            id: 1,
            name: 'Alex',
            avatar: ''
          },
          dueDate: new Date(),
          priority: 3,
        },
        {
          id: 14,
          desc: 'Task 2: Learn Java',
          completed: false,
          owner: {
            id: 1,
            name: 'Alex',
            avatar: ''
          },
          dueDate: new Date(),
          priority: 3,
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
          completed: false,
          owner: {
            id: 1,
            name: 'Aaron',
            avatar: ''
          },
          dueDate: new Date(),
          priority: 1,
        },
        {
          id: 2,
          desc: 'Task 2: Learn Java',
          completed: false,
          owner: {
            id: 1,
            name: 'Alex',
            avatar: ''
          },
          dueDate: new Date(),
          priority: 2,
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
          completed: false,
          owner: {
            id: 1,
            name: 'Aaron',
            avatar: ''
          },
          dueDate: new Date(),
          priority: 1,
        },
        {
          id: 2,
          desc: 'Task 2: Learn Java',
          completed: false,
          owner: {
            id: 1,
            name: 'Alex',
            avatar: ''
          },
          dueDate: new Date(),
          priority: 2,
        }
      ]
    }
  ]

  constructor(
    private dialog: MatDialog,
    private cd: ChangeDetectorRef
  ) { }

  ngOnInit() {
  }

  launchNewTaskDialog() {
    this.dialog.open(NewTaskComponent, {
      data: {
        title: 'New Task'
      }
    });
  }

  launchEditTaskListNameDialog() {
    this.dialog.open(NewTaskListComponent, {
      data: {
        title: 'Edit List Name'
      }
    })
  }

  launchMoveTaskDialog() {
    this.dialog.open(CopyTaskComponent, {data: {
      lists: this.lists
    }});
  }

  launchUpdateTaskDialog(task) {
    this.dialog.open(NewTaskComponent, {
      data: {
        title: 'Update Task',
        task
      }
    });
  }

  launchDeleteTaskDialoa() {
    this.dialog.open(ConfirmDialogComponent, {
      data: {
        title: 'Delete List',
        content: 'Are you sure to delete this task?'
      }
    })
  }

  onAddListClick () {
    this.dialog.open(NewTaskListComponent, {
      data: {
        title: 'New Task List'
      }
    })
  }

}
