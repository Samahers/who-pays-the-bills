import { useContext } from "react";
import { MyContext } from "../context";

const Stage2 = () =>{
    const context = useContext(MyContext);
    return(<>
    <div
    className="result_wrapper"
    >
    <h3>الخاسر هو</h3>
    {context.result}
    </div>

    <div
    className="action_button btn1"
    onClick={()=> context.resetGame()}
    >
        البدأ من جديد
    </div>

    <div
    className="action_button btn_2"
    onClick={()=> context.getNewLoser()}
    >
        اختيار خاسر اخر
    </div>

    </>)
}

export default Stage2;