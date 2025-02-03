// // Link.jsx
// import React, { useState } from "react";

// const LinkComponent = () => {
//   const [page, setPage] = useState(1);

//   const handleNextPage = () => {
//     setPage((prev) => prev + 1);
//   };

//   return (
//     <div className="min-h-screen bg-black text-white flex items-center justify-center">
//       {page === 1 && <LinkDevice onNext={handleNextPage} />}
//       {page === 2 && <PressFinger onNext={handleNextPage} />}
//       {page === 3 && <FinalPage />}
//     </div>
//   );
// };

// const LinkDevice = ({ onNext }) => (
//   <div className="text-center">
//     <h1 className="text-3xl font-bold mb-6">Link your Device</h1>
//     <button
//       className="bg-orange-500 text-black px-6 py-3 rounded-full shadow-lg hover:bg-orange-600 transition-all"
//       onClick={onNext}
//     >
//       Continue
//     </button>
//   </div>
// );

// const PressFinger = ({ onNext }) => (
//   <div className="text-center">
//     <h1 className="text-3xl font-bold mb-6">Press the Finger to Unlock</h1>
//     <button
//       className="bg-blue-500 text-black px-6 py-3 rounded-full shadow-lg hover:bg-blue-600 transition-all"
//       onClick={onNext}
//     >
//       Unlock
//     </button>
//   </div>
// );

// const FinalPage = () => (
//   <div className="text-center">
//     <div className="bg-gray-800 p-6 rounded-lg mb-6">
//       <h2 className="text-xl font-semibold">Keys</h2>
//     </div>
//     <div className="bg-gray-800 p-6 rounded-lg">
//       <h2 className="text-xl font-semibold">Linked TOTP</h2>
//     </div>
//   </div>
// );

// export default LinkComponent; // Default export
import React, { useState } from "react";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from "@/components/ui/table";
import { Button } from "@/components/ui/button";

const LinkComponent = () => {
  const [page, setPage] = useState(1);

  const handleNextPage = () => {
    setPage((prev) => prev + 1);
  };

  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center">
      {page === 1 && <LinkDevice onNext={handleNextPage} />}
      {page === 2 && <PressFinger onNext={handleNextPage} />}
      {page === 3 && <FinalPage onNext={handleNextPage} />}
      {page === 4 && <Dashboard />} {/* Add Dashboard as the 4th page */}
    </div>
  );
};

const LinkDevice = ({ onNext }) => (
  <div className="text-center">
    <h1 className="text-3xl font-bold mb-6">Link your Device</h1>
    <button
      className="bg-orange-500 text-black px-6 py-3 rounded-full shadow-lg hover:bg-orange-600 transition-all"
      onClick={onNext}
    >
      Continue
    </button>
  </div>
);

const PressFinger = ({ onNext }) => (
  <div className="text-center">
    <h1 className="text-3xl font-bold mb-6">Press the Finger to Unlock</h1>
    <button
      className="bg-blue-500 text-black px-6 py-3 rounded-full shadow-lg hover:bg-blue-600 transition-all"
      onClick={onNext}
    >
      Unlock
    </button>
  </div>
);

const FinalPage = ({ onNext }) => (
  <div className="text-center">
    <div className="bg-gray-800 p-6 rounded-lg mb-6">
      <h2 className="text-xl font-semibold">Keys</h2>
    </div>
    <div className="bg-gray-800 p-6 rounded-lg">
      <h2 className="text-xl font-semibold">Linked TOTP</h2>
    </div>
    <button
      className="mt-6 bg-green-500 text-black px-6 py-3 rounded-full shadow-lg hover:bg-green-600 transition-all"
      onClick={onNext}
    >
      Go to Dashboard
    </button>
  </div>
);

const Dashboard = () => {
  // Dummy data for demonstration
  const walletId = "0x1234...abcd";
  const accountBalance = "$1,250.75";
  const sentAmount = "$500.00";
  const receivedAmount = "$750.00";
  const transactions = [
    { id: 1, type: "Sent", amount: "$200.00", date: "2023-10-01", to: "0x5678...efgh" },
    { id: 2, type: "Received", amount: "$300.00", date: "2023-10-02", from: "0x9101...ijkl" },
    { id: 3, type: "Sent", amount: "$100.00", date: "2023-10-03", to: "0x1121...mnop" },
    { id: 4, type: "Received", amount: "$450.00", date: "2023-10-04", from: "0x3141...qrst" },
  ];

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {/* My Wallet ID */}
        <Card>
          <CardHeader>
            <CardTitle>My Wallet ID</CardTitle>
            <CardDescription>Your unique wallet identifier</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-lg font-semibold">{walletId}</p>
          </CardContent>
        </Card>

        {/* Account Balance */}
        <Card>
          <CardHeader>
            <CardTitle>Account Balance</CardTitle>
            <CardDescription>Your current balance</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold">{accountBalance}</p>
          </CardContent>
        </Card>

        {/* Sent and Received */}
        <Card>
          <CardHeader>
            <CardTitle>Sent & Received</CardTitle>
            <CardDescription>Total sent and received amounts</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <p className="text-lg font-semibold">Sent: {sentAmount}</p>
              <p className="text-lg font-semibold">Received: {receivedAmount}</p>
            </div>
          </CardContent>
        </Card>

        {/* Quick Actions */}
        <Card>
          <CardHeader>
            <CardTitle>Quick Actions</CardTitle>
            <CardDescription>Perform common actions</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <Button className="w-full">Send Funds</Button>
              <Button className="w-full" variant="outline">
                Request Funds
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Previous Transactions */}
      <Card>
        <CardHeader>
          <CardTitle>Previous Transactions</CardTitle>
          <CardDescription>Your recent transaction history</CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Type</TableHead>
                <TableHead>Amount</TableHead>
                <TableHead>Date</TableHead>
                <TableHead>Counterparty</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {transactions.map((transaction) => (
                <TableRow key={transaction.id}>
                  <TableCell>{transaction.type}</TableCell>
                  <TableCell>{transaction.amount}</TableCell>
                  <TableCell>{transaction.date}</TableCell>
                  <TableCell>{transaction.type === "Sent" ? transaction.to : transaction.from}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
};

export default LinkComponent;
