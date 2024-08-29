import { Link, history, useNavigate } from "react-router-dom";
import { register } from "../../services/user-service";

const Register = () => {
  const navigation = useNavigate()

  let username = ''
  let password = ''

  return (
    <div className="container">
        <div className="row">
            <div className="col-lg-6 mx-auto pt-3">
            <form className="border px-2 py-2 rounded border-primary">
                <h1>Register</h1>
                <div className="form-group my-4 col-11 mx-auto">
                    <input type="email" className="form-control" id="email" onChange={(event)=> {username = event.target.value }} aria-describedby="emailHelp" placeholder="Enter email"/>
                </div>
                <div className="form-group my-4 col-11 mx-auto">
                    <input type="password" className="form-control" onChange={(event)=> {password = event.target.value }} id="password" placeholder="Enter Password" />
                </div>
                <div>
                </div>
                <div>
                <button className="btn btn-primary" onClick={
                  (event) => {
                    event.preventDefault();
                    register(username, password).then(()=>{navigation("/login")});
                  }} 
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
}
export default Register