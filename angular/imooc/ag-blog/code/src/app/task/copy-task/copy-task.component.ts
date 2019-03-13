import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog'

@Component({
  selector: 'app-copy-task',
  templateUrl: './copy-task.component.html',
  styleUrls: ['./copy-task.component.styl']
})
export class CopyTaskComponent implements OnInit {

  lists: any[];

  constructor(
    @Inject(MAT_DIALOG_DATA) private data,
    private dialogRef: MatDialogRef<CopyTaskComponent>
  ) { }

  ngOnInit() {
    this.lists = this.data.lists;
  }

  onSave() {
    this.dialogRef.close('got')
  }

}
