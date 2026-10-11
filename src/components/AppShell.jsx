import Sidebar from "./Sidebar";
import Header from "./Header";
import Footer from "./Footer";
import "../styles/layout.css";
import { act } from "react";

export default function AppShell({ children, activePage, setActivePage }) {
  return (
    <div className="app-shell">
      <aside className="app-shell__sidebar">
        <Sidebar activePage={activePage} setActivePage={setActivePage} />
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
