import {Component, OnInit} from '@angular/core';
import {GithubService} from '../github.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  userName = 'Not specified';

  constructor(private gitService: GithubService) {
    this.gitService.getUsername().subscribe(user => {
      console.log(user);
    });
  }

  ngOnInit() {
  }

}
