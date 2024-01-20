
export const Login =  () => {
    return (
       <div className="container">
        <div className="box" id="box1"><img src={require('./MainPicture_betaLabs.png')} alt="icon" id="mainPic" /></div>
        <div className="box" id="box2">
            <img src={require('./Screenshot 2023-12-20 082624.png')} alt="logo" id="logo" />
            <div id="box3">
                <p id="login">Login to your Account</p>
                <p id="txt">See what is going on with your business</p>
                <p id="googleLine"><a href=""><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfpE3WaLRGKF_zTMrhj2eJAHLjbaBqiXOsyC_05wBdxnpXgiNp6QWPfNS4rimmHvc2z-g&usqp=CAU" alt="google" height="28px" width="28px" id="googleLogo" /><span id="span1">Continue with Google</span></a></p>
                <p id="altLogin">------------------- or Sign in with Email -------------------</p>
                <form>
                    <p className="form1"><label htmlFor="email">Email</label></p>
                    <p className="form1"><input type="email" name="email" id="email" placeholder="mail@abc.com" /></p>
                    <br />
                    <p className="form1" id="pw1"><label htmlFor="pw">Password</label></p>
                    <p className="form2"><input type="password" name="pw" id="pw" /></p>
                    <div className="box4">
                        <label htmlFor="checkbox" id="checkbox">
                            <input type="checkbox" name="checkbox" id="checkbox" checked />Remember Me
                        </label>
                        <a href="" id="forgetpw">Forgot Password</a>
                    </div>
                    <br />
                    <button type="submit" name="login" id="submit">Login</button>

                    <p className="box5">
                        <span id="notRegister">Not Registered Yet</span>
                        <a href="" id="acc">Create an account</a>
                    </p>
                </form>
            </div>
        </div>
        </div>
       
       
    )
}