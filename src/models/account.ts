import { User } from "./user";

export class Account{
    constructor(public id:number,public user:User, public balance:number){}
    
    displayBalance():void{   //mora da se napise kod tipa je funkcija; u zagradi se pisu parametri ako ih ima
        console.log(`Account id: ${this.id} Balance: ${this.balance}`);
        console.log(`User info-name: ${this.user.name}, email: ${this.user.email}`);
    }
}