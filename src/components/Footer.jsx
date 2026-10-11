import pkg from "../../package.json"

export default function Footer(){
    return(
        <p>Version: {pkg.version}</p>
    )
}