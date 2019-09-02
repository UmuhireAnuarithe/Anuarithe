import { Injectable } from '@angular/core';
import {  Repo}  from  '../repo';
import {  User}  from '../user';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserRequestService {


  user: User;
  repo: Repo;
  arrayRepo:Repo[];
  constructor(private http:HttpClient) {
    this.user = new User("", "", "", 0, 0, 0, "");
    this.repo = new Repo("", "", "");
  }


  private userInput = "";


  userRequest(userInput) {

    this.http.get("https://api.github.com/users/" + userInput + "?access_token=0b3f87f65eea48d8fffe65961c20f389af365257").subscribe((response)=>{
    const userData=response;

    this.user.photoUrl = userData["avatar_url"];
    this.user.userProfile = userData["login"];
    this.user.bio = userData["bio"];
    this.user.numRepos = userData["public_repos"];
    this.user.followers = userData["followers"];
    this.user.following = userData["following"];
    this.user.created = userData["created_at"];

    return this.user;
  })


  } //end userRequest



  repoRequest(userInput) {

    this.http.get("https://api.github.com/users/" + userInput + "/repos?access_token=0b3f87f65eea48d8fffe65961c20f389af365257").subscribe((response) =>{
      const reposData= response;

      this.arrayRepo = [];

      for (let index=0; index<reposData["length"]; index++) {
        this.repo = new Repo ("", "", "");
        this.repo.appName = reposData[index]["name"];
        this.repo.repoLink = reposData[index]["html_url"];
        this.repo.description = reposData[index]["description"];
        this.arrayRepo.push(this.repo);
      }
      return this.arrayRepo;
    })


  } //end repoRequest

}
//   constructor() { }
// }
