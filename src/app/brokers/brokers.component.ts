import {Component, OnInit} from '@angular/core';
import {HttpService} from "../http.service";

class Broker{
    public name: string;
    public budget: number;

    constructor(name: string, budget: number) {
        this.name = name;
        this.budget = budget;
    }
}

@Component({
    selector: 'brokers',
    templateUrl: './brokers.component.html',
    styleUrls: ['./brokers.component.css']
})
export class BrokersComponent implements OnInit {
    title = 'brokers';
    public brokers: Broker[];
    public addForm: any = {
        name: "",
        budget: ""
    }
    public currentBroker: string = "";

    constructor(private httpService: HttpService) {
        this.brokers = [];
    }

    ngOnInit() {
        this.httpService.getBrokers().subscribe((data: any) => {
            this.brokers = data;
            console.log(this.brokers);
        });
    }

    delete(name: string) {
        const index = this.brokers.findIndex(function (broker: Broker ) {
            return broker.name === name;
        });
        this.brokers.splice(index, 1);
        this.httpService.updateBrokers(this.brokers).subscribe();
    }

    setCurrent(name: any){
        this.currentBroker = name;
    }

    sendForm(){
        if (this.currentBroker){
            const index = this.brokers.findIndex((broker: Broker) => {
                return broker.name === this.currentBroker;
            });
            this.brokers[index].name = this.addForm.name;
            this.brokers[index].budget = this.addForm.budget;
            this.httpService.updateBrokers(this.brokers).subscribe();
        }else {
            let broker: Broker = new Broker(this.addForm.name, +this.addForm.budget);
            this.brokers.push(broker)
            this.httpService.addBroker(broker).subscribe();
        }
    }
}
