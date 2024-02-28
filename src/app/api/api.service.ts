import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import axios, { Axios } from 'axios';
import {
  BBosses,
  BoostableBossList,
} from './interfaces/boostaleboss.interface';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor() {}

  async getBoostableBoss(): Promise<BBosses> {
    const urlBoostableBoss = 'https://dev.tibiadata.com/v4/boostablebosses';
    const response = await axios.get(urlBoostableBoss);
    return response.data;
  }

  async getBoostableBossList(): Promise<BoostableBossList> {
    const urlBoostableBoss = 'https://dev.tibiadata.com/v4/boostablebosses';
    const response = await axios.get(urlBoostableBoss);
    return response.data as BoostableBossList;
  }
}
