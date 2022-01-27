import {Component, OnInit} from '@angular/core';
import {HttpService} from "../http.service";

class Stock {
    public id: number;
    public title: string;
    public distribution: string;
    public max_price: number;
    public amount: number;
    public start_price: number;

    constructor(id: number, title: string, distribution: string, max_price: number,
                amount: number, start_price: number) {
        this.id = id;
        this.title = title;
        this.distribution = distribution;
        this.max_price = max_price;
        this.amount = amount;
        this.start_price = start_price;
    }
}


@Component({
    selector: 'stocks',
    templateUrl: './stocks.component.html',
    styleUrls: ['./stocks.component.css']
})
export class StocksComponent implements OnInit {
    title = 'stocks';
    public stocks: Stock[];
    public currentId: number = -1;
    public addForm: any = {
        id: "",
        title: "",
        distribution: "",
        max_price: "",
        start_price: "",
        amount: ""
    }

    constructor(private httpService: HttpService) {
        this.stocks = [];
    }

    ngOnInit() {
        this.httpService.getStocks().subscribe((data: any) => {
            this.stocks = data;
            console.log(this.stocks);
        });
    }

    delete(id: number) {
        const index = this.stocks.findIndex(function (stock: Stock) {
            return +stock.id === id;
        });
        this.stocks.splice(index, 1);
        this.httpService.updateStocks(this.stocks).subscribe();
    }

    sendForm(){
        if(this.currentId < 0) {
            let id: number = 0
            if (this.stocks.length > 0)
                id = +this.stocks[this.stocks.length - 1].id + 1
            let stock: Stock = new Stock(id,
                this.addForm.title,
                this.addForm.distribution,
                this.addForm.max_price,
                this.addForm.amount,
                this.addForm.start_price
            )
            this.stocks.push(stock)
            this.httpService.addStock(stock).subscribe()
        } else {
            const index = this.stocks.findIndex((stock: Stock) => {
                return +stock.id === this.currentId;
            });
            this.stocks[index].title = this.addForm.title;
            this.stocks[index].distribution = this.addForm.distribution;
            this.stocks[index].max_price = this.addForm.max_price;
            this.stocks[index].amount = this.addForm.amount;
            this.stocks[index].start_price = this.addForm.start_price;
            this.httpService.updateStocks(this.stocks).subscribe();
        }
    }

    setCurrent(id: number){
        this.currentId = id;
    }
}
