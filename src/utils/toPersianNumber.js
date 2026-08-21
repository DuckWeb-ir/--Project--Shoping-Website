const persianDigits = "۰۱۲۳۴۵۶۷۸۹";

export default function toPersianNumber(value) {
  return String(value).replace(/\d/g, (digit) => {
    return persianDigits[Number(digit)];
  });
}