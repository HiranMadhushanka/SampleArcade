import { Component, OnInit } from '@angular/core';
import { SignupComponent } from '../../core/signup/signup.component'
import { MdbModalRef, MdbModalService } from 'mdb-angular-ui-kit/modal';

@Component({
  selector: 'app-loop-details',
  templateUrl: './loop-details.component.html',
  styleUrls: ['./loop-details.component.scss']
})
export class LoopDetailsComponent implements OnInit {

  constructor(private modalService: MdbModalService) { }
  visible=false;

  ngOnInit(){
    
  }

  // modalRef: MdbModalRef<SignupComponent> | undefined;
  
  signup() {
    window.location.assign("https://wavedrive-web.auth.us-east-1.amazoncognito.com/login?client_id=1qhka712ot6v41d87b3mke3j42&response_type=code&scope=aws.cognito.signin.user.admin+email+openid+phone+profile&redirect_uri=https://master.d3b77qft3ie5xs.amplifyapp.com/loops/download/loops/download");
  }

}
