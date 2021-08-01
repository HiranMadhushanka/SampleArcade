import { Component, OnInit } from '@angular/core';
import { SignupComponent } from '../../core/signup/signup.component'
import { MdbModalRef, MdbModalService } from 'mdb-angular-ui-kit/modal';
@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit {
  constructor(private modalService: MdbModalService) { }

  visible=false;
  ngOnInit(): void {
  }

  modalRef: MdbModalRef<SignupComponent> | undefined;
  
  openModal() {
    this.modalRef = this.modalService.open(SignupComponent)
  }


}
