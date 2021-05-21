for (var i=1; i <20; i++) {
    if (i % 2  != 0 ) {
        console.log(i)
    }
}


for (var i=100; i >=0; i--) {
    if (i % 3  == 0 ) {
        console.log(i)
}
}

var i = 4

while(i > -5) {
    console.log(i)
    i -= 1.5
}

var sum =  0
var i = 1
while (i <= 100) {
    console.log(i)
    sum +=i
    i++
}
console.log(sum)


var product =  1
var i = 1
while (i <= 12) {
    console.log(i +"*" + product)
    product *=i
    i++
}
console.log(product)