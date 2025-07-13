import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Test from './Test';
import Form from './Form';

function App() {
  const [oohori, setOohori] = useState("長野で研修");
  const [num, setNum] = useState(0);

  const random = () => {
    const aa = Math.floor(Math.random() *3);
    console.log(aa,"中身チェック")
    setNum(aa);
    // ここがランダムになる数字
  };

  return (
    <>
    <h1>初級のおさらい😂</h1>

    <Form /> 
    
{/* 部品に対して『目印』をつけてあげる。好きな文字や値を渡してあげる */}
    <Test zz="ジーズの授業中です😂"/>
    
    <h2>{oohori}</h2>
    <button onClick={() => setOohori("東京で研修")}>押したらどうなるか</button>

    <h3> {num} </h3>
    <button onClick={random}>更新</button>
    {/* 表示の切り替え */}
    {num === 0 && <h1>0が出ました</h1>}
    {num === 1 && <h1>1が出ました</h1>}
    {num === 2 && <h1>2が出ました</h1>}

    </>
  )
}

export default App
