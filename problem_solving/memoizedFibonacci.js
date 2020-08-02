function fibonacci(num, memo = []) {
  if (memo[num] !== undefined) return memo[num];
  if (num <= 2) return 1;
  let result = fibonacci(num - 1) + fibonacci(num - 2);
  memo[num] = result;
  return result;
}

console.log(fibonacci(7));
