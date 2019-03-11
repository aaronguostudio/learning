import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog'

@Component({
  selector: 'app-new-blog',
  templateUrl: './new-blog.component.html',
  styleUrls: ['./new-blog.component.styl']
})
export class NewBlogComponent implements OnInit {

  constructor(
    @Inject(MAT_DIALOG_DATA) private data,
    private dialogRef: MatDialogRef<NewBlogComponent>
  ) {
    //
  }

  ngOnInit() {
    console.log('>', JSON.stringify(this.data))
  }

  onSave () {
    this.dialogRef.close('got')
  }

}
