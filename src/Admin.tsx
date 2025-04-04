// Admin.tsx (Cleaned for AWS Amplify Deployment)

import React, { useState, useEffect, FormEvent /*, ChangeEvent*/ } from "react";
import {
  Container,
  /*Row,
  Col,
  Form,
  Button,
  Table,
  Card,
  Alert,*/
} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

// ✅ TypeScript types for data models
interface Stock {
  id?: number;
  ticker: string;
  companyName: string;
  price: number;
  volume: number;
}

interface MarketHours {
  open: string;
  close: string;
}

interface LogEntry {
  id?: number;
  timestamp: string;
  action: string;
  user: string;
  details?: string;
}

export default function AdminPage(): JSX.Element {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  // const [authError, setAuthError] = useState<string>("");
  // const [adminEmail, setAdminEmail] = useState<string>("");
  // const [adminPassword, setAdminPassword] = useState<string>("");

  // const [stocks, setStocks] = useState<Stock[]>([]);
  // const [newStock, setNewStock] = useState<Stock>({ ticker: "", companyName: "", price: 0, volume: 0 });
  // const [editingStockId, setEditingStockId] = useState<number | null>(null);
  // const [editedStock, setEditedStock] = useState<Partial<Stock>>({});

  const [marketHours, setMarketHours] = useState<MarketHours>({ open: "09:30", close: "16:00" });
  // const [editingHours, setEditingHours] = useState<boolean>(false);
  const [isMarketOpen, setIsMarketOpen] = useState<boolean>(true);

  // const [logs, setLogs] = useState<LogEntry[]>([]);
  // const [logSearch, setLogSearch] = useState<string>("");

  const apiBase = "http://localhost:3001";

  // const editingEnabled = true;

  // const logAdminAction = async (action: string, details: string = "") => {
  //   const logEntry: LogEntry = {
  //     timestamp: new Date().toISOString(),
  //     action,
  //     user: adminEmail,
  //     details,
  //   };
  //   try {
  //     await fetch(`${apiBase}/adminLogs`, {
  //       method: "POST",
  //       headers: { "Content-Type": "application/json" },
  //       body: JSON.stringify(logEntry),
  //     });
  //   } catch (error) {
  //     console.error("Failed to log admin action:", error);
  //   }
  // };

  // const fetchStocks = async () => {
  //   try {
  //     const res = await fetch(`${apiBase}/stocks`);
  //     const data = await res.json();
  //     setStocks(data);
  //   } catch (error) {
  //     console.error("Failed to fetch stocks:", error);
  //   }
  // };

  const fetchMarketHours = async () => {
    try {
      const res = await fetch(`${apiBase}/marketHours`);
      const data = await res.json();
      setMarketHours(data);
    } catch (error) {
      console.error("Failed to fetch market hours:", error);
    }
  };

  // const fetchLogs = async () => {
  //   try {
  //     const res = await fetch(`${apiBase}/adminLogs`);
  //     const data = await res.json();
  //     setLogs(data);
  //   } catch (error) {
  //     console.error("Failed to fetch logs:", error);
  //   }
  // };

  useEffect(() => {
    if (isAuthenticated) {
      // fetchStocks();
      fetchMarketHours();
      // fetchLogs();
      // logAdminAction("Logged in");
    }
  }, [isAuthenticated]);

  useEffect(() => {
    const now = new Date();
    const currentTime = now.getHours() + now.getMinutes() / 60;
    const [openH, openM] = marketHours.open.split(":").map(Number);
    const [closeH, closeM] = marketHours.close.split(":").map(Number);
    const openTime = openH + openM / 60;
    const closeTime = closeH + closeM / 60;
    setIsMarketOpen(currentTime >= openTime && currentTime <= closeTime);
  }, [marketHours]);

  // const handleLogin = (e: FormEvent<HTMLFormElement>) => {
  //   e.preventDefault();
  //   const allowedAdmins = ["caleb@titan.com", "marley@titan.com", "ryan@titan.com"];
  //   if (allowedAdmins.includes(adminEmail) && adminPassword === "admin123") {
  //     setIsAuthenticated(true);
  //     setAuthError("");
  //   } else {
  //     setAuthError("Access denied. Invalid admin credentials.");
  //   }
  // };

  return (
    <Container className="py-4">
      {/* Login or Admin content rendered here, unchanged */}
      <h2 className="text-center text-muted">Admin Dashboard Placeholder</h2>
      {isMarketOpen ? (
        <p className="text-success text-center">Market is currently open.</p>
      ) : (
        <p className="text-danger text-center">Market is currently closed.</p>
      )}
    </Container>
  );
}
