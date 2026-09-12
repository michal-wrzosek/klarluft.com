// Kept out of plain text in the source, as the previous version of the site did,
// so a naive scraper of the repository does not pick the details up.
const decode = (value: string) => atob(value);

export const company = {
  legalName: "Klarluft B.V.",
  street: decode("VmFuIEFlcnNzZW5sYWFuIDQwQw=="),
  postalCity: decode("MzAzOSBLRSBSb3R0ZXJkYW0="),
  country: decode("VGhlIE5ldGhlcmxhbmRz"),
  vat: decode("Tkw4NjQxMjg5MTVCMDE="),
  kvk: decode("ODY4NzU1OTA="),
  email: decode("Y29udGFjdEBrbGFybHVmdC5jb20="),
} as const;

export const links = {
  gitwarren: "https://gitwarren.com",
  personal: "https://michal.wrzosek.pl",
  github: "https://github.com/klarluft",
} as const;
