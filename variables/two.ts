let final = 10;
let count = 1;
let output: any;
while (count<= final) {
  output = count

  output  = count % 3 == 0  && count % 5 ==0
  ?"Fizzbuzz"
  :count % 3 == 0 
  ?"Fizz"
  :count % 5 == 0 
  ?"buzz"
  :count;
  
  console.log(output);
  count++;
}