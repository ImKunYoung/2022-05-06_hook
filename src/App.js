import React, {useEffect, useState} from "react";
import {Text, View} from "react-native";

const App = () => {
    const [count, setCount] = useState(1);
    const [mcount, setMCount] = useState(1);
    const [name, setName] = useState();
    const handleCount = () => {setCount(count + 1)}
    const handleInputChange = (e) => {setName(e.target.value);}
    const handleMultiplication = (e) => {setMCount(mcount * 2)}

    // 최초 렌더링 될때 실행
    useEffect(() => {
        console.log(`최초 렌더링될때 1회`)
    }, [])

    // 메인 렌더링 될때마다 실행
    useEffect(() => {
        console.log(`메인 렌더링`)
    })

    // 마운팅 + count가 변화할때마다 실행
    useEffect(() => {
        console.log(count);
        console.log(`count 변화`);
    }, [count])

    // 마운팅 + name이 변화할 때마다 실행
    useEffect(()=>{
        console.log(`name 변화`);
    }, [name])

    useEffect(()=>{
        console.log(`mcount 변화`);
    }, [mcount])

    return (
        <View>
            <button onClick={handleCount}>Update</button>
            <Text>count: {count} </Text>
            <input type="text" onChange={handleInputChange}/>
            <Text>name: {name}</Text>
            <br/>
            <button onClick={handleMultiplication}>Multiplication</button>
            <Text> mcount: {mcount}</Text>
        </View>
    )
}

export default App;