import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  clientId: string = "15cd4d5679d442d78fe87a6195ff77ed";
  clientSecret: string = "c6bdd541c08f4aecb20490b077ce9aa1";
  redirectUrl: string = "http://localhost:4200/callback";
  authorizeUrl: string = "https://accounts.spotify.com/authorize?";
  constructor(
    private httpClient: HttpClient
  ) { }

  login() {
    var scope = 'user-read-private user-read-email';
    // var app = express();
    // app.get('/login', (req: Request, res: Response) => {
    //   const state = generateRandomString(16);
    //   const scope = 'user-read-private user-read-email';

    var params = new HttpParams()
      .set('response_type', 'code')
      .set('client_id', this.clientId)
      .set('scope', scope)
      .set('redirect_uri', this.redirectUrl)
      .set('state', this.generateRandomString(16));

    this.httpClient.get(this.authorizeUrl, { params, observe: 'response', responseType: 'text' })
      .subscribe(
        response => {

            var redirectUrl1 = new URL(response.headers.get('code') || "");
            console.log("redirectUrl1" + redirectUrl1);
            var popup = window.open(this.redirectUrl, '_blank', 'width=600,height=400');
            if (popup) {
              popup.focus();
            } else {
              alert('Popup blocked. Please allow popups for this site.');
            }
          
        },
        error => {
          var redirectUrl1 = new URL(error.headers.get('code') || "");
            console.log("redirectUrl1" + redirectUrl1);
            var popup = window.open(this.redirectUrl, '_blank', 'width=600,height=400');
            if (popup) {
              popup.focus();
            } else {
              alert('Popup blocked. Please allow popups for this site.');
            }
          console.error('Error:', error);
        }
      );
    // this.httpClient.get(this.authorizeUrl, { params })
    // .subscribe( {
    //   error: (e) => console.error(e),
    //   complete: () => 
    //   {
    //       const popup = window.open(this.redirectUrl, '_blank', 'width=600,height=400');
    //       if (popup) {
    //         popup.focus();
    //       } else {
    //         alert('Popup blocked. Please allow popups for this site.');
    //       }
    //     }
    //   }
    // });
  }

  private generateRandomString(length: number): string {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    let result = '';

    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      result += characters[randomIndex];
    }

    return result;
  }
}
