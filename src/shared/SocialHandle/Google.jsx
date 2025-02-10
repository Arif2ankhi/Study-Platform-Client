import React, { useContext } from 'react';
import AuthContext from '../../provider/AuthContext/AuthContext';

const Google = () => {
    const { signInWithGoogle } = useContext(AuthContext);
    
    const handleGoogleSignIn = () => {
        signInWithGoogle()
           .then(result => {
            console.log('Google sign-in successful', result.user)
           })
           .catch(error =>{
            console.log('Google sign-in error', error)
            })
          }

    return (
        <div>
             {/* <div className="divider"></div> */}
            <button onClick={handleGoogleSignIn} className='btn'>Google</button>
        </div>
    );
};

export default Google;