var arr = [1, 2, 3, 4, 5];


for (var i = 0; i < arr.length; i++) {
    var curVal = arr[i];

    console.log(curVal, i);

    if (curVal == 3) {
        arr.splice(i, 1);
        i--;
    }
}

Object.assign({}, { key: 'value' });


Array.prototype.forEach2 = function forEach2(callback) {
    var copy = this.slice();

    for (let i = 0; i < copy.length; i++) {
        let elem = copy[i];

        callback(elem, i, this);
    }
};


Array.prototype.map2 = function map2(callback) {
    var copy = this.slice();
    var newArr = [];

    for (let i = 0; i < copy.length; i++) {
        let elem = copy[i];

        newArr.push(callback(elem, i, this));
    }

    return newArr;
};


Array.prototype.filter2 = function filter2(callback) {
    var copy = this.slice();
    var newArr = [];

    for (let i = 0; i < copy.length; i++) {
        let elem = copy[i];

        var result = callback(elem, i, this);

        if (result) {
            newArr.push(elem);
        }
    }

    return newArr;
};

function filter2(callback) {
    var copy = this.slice();
    var newArr = [];

    for (let i = 0; i < copy.length; i++) {
        let elem = copy[i];

        var result = callback(elem, i, this);

        if (result) {
            newArr.push(elem);
        }
    }

    return newArr;
}

// class Foo extends Bar {
//     // super == Bar
// }


// employees.forEach((curVal, i) => {
//     if (curVal.firstName === "Theo") {
//         employees.splice(i, 1);
//     }
//     if (curVal.firstName === "Lorie") {
//         curVal.department = "HR";
//     }
// });