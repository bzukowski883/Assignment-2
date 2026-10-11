import AppShell from "../components/AppShell.jsx";

export default function Overview() {
  return (
    <section className="overview">
      <p>This is the Overview view. If you can see this, then I configured the react app to pass props back up via the setActivePage() function I made, and had app.jsx recognize the state to change the shown page.</p>
    </section>
  );
}
