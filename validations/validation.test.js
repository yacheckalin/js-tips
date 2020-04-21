import { isEmailValid, isEmailValid2 } from "./validations";

describe("isEmailValid", () => {
  it("return true", () => {
    const email = "abc@xyz.com";

    expect(isEmailValid(email)).toBe(true);
  });
  it("return false", () => {
    const email = "abc@xyz.";

    expect(isEmailValid(email)).toBe(false);
  });
  it("return false", () => {
    const email = "33";

    expect(isEmailValid(email)).toBe(false);
  });
});

describe("isEmailValid2", () => {
  it("return true", () => {
    const email = "abcd@aa.com";

    expect(isEmailValid2(email)).toBeTruthy();
  });
  it("return false", () => {
    const email = "abc@xyz.";

    expect(isEmailValid(email)).toBe(false);
  });
  it("return false", () => {
    const email = "33";

    expect(isEmailValid(email)).toBe(false);
  });
});
