function Header({ balance, loan }) {
  return (
    <>
      <h1>useReducer Bank Account</h1>
      <p>Balance: {balance}</p>
      <p>Loan: {loan}</p>
    </>
  );
}

export default Header;
