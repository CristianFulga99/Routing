import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

//Dichiaro che il servizio è iniettabile agli altri componenti a partire dal componente root
@Injectable({
  providedIn: 'root'
})
export class SpotifyService {
   //url per oauth: https://developer.spotify.com/console/get-search-item/
  //Ottengo il modulo HttpClient
  constructor(private http: HttpClient) { }

  searchTrack(query: string) {
    const url = `https://api.spotify.com/v1/search?q=${query}&type=track`;
    const headers = new HttpHeaders({
      Authorization:
        'Bearer BQAj7iMQYKhTHW2V5iFj26uf28jh5Mj-2R6M6K1_H3I0IrpsGVLJ27IuuGe3NGZnX1RPs9FwqoOMSL9cDbYbKmeZQM-JD4Ch_dOGHt4xEofeLUwoNbPY7-m1oQi2kyJYoDo85aV-PKkMqu6B6emu5J8JfXbAfJB62TU'
    });

    let obsTracks = this.http.get(url, { headers });
    return obsTracks;
 //Ritorno un observable ai componenti che richiedono il servizio
  }
}
