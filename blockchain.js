export default class Block {

    constructor(){
        this.blockchain = [];
    };

    add(data){
        if(this.blockchain.length = 0){
            this.blockchain.push({
                data,
                prevHASH: null
            })
            return
        } else {
            let index = this.blockchain.length - 1;
            let corruptedBlock = this.verify();
            if(corruptedBlock !== null){
                this.blockchain.push({
                    data,
                    prevHASH: this.getHASH(index)
                });
            } else {
                console.log('Corrupted block: ', corruptedBlock);
            }
        }
    }

    getHASH(index){

    }

    verify(){
        let length = this.blockchain.length - 1;
        for(let i = length; i > 0; i--){

        }
    }
}