
import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
} from '@angular/router';
import { DataService } from 'src/app/Service/data.service';
import { MyProfile } from '../profile/myProfile/myProfile.component';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate{
  constructor(private router: Router, private auth: DataService) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    if (this.auth.userData === undefined) {
      this.router.navigate(['']);
    }
    return this.auth.checkToken()
  }



}

