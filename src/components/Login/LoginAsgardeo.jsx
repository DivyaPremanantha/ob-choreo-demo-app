import '../../css/Login.css'
import profile from "../../images/profile.png";
import { useAuthContext } from "@asgardeo/auth-react";

export function  LoginAsgardeo() {
const { state, signIn, signOut } = useAuthContext();

return (
 <div className="main">
         <div className="sub-main">
             <div>
                 <div className="imgs">
                   <div className="container-image">
                     <img src={profile} alt="profile" className="profile"/>
                   </div>
                 </div>
             <div>

             <div className="login-button">
                <button onClick={ () => signIn() }>Login</button>
             </div>
         </div>
       </div>

       </div>
     </div>






);


};
