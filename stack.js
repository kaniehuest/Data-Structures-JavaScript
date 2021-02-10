// Stack Data Structure
let Stack = function () {
    this.count = 0;
    this.storage = {};

    // Add a value at the end of the stack
    this.push = function (value) {
        this.storage[this.count] = value;
        this.count++;
    };

    // Removes and returns the value at the tio of the stack
    this.pop = function (value) {
        if (this.count === 0) {
            return undefined;
        }

        this.count--;
        let result = this.storage[this.count];
        delete this.storage[this.count];
        return result;
    };

    //See the size of the stack
    this.size = function () {
        return this.count;
    };

    //See the value at the top of the stack
    this.peek = function () {
        return this.storage[this.count - 1];
    };
};

// Examples
let myStack = new Stack();

myStack.push(2);
myStack.push(3);
console.log(myStack.peek());
console.log(myStack.size());
myStack.pop();
console.log(myStack.peek());
console.log(myStack.size());
myStack.pop();
console.log(myStack.size());
