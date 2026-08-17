import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import ArticleAirportTransfer from "./pages/ArticleAirportTransfer";
import ArticleLongDistanceBus from "./pages/ArticleLongDistanceBus";
import ArticleTeaTrain from "./pages/ArticleTeaTrain";
import ArticleTukTuk from "./pages/ArticleTukTuk";
import ArticleUber from "./pages/ArticleUber";
import ArticlePickMe from "./pages/ArticlePickMe";
import { ThemeProvider } from "./contexts/ThemeContext";
import ArticleTaxiCharter from "./pages/ArticleTaxiCharter";
import ArticleTransport from "./pages/ArticleTransport";
import Articles from "./pages/Articles";
import Home from "./pages/Home";

function Router() {
  return (
    <Switch>
      <Route path={"/"} component={Home} />
      <Route path={"/articles"} component={Articles} />
      <Route path={"/articles/sri-lanka-transport-guide"} component={ArticleTransport} />
      <Route path={"/articles/sri-lanka-taxi-charter-guide"} component={ArticleTaxiCharter} />
      <Route path={"/articles/colombo-airport-transfer-guide"} component={ArticleAirportTransfer} />
      <Route path={"/articles/sri-lanka-tea-train-nine-arch-bridge"} component={ArticleTeaTrain} />
      <Route path={"/articles/sri-lanka-long-distance-bus-guide"} component={ArticleLongDistanceBus} />
      <Route path={"/articles/sri-lanka-tuk-tuk-guide"} component={ArticleTukTuk} />
      <Route path={"/articles/sri-lanka-uber-guide"} component={ArticleUber} />
      <Route path={"/articles/sri-lanka-pickme-guide"} component={ArticlePickMe} />
      <Route path={"/404"} component={NotFound} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="dark">
        <TooltipProvider>
          <Toaster />
          <Router />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
