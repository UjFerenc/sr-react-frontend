import { Link, useNavigate } from "react-router-dom";
import { register } from "../../Services/user-service";
import { useState } from "react";
import { useTranslation } from "react-i18next";

const Register = () => {
  const [t] = useTranslation("API");
  const navigation = useNavigate()

  let email = ''
  let password = ''

  let [errorMessage, setErrorMessage] = useState(false);

  return (
    <div className="container">
        <div className="row">
            <div className="col-lg-6 mx-auto pt-3">
            <form className="border px-2 py-2 rounded border-primary">
                <h1>Register</h1>
                <div className="form-group my-4 col-11 mx-auto">
                    <input type="email" className="form-control" id="email" onChange={(event)=> {email = event.target.value }} aria-describedby="emailHelp" placeholder="Enter email"/>
                </div>
                <div className="form-group my-4 col-11 mx-auto">
                    <input type="password" className="form-control" onChange={(event)=> {password = event.target.value }} id="password" placeholder="Enter Password" />
                </div>
                {errorMessage ? <label>{t(errorMessage)}</label> : null}
                <div>
                </div>
                <div>
                <button className="btn btn-primary" onClick={OnSubmit} 
                  type="submit">
                    Register
                </button>
                <Link to="/login">
                  <button className="btn btn-secoundary" type="button">
                      Login instead
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
    register(email, password).then((data)=>{navigation("/login")}).catch(error => setErrorMessage(error.response?error.response.data.detail:error.code));
    console.log(errorMessage)
  }
}
export default Register