import React, {useEffect, useState} from "react";

const App = () => {
    const [count, setCount] = useState(1);
    const handleCount = () => {
        setCount(count + 1)
    };

   
    return (
        <div>
        <button onClick={handleCount}>Update</button>
        <span>count: {count}</span>
        </div>
    );
}

export default App;