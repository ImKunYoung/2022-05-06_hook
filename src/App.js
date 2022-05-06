import React, {useEffect, useState} from "react";

const App = () => {
    const [count, setCount] = useState(1);
    const [name, setName] = useState();
    const handleCount = () => {
        setCount(count + 1)
    }
    const handleInputChange = (e) => {
        setName(e.target.value);
    }
    useEffect(() => {
        console.log(count);
        console.log(`렌더링 될때마다 실행`)
    })
    useEffect(() => {
        console.log(count);
        console.log(`처음 렌더링 될때만 실행`);
    }, [])
    return (
        <div>
            <button onClick={handleCount}>Update</button>
            <span>count: {count}</span>
            <input type="text" onChange={handleInputChange}/>
            <span>name: {name}</span>
        </div>
    )
}

export default App;