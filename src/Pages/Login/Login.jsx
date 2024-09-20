import { Link, useNavigate } from "react-router-dom";
import { login } from "../../services/user-service"
import { useState } from "react";
import { useTranslation } from "react-i18next";


function Login() {
  const [t, i18n] = useTranslation("API");

  console.log(t("ERR_NETWORK"));
  let email = '';
  let password = '';

  let [errorMessage, setErrorMessage] = useState(false);

  const navigation = useNavigate()
  return (
    <div className="container">
        <div className="row">
            <div className="col-lg-6 mx-auto pt-3">
            <form className="border px-2 py-2 rounded border-primary">
                <h1>Login</h1>
                <div className="form-group my-4 col-11 mx-auto">
                    <input type="email" className="form-control" onChange={(event)=> {email = event.target.value }} id="email" aria-describedby="emailHelp" placeholder="Enter email"/>
                </div>
                <div className="form-group mt-4 col-11 mx-auto">
                    <input type="password" className="form-control" onChange={(event)=> {password = event.target.value }} id="password" placeholder="Enter Password" />
                </div>
                {errorMessage ? <div className="mx-auto col-11"><label className="text-warning">{t(errorMessage)}</label></div> : null}
                <div>
                </div>
                <div className="mt-4 mb-2 mx-3">
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
    login(email, password).then((data)=>{navigation("/profile")}).catch(error => setErrorMessage(error.response?error.response.data.detail:error.code));
    console.log(errorMessage)
  }

}

export default Login
