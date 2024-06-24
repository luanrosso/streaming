import { Http } from './http';

export abstract class Repository {
  protected http: Http;

  constructor(uri?: string) {
    this.http = new Http(uri);
  }

  protected isOK(status: number): boolean {
    return status >= 200 && status < 300;
  }
}
