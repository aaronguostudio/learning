import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-confirm-dialog',
  template: `
    <h2 class="title" mat-dialog-title>{{title}}</h2>
    <div mat-dialog-content>
      {{content}}
    </div>
    <div class="flex-center" mat-dialog-actions>
      <button
        mat-stroked-button
        (click)="onClick(result)"
      >Cancel</button>
      <button
        style="margin-left: 10px;"
        mat-stroked-button
        (click)="onClick(result)"
      >
        Confirm
      </button>
    </div>
  `,
  styles: []
})
export class ConfirmDialogComponent implements OnInit {

  title = '';
  content= '';
  constructor(
    private dialogRef: MatDialogRef<ConfirmDialogComponent>,
    @Inject(MAT_DIALOG_DATA) private data
  ) {}

  ngOnInit() {
    this.title = this.data.title;
    this.content = this.data.content;
  }

  onClick(result: boolean) {
    this.dialogRef.close(result);
  }

}
