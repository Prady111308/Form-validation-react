import { useState } from "react";
import "./App.css";

function App() {
  const [values, setValues] = useState({
    name: "",
    phone: "",
    email: "",
    password: "",
    confirm_password: "",
  });

  

  const inputs = [
    {
      name: "name",
      type: "text",
      errormessage:
        "Patient Name should be 3-50 charcters and should't contain any special character.",
      pattern: "^[A-Za-z0-9]{3,50}$",
      placeholder: "Enter Full Name",
      required: true,
    },
    {
      name: "phone",
      type: "text",
      placeholder: "Mobile Number",
      errormessage: "Please Enter Valid Phone Number.",
      pattern: "^[0-9]{10}$",
      autoComplete: "off",
      maxLength: 10,
      required: true,
    },
    {
      name: "email",
      type: "email",
      placeholder: "Enter Email Address",
      errormessage: "Please Enter Valid Email ID.",
    },
    {
      name: "password",
      type: "password",
      placeholder: "Password",
      errormessage:
        "Must contain at least one number and one uppercase and lowercase letter and one special character, and at least 8 or more characters",
      pattern: "(?=.*d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*-+=_]).{8,}",
      required: true,
    },
    {
      name: "confirm_password",
      type: "password",
      placeholder: "Confirm Password",
      errormessage: "Password and Confirm Password must be same",
      pattern:values.password,
      required: true,
    },
  ];

  const [focused,setFocused] = useState(new Array(inputs.length).fill(false));

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(values);
    setValues({
      name: "",
      phone: "",
      email: "",
      password: "",
      confirm_password: "",
    });
    setFocused(new Array(inputs.length).fill(false));
  };

  const handleInput = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };
  const handleFocus=(index)=>{
    setFocused([...focused.slice(0,index),true,...focused.slice(index+1)])
  }

  return (
    <>
      <h2>Registration Form</h2>
      <form onSubmit={(e) => handleSubmit(e)}>
        {inputs.map((input, index) => {
          return (
            <div className="input_container" key={index}>
              <input
                {...input}
                value={values[input.name]}
                // ref={()=>inputRef.current[index]=input}
                onChange={(e) => handleInput(e)}
                focused={focused[index].toString()}
                onBlur={()=>handleFocus(index)}
              />
              <span>{input.errormessage}</span>
            </div>
          );
        })}
        <br />
        <br />
        <button className="btn" type="submit">
          Submit
        </button>
      </form>
      <br />
        <br />
        <br />
        <br />
      <i> ********** Form validation using reactjs and CSS *********</i>
    </>
  );
}

export default App;
