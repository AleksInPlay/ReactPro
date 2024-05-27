import "./styles.css";
import Button from "../../components/Button/Button";
import Input from "../../components/Input/Input";
import Counter from "../../components/Counter/Counter"

function Lesson04() {
//1 sposob peredachi funkcii
    const showMessage = () => {
    alert("Hello, user");
};

const showNameMessage = (userName)=>{
    alert(`Hello, ${userName}`)

};

const onChange = (event, message) => {
    //console.log(event);
    console.log(`${event.target.value} - ${message}`);
};

    return (
        <div className="lesson04-container">
            {/*<Input onInputChange={(event)=>onChange(event, 'value')} />*/}
       {/*2 sposb peredachi funkcii*/}
           {/*<Button name="Func Inner" onButtonClick={() => alert("Hi")} />
            <Button name="Func Outer" onButtonClick={showMessage} />
            {/*3sposob peredachi funkcii(s parametrami)*/}
            {/*<Button name="Func With Parametrs" onButtonClick={() => showNameMessage("Tom")} />*/}

            <Counter />
            </div>

            
    );

}

export default Lesson04;