import { useState, useEffect } from 'react'
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

// APIのデータを保持するためのuseStateを準備します
const [data, setData] = useState([])

// useEffectの動作を確認しましょう
useEffect(() => {
console.log("長野で研究しているおおほり");

// APIから情報を取得し、jsの形に変換する。
const fetchData = async () => {
  try{
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/todos"
    );
    console.log(response, "取得の確認")
    // jsの形に変換します
    const data = await response.json();
    console.log(data, "中身を確認");
    // jsの形に変換したタンスのデータをuseStateに保持しないといけません
    setData(data);
  }catch(error) {
    console.error("Error!!!",error);
  }

  };
  fetchData();
}, []);

// コンソールログを書いて、どっちが前か後になるかチェックしましょう
console.log("きんぱつかのみ");


  return (
    <>
    <h1>初級のおさらい😂</h1>

    {/* ここがポイントです */}
    {/* mapというおまじないを使って画面を表示させます */}
    {/* mapは地図ではなく、マッピング */}
    {data.map((item, index) => (
      <div key={index}>
        <p>{item.title}</p>
        <p>{item.userId}</p>
        <p>{item.id}</p>
      </div>
    ))}

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
