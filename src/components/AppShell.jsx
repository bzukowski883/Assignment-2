import Sidebar from "./Sidebar";
import Header from "./Header";
import Footer from "./Footer";
import "../styles/layout.css";
import { useState } from "react";

export default function AppShell({ children, activePage, setActivePage }) {

  const [navWidth, setNavWidth] = useState("wide");
  return (
    <div className="app-shell">
      <aside className={`app-shell__sidebar ${navWidth === "narrow" ? "wide" : "narrow"}`}>
        <Sidebar activePage={activePage} setActivePage={setActivePage} navWidth={navWidth} setNavWidth={() =>
                setNavWidth(prev => (prev === "wide" ? "narrow" : "wide"))}  />
      </aside>

      <header className="app-shell__header">
        <Header 
          activePage={activePage}
          />
      </header>

      <main className="app-shell__main">
        {children}
      </main>

      <footer className="app-shell__footer">
        <Footer />
      </footer>
    </div>
  );
}
