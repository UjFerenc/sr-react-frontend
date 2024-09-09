import { Link, useNavigate } from "react-router-dom";
import { login } from "../../services/user-service"
import { useState } from "react";



function Login() {
  let email = "";
  let password = "";

  let [errorMessage, setErrorMessage] = useState(false);

  const navigation = useNavigate()
  return (
    <div className="container">
        <div className="row">
            <div className="col-lg-6 mx-auto pt-3">
            <form className="border px-2 py-2 rounded border-primary">
                <h1>Login</h1>
                <div className="form-group my-4 col-11 mx-auto">
                    <input type="email" className="form-control" id="email" onChange={EmailOnChange} aria-describedby="emailHelp" placeholder="Enter email"/>
                </div>
                <div className="form-group my-4 col-11 mx-auto">
                    <input type="password" className="form-control" onChange={(event)=> {password = event.target.value }} id="password" placeholder="Enter Password" />
                </div>
                {errorMessage ? <label>{errorMessage}</label> : null}
                <div>
                </div>
                <div>
                <button className="btn btn-primary" onClick={OnSubmit} 
                  type="submit">
                    Login
                </button>
                <Link to="/register">
                  <button to="/register" className="btn btn-secoundary" type="button">
                      Register instead
                  </button>
                </Link>
                </div>
            </form>
            </div>
        </div>
    </div>

  )

function OnSubmit(event) {
  event.preventDefault();
  login(email, password).then((data)=>{navigation("/profile")}).catch(error => setErrorMessage(error.response.data));
  console.log(errorMessage)
}

function EmailOnChange(event) {
  email = event.target.value
  console.log(email);
}

}




export default Login