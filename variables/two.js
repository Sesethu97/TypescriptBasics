var final = 10;
var count = 1;
var output;
while (count <= final) {
    output = count;
    output = count % 3 == 0 && count % 5 == 0
        ? "Fizzbuzz"
        : count % 3 == 0
            ? "Fizz"
            : count % 5 == 0
                ? "buzz"
                : count;
    console.log(output);
    count++;
}
