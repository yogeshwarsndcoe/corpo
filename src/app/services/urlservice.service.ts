/* Service to set server url to which API service is executing*/

import { Injectable } from '@angular/core';

@Injectable()
export class UrlserviceService {
  constructor() { }
public BASE_URL: string = 'http://127.0.0.1:8000/csautomation/';
}
