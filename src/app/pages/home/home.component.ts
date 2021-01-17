import { Component, OnInit } from '@angular/core';
import { Client } from 'src/app/models/client.model';
import { ClientService } from 'src/app/services/client.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public clients: Client[] = [];
  constructor(private clienteService: ClientService) { }

  ngOnInit(): void {
    this.clienteService.getAll().subscribe((data)=> this.clients = data);
  }

}
