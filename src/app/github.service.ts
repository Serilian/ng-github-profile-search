import {HttpClient, HttpParams} from '@angular/common/http';
import {Injectable} from '@angular/core';
import 'rxjs-compat/add/operator/map';

@Injectable()
export class GithubService {

  private userName: string;
  client_id = 'e1e50d595d4b48309841';
  client_secret = '291a6d5cefd56d657ddf133bcb7b028b8c30d435';

  constructor(private httpClient: HttpClient) {
    console.log('GitHub service ready');
  }

  getUsername() {
    return this.httpClient.get('https://api.github.com/users/' + this.userName + '?client_id=' + this.client_id + '&client_secret=' + this.client_secret);
  }

  getRepos() {
    return this.httpClient.get('https://api.github.com/users/' + this.userName + '/repos' + '?client_id=' + this.client_id + '&client_secret=' + this.client_secret);
  }

  updateUsername(name: string) {
    this.userName = name;
  }

}
