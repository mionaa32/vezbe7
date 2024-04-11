import { User } from "../models/user";
import { Account } from "../models/account";

export class Bank{
    private users:User[]=[];
    private accounts:Account[]=[];

    registerUser(user:User):void{   //posto smo u klasi ne treba da dodajemo function pre funkcije
        this.users.push(user); //ubacuje user u niz usera pomocu metode push (ubacuje na kraj niza)  -->pop je za izbacivanje sa kraja
        console.log(`User ${user.name} registred successfully`);
    }

    openAccount(user:User):void{
        const accountId=this.accounts.length+1;  //vraca duzinu niza+1 (to nam treba zbog id-ja, jer svaki sledeci account treba da ima id za jedan veci od prethodnog)
        const newAccount=new Account(accountId,user,0);   //iskoriscavamo konstruktor
        this.accounts.push(newAccount);   //dodavanje novog accounta u niz
        console.log(`Account opened successfully for user ${user.name}`);
    }

    displayUserAccounts(userId:number):void{
        const userAccounts=this.accounts.filter(account=>account.user.id===userId);
        console.log(`Accounts for user with ID: ${userId} :`);
        userAccounts.forEach(account=>account.displayBalance());
    }
}