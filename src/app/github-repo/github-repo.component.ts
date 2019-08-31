import { Component, OnInit,Input } from '@angular/core';
import  {  Repo }  from  '../repo';
import { UserRequestService } from '../user-http/user-request.service';

@Component({
  selector: 'app-github-repo',
  templateUrl: './github-repo.component.html',
  styleUrls: ['./github-repo.component.css']
})
export class GithubRepoComponent implements OnInit {

  // constructor() { }
  @Input() repo:Repo;

  // constructor(privare userService: UUserRequestService) { }

  constructor(private userService: UserRequestService) { }

  ngOnInit() {
  }

}
