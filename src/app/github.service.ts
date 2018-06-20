import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import 'rxjs-compat/add/operator/map';

@Injectable()
export class GithubService {

  private userName: string;

  constructor(private httpClient: HttpClient) {
    console.log('GitHub service ready');
    this.userName = 'Serilian';
  }

  getUsername() {
    return this.httpClient.get('http://api.github.com/users/' + this.userName);

  }

}
