import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

interface SpotifyTokenResponse {
  access_token: string,
  token_type: string,
  expires_in: number
}

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {
  private token: string = "";
  private readonly baseUrl = 'https://api.spotify.com/';
  private spotifyTokenUrl = 'https://accounts.spotify.com/api/token';
  private clientId = '15cd4d5679d442d78fe87a6195ff77ed'; // Replace with your Spotify client ID
  private clientSecret = 'c6bdd541c08f4aecb20490b077ce9aa1'; // Replace with your Spotify client secret

  constructor(private http: HttpClient) {
    this.GetToken().subscribe(
      response => {

        this.token = response.access_token;
        console.log('all good:', this.token);

      },
      error => {
        console.error('An error occurred:', error);
      }
    );

    //this.xd("https://api.spotify.com/v1/search?q=remaster%2520track%3ADoxy%2520artist%3AMiles%2520Davis&type=album");
    //this.xd("https://api.spotify.com/v1/search?query=remaster%2520track%3ADoxy%2520artist%3AMiles%2520Davis&type=album&locale=pl-PL%2Cpl%3Bq%3D0.9%2Cen-US%3Bq%3D0.8%2Cen%3Bq%3D0.7&offset=0&limit=20");
    //this.xd("https://api.spotify.com/v1/artists/4Z8W4fKeB5YxbusRsdQVPb");
    //this.xd("https://api.spotify.com/v1/albums/5dN7F9DV0Qg1XRdIgW8rke");
    //this.xd("https://api.spotify.com/v1/tracks/6nTiIhLmQ3FWhvrGafw2zj");
    this.xd("https://api.spotify.com/v1/me");
    this.xd("https://api.spotify.com/v1/me/player/devices");
  }
  async xd(url:string) {
    const sleep = (ms: number) => new Promise(r => setTimeout(r, ms));
    await sleep(1000);
    this.GetDevice(url).subscribe(
      response => {

        console.log('all good:', response);
      },
      error => {
        console.error('An error occurred:', error);
      }
    );
  }
  GetToken(): Observable<SpotifyTokenResponse> {

    const headers = new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded'
    });

    const body = `grant_type=client_credentials&client_id=${this.clientId}&client_secret=${this.clientSecret}`;

    return this.http.post<SpotifyTokenResponse>(this.spotifyTokenUrl, body, { headers });
  }

  GetDevice(url:string) :Observable<any> {
    const headers = new HttpHeaders({
      'authorization': `Bearer BQCI0dNmJtwDuslJudeShjSktPT_ft6A3rAm2Az2utsMK1g2lm74k-u99oaxDy1Q54WsAcHx6fCt17KXbVOGNEgmIWUbY0-s-04W2Rf7lHPq5Y51W5dVwn-hUQf_yY66LmCRx-KaGb3-1BiQ-LLZY9JS8-7E5kP66lxsa_3IOOZFM_x4TDFp1JpA0IAvKH9vL7_mI2uFseNz_shdLoVjmQ`,
      // 'authority': 'api.spotify.com',
      // 'accept':'*/*',
      // 'accept-language':'pl-PL,pl;q=0.9,en-US;q=0.8,en;q=0.7',
      // 'origin':'https://developer.spotify.com',
      // 'referer':'https://developer.spotify.com/',
      // 'sec-ch-ua':'^\^"Chromium^\^";v=^\^"116^\^", ^\^"Not)A;Brand^\^";v=^\^"24^\^", ^\^"Google Chrome^\^";v=^\^"116^\^"',
      // 'sec-ch-ua-mobile':'?0',
      // 'sec-ch-ua-platform':'^\^"Windows^\^"',
      // 'sec-fetch-dest':'empty',
      // 'sec-fetch-mode':'cors',
      // 'sec-fetch-site':'same-site',
      // 'user-agent':'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/116.0.0.0 Safari/537.36',
    });
    return this.http.get(url, { headers: headers });
    
  }
  
}