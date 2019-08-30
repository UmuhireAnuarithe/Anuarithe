import { Component, OnInit } from '@angular/core';

// @Component({
//   selector: 'app-github-profile',
//   templateUrl: './github-profile.component.html',
//   styleUrls: ['./github-profile.component.css']
// })
// export class GithubProfileComponent implements OnInit {

//   constructor() { }

//   ngOnInit() {
//   }

// }
import { UserRequestService } from '../user-http/user-request.service';
import { User } from '../user';
// import { Repo } fro m '../repo-class/repo';
import   { Repo }  from '../repo';

@Component({
  selector: 'app-github-profile',
  templateUrl: './github-profile.component.html',
  providers: [UserRequestService],
  styleUrls: ['./github-profile.component.css']
})
export class GithubProfileComponent implements OnInit {

  person:User;
  arrayRepo:Repo[];
  // username:any;

  constructor(private userService: UserRequestService) { }

  getResponse(username) {
    this.userService.userRequest(username);
    this. person = this.userService.user;
    this. person.showRepos = false;

    console.log("Got User Response");
    console.log(this. person);

    this.userService.repoRequest(username);
    this.arrayRepo = this.userService.arrayRepo;

    // console.log("Got Repos Response");
    // console.log(this.arrayRepo);
  }

  getRepos() {
    // this.userService.repoRequest(username);
    this.arrayRepo = this.userService.arrayRepo;

    console.log("Got Repos Response");
    console.log(this.arrayRepo);

  }





  toggleRepos(){
    this.users.showRepos = !this.users.showRepos;
    console.log("Toggle Repos");
  }

  ngOnInit() {

  }

}

