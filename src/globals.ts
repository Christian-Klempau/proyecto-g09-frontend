let baseUrl: string;
baseUrl = "http://lagarto9.ing.puc.cl";
baseUrl = "http://localhost:3000";

function strToLocale(str: string) {
  return new Date(str).toLocaleString();
}

export { baseUrl, strToLocale };
