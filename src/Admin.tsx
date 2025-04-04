// Admin.tsx

import { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

// Removed unused interfaces (Stock, LogEntry)
interface MarketHours {
  open: string;
  close: string;
}

export default function AdminPage(): JSX.Element {
  // Temporarily hardcoding false for isAuthenticated
  const isAuthenticated = false;

  const [marketHours, setMarketHours] = useState<MarketHours>({
    open: "09:30",
    close: "16:00",
  });
  const [isMarketOpen, setIsMarketOpen] = useState<boolean>(true);

  const apiBase = "http://localhost:3001";

  const fetchMarketHours = async () => {
    try {
      const res = await fetch(`${apiBase}/marketHours`);
      const data = await res.json();
      setMarketHours(data);
    } catch (error) {
      console.error("Failed to fetch market hours:", error);
    }
  };

  useEffect(() => {
    if (isAuthenticated) {
      fetchMarketHours();
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

  return (
    <Container className="py-4">
      <h2 className="text-center text-muted">Admin Dashboard Placeholder</h2>
      {isMarketOpen ? (
        <p className="text-success text-center">Market is currently open.</p>
      ) : (
        <p className="text-danger text-center">Market is currently closed.</p>
      )}
    </Container>
  );
}
