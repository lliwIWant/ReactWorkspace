import {useState} from "react";
import './App.css';
import Box from './compoent/Box';
import Card from './compoent/Card';
import TryAgain from "./compoent/TryAgain";

// 1. 박스 2개 (타이틀, 사진, 결과과)
// 2. 가위 바위 보 버튼 생성
//3. 버튼을 클릭하면 클릭한 값이 박스에 보임
//4. 컴퓨터는 랜덤하게 아이템 선택이 된다.
//5. 3 4 의 결과를 가지고 누가 이겼는지 승패를 따진다
//6. 승패 결과에 따라 테두리 색이 바뀐다(이기면-초록, 지면-빨강 비기면-검은색)

let userCount = 0;
let computerCount = 0;
let times = 0;

const choice = {
  rock:{
    name: "Rock",
    img: "https://cdn.pixabay.com/photo/2017/05/25/16/35/rock-salt-2343770_1280.jpg"
  },
  scissors:{
    name: "Scissors",
    img: "https://cdn.pixabay.com/photo/2014/04/10/19/53/scissors-321238_1280.jpg"
  },
  paper:{
    name: "Paper",
    img: "https://cdn.pixabay.com/photo/2023/04/14/11/23/origami-7924845_1280.jpg"
  }
}

const defaultChoice = {
  name: "none",
  img: "https://velog.velcdn.com/images/artwoojin/post/c23d84bc-eaa1-4362-94e6-f62b8d90514f/image.gif"
};

function App() {
  const[ userSelect, setUserSelect] = useState(defaultChoice);
  const [computerSelect, setComputerSelect] =useState(defaultChoice);
  const[result, setResult] =useState("");
  const[computerResult, setComputerResult] = useState("");
  
  const play= (userChoice)=>{
    console.log(userChoice);
    setUserSelect(choice[userChoice])
    let computerChoice = randomChoice();
    setComputerSelect(computerChoice);
    
    setResult(judgement(choice[userChoice], computerChoice));
    if(judgement(choice[userChoice], computerChoice) === "win"){
      setComputerResult("lose");
      userCount ++;
    }else if(judgement(choice[userChoice], computerChoice) === "lose"){
      setComputerResult("win");
      computerCount ++;   
    }else{
      setComputerResult("tie");
    }

    times++;
  };

  const judgement =(user, computer)=>{
    console.log("user",userSelect,"computer",computer);

    // user == computer tie
    // user == rock, computer scissors => user win
    // user == rock, computer paper => user loser
    // user == scissors computer == paper => user win
    // user -- scissors computer == rock => user loser
    // user == paper computer rock user win
    // user papaer computer scissors user loser

    if(user.name == computer.name){
      return "tie"
    }else if(user.name== "Rock"){
      setComputerResult()
      return computer.name == "Scissors" ?"win":"lose" 
    }else if(user.name =="Scissors") {
      return computer.name == "Paper"?"win":"lose"
    }else if(user.name == "Paper") {
      return computer.name =="Rock" ?"win":"lose"
    }
  }


  const randomChoice = ()=>{
  
    let itemArray = Object.keys(choice);// 객체에 키값만 뽑아서 배열로 만들어준다.
    console.log("item array", itemArray);
    let randomItem = Math.floor(Math.random()*itemArray.length); 
    //Math.random(): 랜덤 함수
    // Math.floor: 버림 처리
    console.log("random value", randomItem);

    let final = itemArray[randomItem];
    console.log("final",final);
    return choice[final]
  }


  return (
    <div className="whole">
      <div className="main background">
        <Box title="You" item={userSelect} result={result} count={userCount} times={times}/>
        <Box title="computer" item={computerSelect} result={computerResult} count={computerCount}  times={times}/>
      </div>
      <div className="main">
        {/* onClick 값에 play()를 작성하면 클릭 여부 상관 없이 바로 실행되기 때문에 콜백함수 형태로 를 이용해야 한다. */}
        {/* 만약 play 함수명만 작성하면 클릭했을때 함수를 시작한다. */}
            {/* <button onClick={()=>play("scissors")}>✌️</button>
            <button onClick={()=>play("rock")}>✊</button>
            <button onClick={()=>play("paper")}>✋</button>
 */}
            <Card click={()=>play("rock")} object={choice.rock}/>
            <Card click={()=>play("scissors")} object={choice.scissors}/>
            <Card click={()=>play("paper")} object={choice.paper}/>
            <TryAgain click={() => {

                if(times!=0){
                  setUserSelect(defaultChoice);
                  setComputerSelect(defaultChoice);
                  setResult("");
                  setComputerResult("");
                  userCount =0;
                  computerCount =0;
                  times=0;
                }else{
                  alert("승패가 결정나지 않았어요.")
                }
              }}/>

        </div>
    </div>
  );
}

export default App;
