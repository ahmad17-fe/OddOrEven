export function oddOrEven(array: number[]): string {
  let message: string = "";

  if (array.length < 1) array.push(0);

  const sum: number = array.reduce((prev, curr) => {
    return prev + curr;
  });

  if (Math.abs(sum % 2) === 1) {
    message = "odd";
  } else {
    message = "even";
  }

  return message;
}
