import { ApiPosts } from 'src/app/models/apiposts.model';
import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-posts',
  templateUrl: './dialog-posts.component.html',
  styleUrls: ['./dialog-posts.component.css']
})
export class DialogPostsComponent implements OnInit {
  element: ApiPosts;
  constructor(
    @Inject(MAT_DIALOG_DATA)
    public data: ApiPosts,
    public dialogRef: MatDialogRef<DialogPostsComponent>,
  ) {}


  ngOnInit(): void {
  }

  onCancel(): void {
    this.dialogRef.close();
  }
}
