function calc(a, b, op) {
  if (op = "+") {
    return a + b
  }
  else if (op == "-") {
    return a - b
  }
  else if (op == "x") {
    return a * b
  }
  else if (op == "/") {
    if (b === 0) {
      console.log("Don't do this")
    }
    return a / b
  }
  return 0
}

console.log(calc(10, 0, "/"))
console.log(calc(5, 5, "+"))
console.log(calc(9, 3, "*"))
