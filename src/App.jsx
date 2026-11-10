function AccountSummary() {
  return <div>
    <h2>Account Summary</h2>
    <p>Balance: Rs. 25000</p>
  </div>;
}

function TransactionList() {
  return <div>
    <h2>Transaction List</h2>
    <p>Deposit: Rs. 5000</p>
    <p>Withdraw: Rs. 2000</p>
  </div>;
}

function App() {
  return <div>
    <h1>Bank Management System</h1>
    <AccountSummary />
    <TransactionList />
  </div>;
}

export default App;