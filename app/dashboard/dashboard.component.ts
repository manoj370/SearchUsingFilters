import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Subject } from 'rxjs';
import { ServiceService } from '../service.service';
import { filter, takeUntil } from 'rxjs/operators';
import { NavigationEnd, Router, RouterEvent } from '@angular/router';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  providers: [
    ServiceService // added class in the providers
  ]
})
export class DashboardComponent implements OnInit,OnDestroy  {
  names: any;
  searchForm: FormGroup;
  value: any;
  public filterdata!: string;
  selectedname: any;
  subscribe: Subject<any> = new Subject<any>();
  navigationSubscription: any;
  constructor(private service:ServiceService,private fb:FormBuilder,private router:Router) {
    this.searchForm=this.fb.group({
      search:['']
    })
   }
 

  ngOnInit(): void {
    this.getCall();
    
  }
  search(value:any){
this.value=JSON.stringify(this.searchForm.value);
  }
  getCall(){
    this.service.sendGetRequest().pipe(takeUntil(this.subscribe)).subscribe((res:any)=>{
      console.log(res.items);
      this.names =res.items;
    },error=>{
      console.log(error);
    })
   
  }
  SelectedName(value:any){
    console.log(value.name)
    this.selectedname=value.name;
  }
  ngOnDestroy(): void {
    this.subscribe.next();
    this.subscribe.complete();
    if (this.navigationSubscription) {  
      this.navigationSubscription.unsubscribe();
   }

  }
}
