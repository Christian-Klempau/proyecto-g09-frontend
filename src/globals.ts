let baseUrl: string;
baseUrl = "http://localhost:3000";
baseUrl = "http://lagarto9.ing.puc.cl";

function strToLocale(str: string) {
  return new Date(str).toLocaleString("es-ES", {
    timeZone: "America/Santiago",
  });
}

export { baseUrl, strToLocale };
