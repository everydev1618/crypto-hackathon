class Users {
    constructor(name){
        this.username = name;
        this.balance = 0;
        this.time = 0;
        this.hash = 0;
    }
    updateBalance(money){
        this.balance+=money;

    }
    updatetime(time){
        this.time=time;
    }
    updatehash(hash){
        this.hash=hash;
    }
}

module.exports = Users;