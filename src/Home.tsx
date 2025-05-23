import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Marquee from "react-fast-marquee"; // ✅ New import
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import "bootstrap/dist/css/bootstrap.min.css";

type MarketDataType = {
  time: string;
  value: number;
};

type StockDataType = {
  symbol: string;
  price: number;
  change: string;
};

const marketData: MarketDataType[] = [
  { time: "9AM", value: 4500 },
  { time: "10AM", value: 4550 },
  { time: "11AM", value: 4525 },
  { time: "12PM", value: 4600 },
  { time: "1PM", value: 4625 },
  { time: "2PM", value: 4590 },
];

const stockTickerData: StockDataType[] = [
  { symbol: "AAPL", price: 150.25, change: "+1.5%" },
  { symbol: "GOOGL", price: 2803.55, change: "-0.8%" },
  { symbol: "TSLA", price: 720.22, change: "+2.1%" },
  { symbol: "AMZN", price: 3500.99, change: "-1.2%" },
  { symbol: "MSFT", price: 305.15, change: "+0.6%" },
  { symbol: "NFLX", price: 395.12, change: "+1.3%" },
  { symbol: "NVDA", price: 670.45, change: "-0.4%" },
  { symbol: "META", price: 315.67, change: "+2.0%" },
  { symbol: "BABA", price: 203.88, change: "-1.1%" },
  { symbol: "INTC", price: 26.75, change: "+0.9%" },
  { symbol: "ORCL", price: 93.21, change: "-0.7%" },
  { symbol: "PYPL", price: 76.44, change: "+1.8%" },
  { symbol: "ADBE", price: 590.35, change: "-2.3%" },
  { symbol: "CRM", price: 245.6, change: "+0.5%" },
  { symbol: "UBER", price: 48.11, change: "+3.2%" },
  { symbol: "LYFT", price: 10.94, change: "-0.6%" },
  { symbol: "SHOP", price: 180.25, change: "+1.1%" },
  { symbol: "SQ", price: 78.55, change: "-1.4%" },
  { symbol: "ROKU", price: 72.38, change: "+2.7%" },
  { symbol: "COIN", price: 162.91, change: "-0.9%" },
];

const features: { title: string; desc: string }[] = [
  { title: "Real-Time Trading", desc: "Instant market access." },
  { title: "Portfolio Tracking", desc: "Manage your investments." },
  { title: "Market Insights", desc: "AI-driven analytics." },
];

export default function Home(): JSX.Element {
  return (
    <Container fluid className="min-vh-100 d-flex flex-column align-items-center py-5">
      {/* ✅ Fixed Stock Ticker */}
      <div className="w-100 bg-dark text-white text-center py-2">
        <Marquee>
          {stockTickerData.map((stock, index) => (
            <span key={index} className="mx-3">
              {stock.symbol}: ${stock.price}{" "}
              <span
                className={
                  stock.change.includes("-") ? "text-danger" : "text-success"
                }
              >
                ({stock.change})
              </span>
            </span>
          ))}
        </Marquee>
      </div>

      {/* Hero Section */}
      <div className="text-center mb-4">
        <h1 className="fw-bold">Your Wealth, Your Future -- Powered by Titan.</h1>
        <p className="text-muted">Rise Above. Invest Like a Titan.</p>
        <Button variant="primary" size="lg">
          Get Started
        </Button>
      </div>

      {/* Market Overview */}
      <Card className="w-100 shadow-sm mb-4" style={{ maxWidth: "600px" }}>
        <Card.Body>
          <h2 className="h5 mb-3">Market Snapshot</h2>
          <ResponsiveContainer width="100%" height={200}>
            <LineChart data={marketData}>
              <XAxis dataKey="time" stroke="#888" />
              <YAxis domain={[4400, 4700]} stroke="#888" />
              <Tooltip />
              <Line
                type="monotone"
                dataKey="value"
                stroke="#007bff"
                strokeWidth={2}
              />
            </LineChart>
          </ResponsiveContainer>
        </Card.Body>
      </Card>

      {/* Features Section */}
      <Container>
        <Row className="g-3">
          {features.map((feature, index) => (
            <Col key={index} md={4}>
              <Card className="p-3 text-center shadow-sm">
                <Card.Body>
                  <h5>{feature.title}</h5>
                  <p className="text-muted">{feature.desc}</p>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>

      {/* Footer */}
      <footer className="mt-4 text-muted text-center">
        <p>&copy; {new Date().getFullYear()} Titan Equity Group. All rights reserved.</p>
      </footer>
    </Container>
  );
}
