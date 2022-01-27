import { Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class HttpService {

    constructor(private http: HttpClient) { }

    getBrokers() {
        return this.http.get('http://localhost:8080/brokers');
    }

    getStocks() {
        return this.http.get('http://localhost:8080/stocks');
    }

    getParams() {
        return this.http.get('http://localhost:8080/params');
    }

    updateBrokers(brokers: any){
        return this.http.post('http://localhost:8080/brokers', brokers);
    }

    updateStocks(stocks: any){
        return this.http.post('http://localhost:8080/stocks', stocks);
    }

    editSettings(data: any){
        return this.http.post('http://localhost:8080/editSettings', data);
    }

    addStock(data: any){
        return this.http.post('http://localhost:8080/addStock', data);
    }

    addBroker(data: any){
        return this.http.post('http://localhost:8080/addBroker', data);
    }
}
