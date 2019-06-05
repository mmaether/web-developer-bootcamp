var count = -10;
while (count < 20) {
  console.log("1: " + count);
  count++;
}

count = 10;
while (count <= 40) {
  console.log("2: " + count);
  count = count + 2;
}

count = 301;
while (count <= 333) {
  console.log("3: " + count);
  count = count + 2;
}

count = 5;
while (count <= 50) {
  if (count % 5 === 0 && count % 3 == 0) {
    console.log("4: " + count);
  }
}
