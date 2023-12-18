import { useState, useRef } from 'react'
import circle from '../assets/circle.png'
import cross from '../assets/cross.png'
import  './tictactoe.css'


export default function tictactoe(){
    const [data, setData] = useState(["","","","","","","","",""]);
    const [count,setCount] = useState(0);
    const [lock, setLock] = useState(false);
    const win = useRef(null);
    const checkwin = ()=>
    {
        if(data[2]===data[4] && data[4]===data[6] && data[6]!="")
        {
            won(data[2]);
        }else if (data[0]===data[1] && data[2]===data[1] && data[2]!="")
        {
            won(data[0])
        }
        else if (data[3]===data[4] && data[4]===data[5] && data[5]!="")
        {
            won(data[3])
        }else if (data[6]===data[7] && data[7]===data[8] && data[8]!="")
        {
            won(data[6])
        }else if (data[0]===data[3] && data[3]===data[6] && data[6]!="")
        {
            won(data[0])
        }else if (data[1]===data[4] && data[4]===data[7] && data[7]!="")
        {
            won(data[1])
        }else if (data[2]===data[5] && data[5]===data[8] && data[8]!="")
        {
            won(data[2])
        }else if (data[0]===data[4] && data[4]===data[8] && data[8]!="")
        {
            won(data[0])
        }

    }
    const won =(winner)=>
    {
        setLock(true);
        if(winner === "x")
        {
            win.current.innerHTML=`<img src=${cross}> Won`
        }
        else if(winner === "o")
        {
            win.current.innerHTML=`<img src=${circle}> Won`
        }
    }

    const toggle = (e,num)=>
    {
        if (lock || data[num] !== "") return;

        if(count%2 ===0 ){
            e.target.innerHTML=`<img src="${cross}">`;
            data[num]= 'x';
            setCount(count +1);
        }else
        {
            e.target.innerHTML=`<img src="${circle}">`;
            data[num]= 'o';
            setCount(count +1);
        }
        checkwin();
        if(count === 8)
        {
            win.current.innerHTML=`Draw`
            setLock(true);
        }
    }


    const reset =()=>
    {
        setLock(false);
        setCount(0);
        win.current.innerHTML="Tic-Tac-Toe";
        setData(["", "", "", "", "", "", "", "", ""]);
        const boxElements = document.querySelectorAll('.boxes');
        boxElements.forEach((boxElement) => {
            boxElement.innerHTML = null;
        });
    }



    return (
        <div className='container'>
            <h1 className='title' ref={win}>
                Tic-Tac-Toe
            </h1>
            <div className='board'>
            <div className="row1">
                <div className="boxes" onClick={e=>toggle(e,0)}></div>
                <div className="boxes" onClick={e=>toggle(e,1)}></div>
                <div className="boxes" onClick={e=>toggle(e,2)}></div>
            </div>

            <div className="row2">
                <div className="boxes" onClick={e=>toggle(e,3)}></div>
                <div className="boxes" onClick={e=>toggle(e,4)}></div>
                <div className="boxes" onClick={e=>toggle(e,5)}></div>
            </div>

            <div className="row3">
                <div className="boxes" onClick={e=>toggle(e,6)}></div>
                <div className="boxes" onClick={e=>toggle(e,7)}></div>
                <div className="boxes" onClick={e=>toggle(e,8)}></div>
            </div>

            </div>
            <button className='button' onClick={() => reset()} >reset</button>

        </div>
    );
}