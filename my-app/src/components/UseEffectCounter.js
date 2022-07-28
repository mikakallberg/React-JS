import React, {useState, useEffect} from 'react'

// Clean up effect
function UseEffectCounter() {
    const [count, setCount] = useState(0);
    const [time, setTime] = useState(0);

    useEffect(() => {
        console.log('count 1 effect');
        document.title = count;
    }, [count]);
    useEffect(()=>{
        console.log('Creating timer');
        const interval = setInterval(() => {
            console.log('Interval executed');
            setTime(time => time + 1)
        }, 1000);
        return () => {
            console.log('cleaning up!');
            clearInterval(interval);
        }
    }, []);
    return (
        <div>
            <button onClick={
                () => setCount(count => count + 1)
            }>
                Increment Count ({count})
            </button>
            <h2>Time is {time}</h2>
        </div>
    )
}

// Running effects only once
// function UseEffectCounter() {
//     const [count, setCount] = useState(0);
//     const [time, setTime] = useState(0);

//     useEffect(() => {
//         console.log('count 1 effect');
//         document.title = count;
//     }, [count]);

//     useEffect(()=>{
//         console.log('Creating timer');
//         const interval = setInterval(() => {
//             setTime(time => time + 1)
//         }, 1000);
//     }, []);
    
//     return (
//         <div>
//             <button onClick={
//                 () => setCount(count => count + 1)
//             }>
//                 Increment Count ({count})
//             </button>
//             <h2>Time is {time}</h2>
//         </div>
//     )
// }


// Conditional effects
// function UseEffectCounter() {
//     const [count, setCount] = useState(0);
//     useEffect(() => {
//         console.log("count 1 effect");
//         document.title = count;
//     }, [count]);
//     const [count2, setCount2] = useState(0);
//     useEffect(() => {
//         console.log("count 2 effect");
//         document.title = count2;
//     }, [count2]);
//     return (
//         <div>
//             <button onClick={() => setCount((count) => count + 1)}>
//                 Increment Count ({count})
//             </button>
//             <button onClick={() => setCount2((count2) => count2 + 1)}>
//                 Increment Count2 ({count2})
//             </button>
//         </div>
//     );
// }

// Use effect hooks
// function UseEffectCounter() {
//     const [count, setCount] = useState(0);
//     useEffect(() => {
//         document.title = count;
//     });
//     return (
//         <div>
//             <button
//                 onClick={
//                     () => setCount(count => count + 1)
//                 }>
//                     Increment Count ({count})
//             </button>
//         </div>
//     )
// }

export default UseEffectCounter