import { Component, OnInit,Input} from '@angular/core';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css'
            ,'../app.component.css']
})
export class FirstComponent implements OnInit {

  constructor() { }
  @Input("data") data;
  ngOnInit(): void {
  }
  textmuted(i){
    if(i>3)
    {
      return "text-muted";
    }
    else{
      return;
    }
  }
  checked(i)
  {
    if(i<=3)
    {
      return true
    }
    else{
      return false
    }
  }

}
