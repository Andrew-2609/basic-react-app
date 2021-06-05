import { useCallback, useMemo, useState } from "react";

const set = new Set();

export default function List() {
    const [counter, setCounter] = useState(1);

    const number = useMemo(() => {
        return 123456 * 654321;
    }, []);

    const handleSetCounter = useCallback(() => {
        setCounter((oldCounter) => oldCounter + 1);
        set.add(handleSetCounter);
    }, []);

    console.log(set.size);
    console.log(`number: ${number}`)

    return (
        <div>
            Counter: { counter}
            <button onClick={handleSetCounter}>Increase Counter</button>
        </div>
    );
}