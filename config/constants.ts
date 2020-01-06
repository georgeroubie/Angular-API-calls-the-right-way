// Angular Modules
import { Injectable } from '@angular/core';

@Injectable()
export class Constants {
    public readonly API_ENDPOINT: string = 'https://angularwebappapi-dev.azurewebsites.net/api';
    public readonly API_MOCK_ENDPOINT: string = 'https://next.json-generator.com/api/json/get';
}
