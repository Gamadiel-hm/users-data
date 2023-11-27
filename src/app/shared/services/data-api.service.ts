import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UsersData } from 'src/app/core/models/userData';

@Injectable({
  providedIn: 'root',
})
export class DataApiService {
  apiUrl = 'https://randomuser.me/api/?page=';
  results = '&results=10';
  seed = '&seed=abc';

  constructor(private http: HttpClient) {}

  getData(page: number) {
    return this.http.get<UsersData>(
      `${this.apiUrl + page + this.results + this.seed}`
    );
  }
}
