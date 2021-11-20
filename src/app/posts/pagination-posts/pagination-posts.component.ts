import { ApiPostsService } from './../api-posts.service';
import { MatPaginator } from '@angular/material/paginator';
import { OnInit, Component, ViewChild} from '@angular/core';
import { MatTableDataSource} from '@angular/material/table';
import { ApiPosts } from 'src/app/models/apiposts.model';

@Component({
  selector: 'app-pagination-posts',
  templateUrl: './pagination-posts.component.html',
  styleUrls: ['./pagination-posts.component.css']
})
export class PaginationPostsComponent implements OnInit {
  ELEMENT_DATA: ApiPosts[] = [];

  displayedColumns: string[] = ['id', 'title', 'body'];
  dataSource = new MatTableDataSource<ApiPosts>(this.ELEMENT_DATA);

  @ViewChild(MatPaginator, { static: true })
  paginator!: MatPaginator;
  constructor(private service: ApiPostsService){}

  ngOnInit() {
    this.dataSource.paginator = this.paginator;

    this.getPostsApi();
  };
  public getPostsApi(){
    let resp=this.service.getPosts();
    resp.subscribe(report => this.dataSource.data=report as ApiPosts[]);

  }

}
