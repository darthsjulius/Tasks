function Accumulator(startingValue) {
    this.value = startingValue;
    this.read = function() {
        this.value += +prompt('Select a number to add');
    }
}

let akku = new Accumulator(8);
akku.read();
akku.read();
akku.read();
alert( akku.value );