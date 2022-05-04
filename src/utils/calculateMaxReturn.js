export function getMaxReturnData(investment, label, prices) {
  var buy = prices[0];
  var maximum_profit = 0;
  var buyDateIdx = 0;
  var buyDateIdxFinal = 0;

  var sellDateIdx = 0;
  console.log(prices);
  for (var i = 1; i < prices.length; i++) {
    if (buy > prices[i]) {
      buy = prices[i];
      buyDateIdx = i;
    }
    if (maximum_profit < prices[i] - buy) {
      buyDateIdxFinal = buyDateIdx;
      maximum_profit = prices[i] - buy;
      sellDateIdx = i;
    }
  }
  var maxNoOfShares = Math.floor(investment / buy);
  var totalProfit = maxNoOfShares * maximum_profit;
  var maximumReturn = +investment + +totalProfit;

  return [maximumReturn, label[buyDateIdxFinal], label[sellDateIdx]];
}
