const initialState = {
  allCoinIds: [],
  error: false,
  watchlist: {
    bitcoin: { id: "bitcoin", name: "Bitcoin", symbol: "btc", price: 8254 }
  },
  selectedPortfolioId: "p1",
  portfolios: {
    p1: {
      id: "p1",
      name: "My Portfolio",
      coins: {
        bitcoin: {
          id: "bitcoin",
          name: "Bitcoin",
          symbol: "btc",
          price: 8254,
          totalAmount: 20,
          transactions: [{ id: 1, exchange: "Kraken", amount: 5, price: 2700 }]
        }
      }
    }
  }
};

export default initialState;
