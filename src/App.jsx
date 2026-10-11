import { useState } from "react";
import AppShell from "./components/AppShell.jsx";
import Accounts from "./views/Accounts.jsx";
import Alerts from "./views/Alerts.jsx";
import Overview from "./views/Overview.jsx";
import Reports from "./views/Reports.jsx";
import Settings from "./views/Settings.jsx";
import Teams from "./views/Teams.jsx";

export default function App() {
  const [activePage, setActivePage] = useState("Overview");

  return (
    <AppShell activePage={activePage} setActivePage={setActivePage}>
      {evaluateState(activePage)}
    </AppShell>
  );}

function evaluateState(activePage) {
  switch (activePage){
    case "Accounts":
      return <Accounts/>
    case "Alerts":
      return <Alerts/>
    case "Overview":
      return <Overview/>
    case "Reports":
      return <Reports/>
    case "Settings":
      return <Settings/>
    case "Teams":
      return <Teams/>
    default:
      return <Overview/>
  }
}