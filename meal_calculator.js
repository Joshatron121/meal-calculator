var Dish = function(name, cost) {
    this.name = name;
    this.cost = cost;
};

var Diner = function(name, dishesList) {
    this.name = name;
    this.dishes = dishesList;
    this.owes = {
        beforeTax: 0,
        tax: 0,
        total: 0,
        tip: 0
    };
    this.dishesTotal = function(){
        for(var i = 0; i < this.dishes.length; i++) {
            this.owes.beforeTax += this.dishes[i].cost;
        }
    };
    this.calculateTax = function(){
        this.owes.tax = this.owes.beforeTax * .0795;
        this.owes.total = this.owes.beforeTax + this.owes.tax
    };
    this.calculateTip = function(){
        this.owes.tip = this.owes.beforeTax * .2;
    };
    
    this.dishesTotal();
    this.calculateTax();
    this.calculateTip();
};

var Bill = function(dinerList) {
    this.diners = dinerList;
    this.billTotals = {
        totalOwed: 0,
        totalTip: 0
    };
    this.totalDiners = function(){
        for(var i = 0; i < this.diners.length; i++){
            this.billTotals.totalOwed += this.diners[i].owes.total;
        }
        console.log(this.billTotals.totalOwed);
    };
    this.totalTips = function(){
        for(var i = 0; i < this.diners.length; i++){
            this.billTotals.totalTip += this.diners[i].owes.tip;
        }
        console.log(this.billTotals.totalTip);
    };
    this.dinerBreakdown = function(){
        var breakDown = [];
        for(var i = 0; i < this.diners.length; i++){
           breakDown[i] = this.diners[i].name + ' owes ' 
           + this.diners[i].owes.beforeTax + ' before tax, ' 
           + this.diners[i].owes.tax + ' tax, and ' 
           + this.diners[i].owes.tip + ' tip.';
        }
        for(var x = 0; x < breakDown.length; x++){
            console.log(breakDown[x]);
        }
    };
};

var scrambledEggs = new Dish('Scrambled Eggs', 10);
var frenchToast = new Dish('French Toast', 8);
var baconBurger = new Dish('Bacon Burger', 15);
var frenchFries = new Dish('French Fries', 6);
var soda = new Dish('Soda', 3);

var dan = new Diner('Dan', [scrambledEggs, frenchToast]);
var john = new Diner('John', [soda, frenchFries]);
var jerry = new Diner('Jerry', [baconBurger, frenchFries]);

var dinnerBill = new Bill([dan, john, jerry]);

dinnerBill.totalDiners();
dinnerBill.totalTips();
dinnerBill.dinerBreakdown();
