export const formatQuoteDetails = (quoteDetails) => {
  return `
  <div>
  <br>
  <p>Total Price: $ ${quoteDetails.totalPrice}</p>
  <p>Seniority Discount: ${quoteDetails.seniorityDiscount}%</p>
  <p>Wholesale Discount: ${quoteDetails.wholesaleDiscount}%</p>
  <p>Retail Markup: ${quoteDetails.retailIncrease}%</p>
  <p>Customer Seniority: ${quoteDetails.customerSeniority} years</p>
  <h4>Literature Copies</h4>
  ${quoteDetails.literatureCopies
    .map(
      (copy) => `
        <div>
        <br>
          <h5>${copy.title}</h5>
          <p>Base Price: ${copy.basePrice}</p>
          <p>Gross Price: ${copy.grossPrice}</p>
          <p>Final Price: ${copy.finalPrice}</p>
          <p>Overpricing Multiplier: ${copy.overPricingMultiplier}</p>
        </div>
      `
    )
    .join('')}
</div>

      `;
};

export const formatBudgetDetails = (budgetDetails, literatureList) => {
  const formatLiteratures = (literatures) => {
    return Object.keys(literatures)
      .map((id) => {
        const bookTitle =
          literatureList.find((book) => book.literatureCopyId === parseInt(id))?.title ||
          'Unknown Title';
        return `<li>${bookTitle}: ${literatures[id]}</li>`;
      })
      .join('');
  };

  return `
    <div>
      
      <h4>Books</h4>
      <ul>${formatLiteratures(budgetDetails.books)}</ul>
      <br>
      <h4>Novels</h4>
      <ul>${formatLiteratures(budgetDetails.novels)}</ul>
      <br>
      <p>Initial Budget: ${budgetDetails.initialBudget}</p>
      <p>Spent Budget: ${budgetDetails.spentBudget}</p>
    </div>
  `;
};
