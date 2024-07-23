import { useContext, useRef, useState } from "react";
import { Button, Form, Alert } from "react-bootstrap";

import { MyContext } from "../context";

const Stage1 = () => {
  const textInput = useRef();
  const context = useContext(MyContext);
  const [error, setError] = useState([false, ""]); // '' is for the msg

  const handleSubmition = (e) => {
    e.preventDefault();
    const value = textInput.current.value;
    const validate = validateInput(value);

    //if it false then it will display a msg error
    //otherwise it will add the name to the list
    if (validate) {
      setError([false, ""]);
      context.addPlayer(value);
      textInput.current.value = "";
    }
  }

  const validateInput = (value) => {
    if(value === ''){
      setError([true,'الرجاء كتابة اسم']);
      return false;
    }
    if(value.length < 2){
      setError([true,' الرجاء كتابة اسم حقيقي ']);
      return false;
    }
    return true;
  }

  console.log(context);
  return (
    <>
      <Form onSubmit={handleSubmition} className="mt-4">
        <Form.Group>
          <Form.Control
            className="placeHolderMT4"
            type="text"
            placeholder=" ادخل اسم اللاعبين"
            ref={textInput}
          ></Form.Control>
        </Form.Group>

        {/* show errors */
        error[0] ?
        // <Alert>
        //   {error[1]}

        // </Alert>

        <div class="alert alert-danger" role="alert">
         <strong> {error[1]}</strong>
        </div>

        :null
        }

        <Button className="miami" vatiant="primary" type="submit">
          ادخال اللاعب
        </Button>

        {/* this only appear if the num of players are 1 or more */}
        {context.players && context.players.length > 0 ? (
          <>
            <hr />

            <div>
              <ul className="list-group">
                {context.players.map((player, idx) => (
                  <li
                    key={idx}
                    className="list-group-item d-flex justify-content-between align-items-center list-group-item-action"
                  >
                    {player}
                    <span
                      className="badge badge-danger"
                      onClick={() => context.removePlayer(idx)}
                    >
                      x
                    </span>
                  </li>
                ))}
              </ul>
                <div
                className="action_button"
                onClick={()=>context.next()}>

                البدأ

                </div>

            </div>
          </>
        ) : null}
      </Form>
    </>
  );
};

export default Stage1;
