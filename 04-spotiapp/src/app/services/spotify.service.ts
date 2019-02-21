import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http: HttpClient) { }

  getQuery( query: string ) {
    const url = `https://api.spotify.com/v1/${query}`;

    const headers = new HttpHeaders ({
      Authorization: 'Bearer BQC8zyFWkkPQyz7Cz-PjVvZalhhZUXlek0QlhYuSqcNxh5vi1K2FT7Lw5YpZKV1xZ0AawbEfAS6-NSB41ow'
    });
    return this.http.get(url, {headers});
  }

  getNewReleases() {
    return this.getQuery('browse/new-releases').pipe( map( data => data['albums'].items));
  }

  getArtista(termino: string) {
    return this.getQuery(`search?q=${ termino }&type=artist&limit=15`).pipe( map( data => data['artists'].items));
  }
}


