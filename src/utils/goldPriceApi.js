export async function getPriceData(startDate, endDate) {
  let url = `http://api.nbp.pl/api/cenyzlota/${startDate.toLocaleDateString(
    "fr-CA"
  )}/${endDate.toLocaleDateString("fr-CA")}/?format=json`;
  const response = await fetch(url, {});
  if (!response.ok) {
    return [[], []];
  }
  const data = await response.json();
  const prices = data.map((item) => item.cena);
  const labels = data.map((item) => item.data);
  return [prices, labels];
}
