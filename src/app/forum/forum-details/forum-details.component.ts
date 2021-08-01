import { Component, OnInit } from '@angular/core';
import { AddForumComponent } from '../add-forum/add-forum.component'
import { MdbModalRef, MdbModalService } from 'mdb-angular-ui-kit/modal';

@Component({
  selector: 'app-forum-details',
  templateUrl: './forum-details.component.html',
  styleUrls: ['./forum-details.component.scss']
})
export class ForumDetailsComponent implements OnInit {

  constructor(private modalService: MdbModalService) { }

  ngOnInit(): void {
  }

  modalRef: MdbModalRef<AddForumComponent> | undefined;
  
  openModal() {
    this.modalRef = this.modalService.open(AddForumComponent);
  }

}
