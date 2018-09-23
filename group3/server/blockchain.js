class blockchain{
  constuctor(timestamp, data) {
    this.index = 0;
    this.timestamp = timestamp;
    this.data = data;
    this.previousHash = "0"
    this.hash = this.calculatehash();
    this.nonce = 0;
  }
  calculatehash() {

  }





}
