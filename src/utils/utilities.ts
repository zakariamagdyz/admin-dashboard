import { read, utils } from "xlsx";

export const isTheRightSheet = (headers: Array<string>) => {
  const sheetHeaders = [
    "TransactionID",
    "Employee name",
    "Account Number",
    "Bank",
    "Bank Branch",
    "Salary Amount",
  ];

  return sheetHeaders.every((sheetHeader, inx) =>
    new RegExp(sheetHeader, "i").test(headers[inx]?.trim())
  );
};

const checkForEmptyValueInSheet = (sheetArr: Array<Array<String>>) => {
  const ROW_START = 2;
  return sheetArr.map((item, inx) => {
    if (item.some((item) => item === "")) {
      throw new Error(`Check for empty cell in row ${inx + ROW_START}`);
    }
    return {
      transactionId: item[0],
      name: item[1],
      accountNumber: item[2],
      bank: item[3],
      bankBranch: item[4],
      slarayAmount: item[5],
    };
  });
};

export const validateExcelTemplate = (
  templateName: string,
  data: ArrayBuffer
): Array<Object> | void | never => {
  // 1- Check if it's an Excel file
  if (!/\.(xlsx|xls|xlsm)$/i.test(templateName)) {
    return alert("Please upload valid excel file .xlsx, .xlsm, .xls only.");
  }
  // 2- Reade workBook
  const workBook = read(data);
  // 3- Read first sheet
  const workSheet = workBook.Sheets[workBook.SheetNames[0]];
  // 4- convert sheet to json
  const jsonData = utils.sheet_to_json(workSheet, {
    header: 1,
    defval: "",
  }) as Array<Array<string>>;

  // 5- check if it's  the right template
  if (!isTheRightSheet(jsonData[0])) {
    return alert("Not the right sheet");
  }

  // 6- check for empty values
  let userData;
  try {
    userData = checkForEmptyValueInSheet(jsonData.slice(1));
  } catch (error) {
    if (!(error instanceof Error)) return;
    return alert(error.message);
  }

  return userData;
};
