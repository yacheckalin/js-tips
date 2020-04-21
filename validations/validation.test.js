import { isEmailValid } from "./validations";

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
