"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Copy, ArrowUp, ArrowDown } from "lucide-react";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const API_KEY = "IRI57XAY533YXUSDTU9J9TU6ZY9B4IWSRS"; // Replace with Sepolia Etherscan API Key
const TESTNET_BASE_URL = "https://api-sepolia.etherscan.io/api";

const Dashboard = () => {
  const [walletId, setWalletId] = useState("0x1665a01616299e6b7e993f8eAE4cd75AD6E184ae");
  const [balance, setBalance] = useState("Loading...");
  const [transactions, setTransactions] = useState([]);
  const [inputWalletId, setInputWalletId] = useState(""); 
  const [loading, setLoading] = useState(true); 

  useEffect(() => {
    if (walletId) {
      fetchBalance();
      fetchTransactions();
    }
  }, [walletId]); 

  const fetchBalance = async () => {
    setLoading(true);
    try {
      const response = await axios.get(
        `${TESTNET_BASE_URL}?module=account&action=balance&address=${walletId}&tag=latest&apikey=${API_KEY}`
      );
      if (response.data.status === "1") {
        setBalance((response.data.result / 1e18).toFixed(4)); 
      } else {
        toast.error("Failed to fetch balance");
      }
    } catch (error) {
      toast.error("Network error fetching balance");
    }
    setLoading(false);
  };

  const fetchTransactions = async () => {
    setLoading(true);
    try {
      const response = await axios.get(
        `${TESTNET_BASE_URL}?module=account&action=txlist&address=${walletId}&startblock=0&endblock=99999999&sort=desc&apikey=${API_KEY}`
      );
      if (response.data.status === "1") {
        setTransactions(response.data.result.slice(0, 5)); 
      } else {
        toast.error("No transactions found");
      }
    } catch (error) {
      toast.error("Network error fetching transactions");
    }
    setLoading(false);
  };

  const calculateSentAmount = () => {
    return transactions
      .filter((tx) => tx.from.toLowerCase() === walletId.toLowerCase())
      .reduce((total, tx) => total + parseFloat(tx.value) / 1e18, 0)
      .toFixed(4); 
  };

  const calculateReceivedAmount = () => {
    return transactions
      .filter((tx) => tx.to.toLowerCase() === walletId.toLowerCase())
      .reduce((total, tx) => total + parseFloat(tx.value) / 1e18, 0)
      .toFixed(4);
  };

  const handleSubmit = () => {
    if (inputWalletId.trim() !== "") {
      setWalletId(inputWalletId);
      setInputWalletId("");
    } else {
      toast.error("Please enter a valid wallet address");
    }
  };

  return (
    <div className="p-6 bg-blue-600 space-y-6 max-w-3xl mx-auto">
      
      {/* Wallet Search Section */}
      <div className="flex items-center gap-4 mb-6">
        <input
          type="text"
          value={inputWalletId}
          onChange={(e) => setInputWalletId(e.target.value)}
          className="border bg-white p-2 rounded-md w-1/2"
          placeholder="Enter Wallet Address"
        />
        <Button onClick={handleSubmit} className="bg-blue-500 text-white">Search</Button>
      </div>

      {/* My Wallet */}
      <Card className="shadow-md">
        <CardHeader>
          <CardTitle>My Wallet</CardTitle>
        </CardHeader>
        <CardContent className="flex justify-between items-center">
          <span className="text-gray-800 font-mono">{walletId}</span>
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger>
                <Button
                  variant="outline"
                  size="icon"
                  onClick={() => {
                    navigator.clipboard.writeText(walletId);
                    toast.success("Wallet ID copied!");
                  }}
                >
                  <Copy size={18} />
                </Button>
              </TooltipTrigger>
              <TooltipContent>Copy Address</TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </CardContent>
      </Card>

      {/* Account Balance */}
      <Card className="shadow-md">
        <CardHeader>
          <CardTitle>Account Balance</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-3xl font-bold text-gray-800">
            {loading ? "Loading..." : `${balance} ETH`}
          </p>
        </CardContent>
      </Card>

      {/* Sent & Received */}
      <div className="grid grid-cols-2 gap-4">
        <Card className="shadow-md">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <ArrowUp className="text-red-500" />
              Sent
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-lg font-semibold text-gray-700">
              {transactions.filter((tx) => tx.from.toLowerCase() === walletId.toLowerCase()).length} Transactions
            </p>
            <p className="text-lg font-semibold text-gray-700">
              Total Sent: {loading ? "Loading..." : `${calculateSentAmount()} ETH`}
            </p>
          </CardContent>
        </Card>
        <Card className="shadow-md">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <ArrowDown className="text-green-500" />
              Received
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-lg font-semibold text-gray-700">
              {transactions.filter((tx) => tx.to.toLowerCase() === walletId.toLowerCase()).length} Transactions
            </p>
            <p className="text-lg font-semibold text-gray-700">
              Total Received: {loading ? "Loading..." : `${calculateReceivedAmount()} ETH`}
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Previous Transactions */}
      <Card className="shadow-md">
        <CardHeader>
          <CardTitle>Previous Transactions</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Hash</TableHead>
                <TableHead>From</TableHead>
                <TableHead>To</TableHead>
                <TableHead>Amount</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {transactions.length === 0 ? (
                <TableRow>
                  <TableCell colSpan="4" className="text-center">
                    {loading ? "Loading..." : "No Transactions Found"}
                  </TableCell>
                </TableRow>
              ) : (
                transactions.map((tx, index) => (
                  <TableRow key={index}>
                    <TableCell className="truncate w-[120px]">{tx.hash.slice(0, 10)}...</TableCell>
                    <TableCell className="truncate w-[120px]">{tx.from.slice(0, 10)}...</TableCell>
                    <TableCell className="truncate w-[120px]">{tx.to.slice(0, 10)}...</TableCell>
                    <TableCell>{(tx.value / 1e18).toFixed(4)} ETH</TableCell>
                  </TableRow>
                ))
              )}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
};

export default Dashboard;