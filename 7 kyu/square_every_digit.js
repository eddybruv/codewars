/**
 * Welcome. In this kata, you are asked to square every digit of a number and concatenate them.
 * For example, if we run 9119 through the function, 811181 will come out, because 92 is 81 and 12 is 1.
 * Note: The function accepts an integer and returns an integer
 */

const { assert } = require("chai");

describe("Basic tests", () => {
  it("squareDigits(3212) should equal 9414", () => {
    assert.strictEqual(squareDigits(3212), 9414);
  });

  it("squareDigits(2112) should equal 4114", () => {
    assert.strictEqual(squareDigits(2112), 4114);
  });

  it("squareDigits(0) should equal 0", () => {
    assert.strictEqual(squareDigits(0), 0);
  });
});

// solution
function squareDigits(num) {
  num = String(num).split("");
  for (let i in num) {
    num[i] = num[i] ** 2;
  }
  num = parseInt(num.join(""));
  return num;
}