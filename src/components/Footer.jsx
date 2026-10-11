import pkg from "../../package.json"

export default function Footer(){
    const Dot = (
    <svg width="10" height="10" viewBox="0 0 10 10">
        <circle cx="5" cy="5" r="5" fill="var(--color-success)" />
    </svg>
    );

    return(
        <div className="footer">
            <div>© {new Date().getFullYear()} Proton. All rights reserved.</div>
            <div>Version: {pkg.version}</div>
            <div>Connection: Good {Dot} </div>
        </div>
    )
}