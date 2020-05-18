import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { SideBar } from '../models/SideBar';

@Injectable()

export class SidebarService {
  constructor(public http: HttpClient) {}

  getSideBarMenu(): Observable<SideBar[]> {
    return this.http.get<SideBar[]>(environment.apiUrl + 'SideBar');
  }
}
