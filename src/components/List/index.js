import { useEffect, useState } from "react";

export default function List() {
    const [counter, setCounter] = useState(1);

    useEffect(() => {
        return () => {
            console.log("Updated :v");
        }
    }, [counter]);

    useEffect(() => {
        return () => {
            console.log("Unmounted ;p")
        }
    }, [])

    return (
        <div>
            Counter: { counter}
            <br />
            <br />
            <button onClick={() => setCounter((oldCounter) => oldCounter + 1)}>Increase Counter</button>
        </div>
    );
}