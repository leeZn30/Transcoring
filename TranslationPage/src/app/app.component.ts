import { Component } from '@angular/core';
import { Projectdata } from './projectdata';
import { HttpClient } from '@angular/common/http';
import { DataService } from './data.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'TranslationPage';
  data$: Projectdata[] = []; // import ProjectData (data.serveice.ts)
  // import ProjectData (data.serveice.ts)
  // postData: File  //type이 File인 변수 postData
  
  // url = `http://192.168.0.50:8000/api/expert/upload/`;  //post 보낼 url 주소
  // json;
  // options = {headers:`multipart/form-data; boundary=<calculated when request is sent>`};

  /*post 인자값으로 url이랑 postData를 넘겨줌. 뒤에 promise 구문은 확실하게 모르겠어서,,ㅜ 아마 url에 있는 
  정보를 찍어보는 용도이지 않을까 싶네*/
  constructor(private dataService: DataService, private http: HttpClient){
    // this.http.post(this.url, this.postData, {headers: this.options}).toPromise().then((data:any) =>{
    //   console.log(data);
    //   this.json = JSON.stringify(data.json);
    // });
  }

  ngOnInit(){
    return this.dataService.getUsers()
      .subscribe(data => {this.data$ = data;
      console.log(this.data$);
      })
  }
}
