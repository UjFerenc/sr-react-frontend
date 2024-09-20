import { useNavigate } from "react-router-dom";


const Profile = () => {
    const navigation = useNavigate()

    return (
        <div className="container">
            <div className="row pt-3">
                <div className="col-lg-6 mx-auto">
                    <h1 className="text-center">Character List</h1>
                    <div className="mx-auto lg-col-2 sm-col-4 col-12">
                        <button className="btn btn-primary col-12" onClick={()=>navigation('/profile/character-creation')}>Create new</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Profile