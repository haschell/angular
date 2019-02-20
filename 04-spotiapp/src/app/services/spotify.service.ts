import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http: HttpClient) { }

  getNewReleases() {

    const headers = new HttpHeaders ({
      Authorization: 'Bearer BQDjvlbFhWO5voBMEPn8GoIKtpho4WQcVpvgaO3_8S9nmAzO7UypHXbxJCVd0W1mB0QkzMOjtqF1J2odzE0'
    });

    return this.http.get('https://api.spotify.com/v1/browse/new-releases', {headers});
  }
}


