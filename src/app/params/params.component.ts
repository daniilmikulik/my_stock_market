import {Component, OnInit, ViewChild} from '@angular/core';
import {HttpService} from "../http.service";

class Params {
    public start_time;
    public end_time;
    public interval;

    constructor(start_time: string, end_time: string, interval: string) {
        this.start_time = start_time;
        this.end_time = end_time;
        this.interval = interval;
    }
}

@Component({
    selector: 'params',
    templateUrl: './params.component.html',
    styleUrls: ['./params.component.css']
})
export class ParamsComponent implements OnInit {
    title = 'params';

    public params: Params;
    public editForm: any = {
        start_time: '',
        end_time: '',
        interval: ''
    }

    constructor(private httpService: HttpService) {
        this.params = new Params("", "", "");
    }

    ngOnInit() {
        this.httpService.getParams().subscribe((data: any) => {
            this.params = new Params(data.start_time, data.end_time, data.interval);
            console.log(this.params);
        });
    }

    sendForm(){
        this.params.start_time = this.editForm.start_time;
        this.params.end_time = this.editForm.end_time;
        this.params.interval = this.editForm.interval;
        this.httpService.editSettings(this.editForm).subscribe()
    }

}
