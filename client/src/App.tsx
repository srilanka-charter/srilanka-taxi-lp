import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import ArticleAirportTransfer from "./pages/ArticleAirportTransfer";
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
