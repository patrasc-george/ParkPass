import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ConfigService {
  private configSubject = new BehaviorSubject<any>(null);
  config$ = this.configSubject.asObservable();

  constructor(private http: HttpClient) {}

  loadConfig(): Observable<any> {
    return this.http.get('/assets/config.json');
  }

  setConfig(config: any): void {
    this.configSubject.next(config);
  }

  get(key: string): any {
    return this.configSubject.value ? this.configSubject.value[key] : null;
  }
}
