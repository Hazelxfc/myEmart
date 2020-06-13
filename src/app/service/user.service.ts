import { Injectable } from '@angular/core';
import { HttpService} from 'src/app/service/http.service';
import { Observable, BehaviorSubject, of } from 'rxjs';
import { User } from '../model/user';


@Injectable({
  providedIn: 'root'
})
export class UserService {
  authenticated = false;
  user: BehaviorSubject<User> = new BehaviorSubject(null);
  userObservable = this.user.asObservable();
  // admin: BehaviorSubject<boolean> = new BehaviorSubject(false);
  type: BehaviorSubject<number> = new BehaviorSubject(1);
 // adminObservable = this.admin.asObservable();
 typeObservable = this.type.asObservable();


constructor(  private httpService: HttpService) { }

setUser(user: User) {
  this.user.next(user);
  this.type.next(user.type);
}

getUser(): Observable<User> {
  return this.userObservable;
}

isAdmin(): Observable<number> {
  return this.typeObservable;
}

isAuthenticated(): boolean {
  return this.authenticated;
}

setUserInfo(userInfo) {
  this.setUser(userInfo['user']);
  this.httpService.addHeader('Access-Token', userInfo['accessToken']);
  this.authenticated = true;
}

login(loginInfo: object): Observable<any[]> {
  const url = 'user/login.do';
  return this.httpService.post(url, loginInfo).pipe();
}

register(user: any): Observable<any[]> {
  const url = 'user/register.do';
  return this.httpService.post(url, user).pipe();
}

getUserById(userId: any): Observable<any[]>{
  const url = 'user/admin/find-by-id/' + userId;
  return this.httpService.get(url).pipe();
}

updateUser(user: any): Observable<any[]> {
  const url = 'user/admin/edit';
  return this.httpService.post(url, user).pipe();
}


}
