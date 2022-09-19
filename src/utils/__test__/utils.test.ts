import { isTheRightSheet } from "../utilities";

export { isTheRightSheet } from "../utilities";

describe("isTheRightSheet", () => {
  it("should return true if the sheet is right", () => {
    const sheetHeaders = [
      "TransactionID",
      "Employee name",
      "Account Number",
      "Bank",
      "Bank Branch",
      "Salary Amount",
    ];
    expect(isTheRightSheet(sheetHeaders)).toBeTruthy();
  });

  it("should return true if the headers is not case sensitive", () => {
    const sheetHeaders = [
      "TransactionID",
      "employee name",
      "account Number",
      "Bank",
      "bank branch",
      "salary amount",
    ];
    expect(isTheRightSheet(sheetHeaders)).toBeTruthy();
  });
  it("should return false if the sheet is wrong", () => {
    const sheetHeaders = ["TransactionID", "Employee name", "Account Number"];
    expect(isTheRightSheet(sheetHeaders)).toBeFalsy();
  });
});
