import {Component} from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  totalTime: string | null = '';
  loading = false;

  constructor(private httpClient: HttpClient) {
  }

  startDemo(withServiceWorker: boolean) {
    this.totalTime = null;
    const startTime = new Date().getTime();

    const count = 9;

    for (let i = 0; i < count; i++) {
      const subscription = this.httpClient.get('/delay/2000', {
        headers: withServiceWorker ? {} : {
          'ngsw-bypass': ''
        }
      }).subscribe();
      subscription.unsubscribe();
    }

    this.httpClient.get('/delay/2000').subscribe(() => {
      this.totalTime = `${(new Date().getTime() - startTime) / 1000}s`;
    });
  }

}
