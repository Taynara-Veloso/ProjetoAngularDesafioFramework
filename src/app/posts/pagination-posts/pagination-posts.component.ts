import { ApiPostsService } from './../api-posts.service';
import { MatPaginator } from '@angular/material/paginator';
import { OnInit, Component, ViewChild} from '@angular/core';
import { MatTable, MatTableDataSource} from '@angular/material/table';
import { ApiPosts } from 'src/app/models/apiposts.model';
import { MatDialog } from '@angular/material/dialog';
import { DialogPostsComponent } from '../dialog-posts/dialog-posts.component';

@Component({
  selector: 'app-pagination-posts',
  templateUrl: './pagination-posts.component.html',
  styleUrls: ['./pagination-posts.component.css']
})
export class PaginationPostsComponent implements OnInit {
  @ViewChild(MatTable)
  table: MatTable<ApiPosts>
  ELEMENT_DATA: ApiPosts[] = [];
  post: ApiPosts;

  displayedColumns: string[] = ['id', 'title', 'body', 'editar'];
  dataSource = this.ELEMENT_DATA; //new MatTableDataSource<ApiPosts>(this.ELEMENT_DATA);
  dataSource1 = new MatTableDataSource<ApiPosts>(this.ELEMENT_DATA);

  @ViewChild(MatPaginator, { static: true })
  paginator!: MatPaginator;
  album: any;

  constructor(public dialog: MatDialog, public service: ApiPostsService){}

  ngOnInit() {
    this.dataSource1.paginator = this.paginator;

    this.getPostsApi();
  };
  public getPostsApi(){
    let resp=this.service.getPosts();
    resp.subscribe(report => this.dataSource1.data=report as ApiPosts[]);

  }
  EditarPost(post: ApiPosts){

  }
  deletarPost(id: number){
    var resposta = window.confirm("Deseja mesmo deletar este item?");
    if(resposta){
      this.service.apagarPost(id).subscribe(
        data =>{
          console.log("deletado com sucesso")
        }, error => {
          console.log("houve um erro")
        }
      )
    }
  }
  openDialog(element: ApiPosts | null): void{
    const dialogRef = this.dialog.open(DialogPostsComponent, {
      width: '250px',
      data: element === null ? {
        userId: null,
        id: '',
        title: '',
        body: '',

      } : element
    });

    dialogRef.afterClosed().subscribe(result => {
      if(result !== undefined){
        this.dataSource.push(result);
        this.table.renderRows();
      }
    });
  }
}
