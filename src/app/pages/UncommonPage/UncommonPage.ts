import { Component, signal } from '@angular/core';
import { Card } from "../../components/Card/Card";
import { AsyncPipe, I18nPluralPipe, I18nSelectPipe, JsonPipe, KeyValuePipe, SlicePipe, TitleCasePipe, UpperCasePipe } from '@angular/common';
import { interval, map, tap } from 'rxjs';


const client1 = {
  name: 'Joel',
  gender: 'male',
  age: 38,
  address: 'San Miguelito, Panamá'
}

const client2 = {
  name: 'Blanca',
  gender: 'female',
  age: 30,
  address: 'Tocumen, Panamá'
}


@Component({
  selector: 'app-uncommon-page',
  imports: [
    Card,
    I18nSelectPipe,
    I18nPluralPipe,
    SlicePipe,
    JsonPipe,
    UpperCasePipe,
    KeyValuePipe,
    TitleCasePipe,
    AsyncPipe
  ],
  templateUrl: './UncommonPage.html',
})
export default class UncommonPage {

  // i18n Select
  client = signal(client1)

  invitationMap = {
    male: 'invitarlo',
    female: 'invitarla'
  }

  changeClient(){
    if( this.client() === client1 ){
      this.client.set(client2)
      return
    }
    this.client.set(client1)
  }

  // i18n Plural

  clientsMap = signal({
    '=0': 'no tenemos ningún cliente esperando',
    '=1': 'tenemos un cliente esperando',
    '=2': 'tenemos 2 clientes esperando',
    other: 'tenemos # clientes esperando',
  })

  clients = signal([
    'Maria',
    'Pedro',
    'Joel',
    'Blanca',
    'Magdalena',
    'Lisnely',
    'Abiud',
    'Isaac',
    'Ruth',
    'Gabriel',
    'Wendy'
  ])

  deleteClient(){
    this.clients.update( prev => prev.slice(1) )
  }

  // KeyValue Pipe
  profile = {
    name: 'Joel',
    age: 38,
    address: 'San Miguelito, Panamá'
  }

  // Async Pipe
  promiseValue: Promise<string> = new Promise(
    (resolve, reject) => {
      setTimeout(
        () => {
          //reject('Tenemos un error en la data')
          resolve('Tenemos datos en la promesa')
          console.log('Promesa finalizada')
        }, 3500
      )
    }
  )

  myObservableTimer = interval(2000).pipe(
    map( value => value + 1 ),
    tap(
      value => console.log(`tap: ${ value }`)
    )
  )
}
