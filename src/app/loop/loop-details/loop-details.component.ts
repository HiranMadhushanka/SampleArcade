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

  modalRef: MdbModalRef<SignupComponent> | undefined;
  
  openModal() {
    this.modalRef = this.modalService.open(SignupComponent)
  }

}
