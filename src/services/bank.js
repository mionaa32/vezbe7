"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Bank = void 0;
var account_1 = require("../models/account");
var Bank = /** @class */ (function () {
    function Bank() {
        this.users = [];
        this.accounts = [];
    }
    Bank.prototype.registerUser = function (user) {
        this.users.push(user); //ubacuje user u niz usera pomocu metode push (ubacuje na kraj niza)  -->pop je za izbacivanje sa kraja
        console.log("User ".concat(user.name, " registred successfully"));
    };
    Bank.prototype.openAccount = function (user) {
        var accountId = this.accounts.length + 1; //vraca duzinu niza+1 (to nam treba zbog id-ja, jer svaki sledeci account treba da ima id za jedan veci od prethodnog)
        var newAccount = new account_1.Account(accountId, user, 0); //iskoriscavamo konstruktor
        this.accounts.push(newAccount); //dodavanje novog accounta u niz
        console.log("Account opened successfully for user ".concat(user.name));
    };
    Bank.prototype.displayUserAccounts = function (userId) {
        var userAccounts = this.accounts.filter(function (account) { return account.user.id === userId; });
        console.log("Accounts for user with ID: ".concat(userId, " :"));
        userAccounts.forEach(function (account) { return account.displayBalance(); });
    };
    return Bank;
}());
exports.Bank = Bank;
