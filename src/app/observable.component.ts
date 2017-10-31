import {Component} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {User} from './user';
//import {USER_DATA} from './mock';
import {UserService} from './user.service';
import { Ncourse }    from './ncourse';
@Component({


	selector:'observe-comp',
	templateUrl:'app/template/observable.component.html'
})
export class ObservableComponent{
  /*data: Observable<Array<number>>;
  values :number[]=[100];
unsub :any;
  stopObserver(){
  	this.unsub.unsubscribe();
  }

  startObserver(){
  	this.data= new Observable((observer:any)=>{
            setTimeout(()=>observer.next(101),1000);
            setTimeout(()=>observer.next(102),2000);
            setTimeout(()=>observer.next(103),3000);
            setTimeout(()=>observer.next(104),4000);
            setTimeout(()=>observer.next(105),5000);
            setTimeout(()=>observer.complete(),6000);
  	});
  	this.data.subscribe((value:any)=>{this.values.push(value);

  	})
  }*/

 constructor(private userService: UserService){}

  courses: User[];

//   values:Ncourse[];
  //val:object[];   
      
   ngOnInit(){
          
          this.userService.getUserData()
          .subscribe((response=>this.courses=response));
}
  
 
     // addCourse(add:any) {

                 
                
                  /*this.courses.courseName.push(add.controls.coursename.value);
                    this.courses.courseDuration.push(add.controls.cduration.value);
                    this.courses.coursePrice.push(add.controls.cduration.value);*/


                 // }
                 addCourse(cn:any,cd:number,cp:number) {
                 

              /*this.courses.push(cn,cd,cp);
                  this.courses.push(cn,cd,cp);
                  this.courses.courseName.push(cd);
                    this.courses.courseDuration.push(cd);
                    this.courses.coursePrice.push(cp);*/
                    this.courses.push(<User> {
                      courseName: cn,
                      coursePrice: cp,
                      courseDuration: cd
                    });
                    console.log(this.courses);
                   // this.val.push(cn);
                     
                      
                 }

                    
          
        
        
        searchCourse(cn:any){
          var c=0;
          for(let course of this.courses){
                    if(course.courseName==cn){
                         alert("Course Duration:"+course.courseDuration);
                         c++;
                    }
          }
          if(c==0){
            alert("No course available for that duration");
          }
        }
      }
      /* interface arr{
       
              courseName:string;
              courseDuartion:number;
              coursePrice:number;
       }
      */