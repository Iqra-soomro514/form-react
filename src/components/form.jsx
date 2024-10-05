import React, { useEffect, useState } from 'react'
import "./form.css"

const Form = () => {
    const [userDetails, setUserDetails] = useState({ FirstName: "", LastName: "", Emailaddress: "", Password: "", ConfirmPassword: "", });
    console.log(userDetails);

    const [userErr, setUserErr] = useState({ FirstNameErr: false, LastNameErr: false, EmailaddressErr: false, PasswordErr: false, ConfirmPasswordErr: false, })

    function formHandle(e) {
        e.preventDefault()
        if (userDetails.FirstName === "" && userDetails.LastName === "" && userDetails.Emailaddress === "" && userDetails.Password === "" && userDetails.ConfirmPassword === "") {
            setUserErr({ FirstNameErr: "true", LastNameErr: "true", EmailaddressErr: "true", PasswordErr: "true", ConfirmPasswordErr: "true", })
        }
        setUserDetails({ FirstName: "", LastName: "", Emailaddress: "", Password: "", ConfirmPassword: "" })

    }
    useEffect(() => {
        if (userDetails.FirstName !== "") {
            setUserErr({ ...userErr, FirstNameErr: false })
        }
        if (userDetails.LastName !== "") {
            setUserErr({ ...userErr, LastNameErr: false })
        }
        if (userDetails.Emailaddress !== "") {
            setUserErr({ ...userErr, EmailaddressErr: false })
        }
        if (userDetails.Password !== "") {
            setUserErr({ ...userErr, PasswordErr: false })
        }
        if (userDetails.ConfirmPassword !== "") {
            setUserErr({ ...userErr, ConfirmPasswordErr: false })
        }
    }, [userDetails])
    return (
        <div>
            <main className="form-signin w-100 m-auto mt-5">
                <form onSubmit={formHandle}>
                    <h1 className="h3 mb-3 fw-bold mt-5 text-center">Please sign in</h1>

                    <div className="form-floating my-3 mt-4">
                        <input type="text" className="form-control" placeholder="First Name" name="FirstName" style={{ border: userErr.FirstNameErr && "2px solid red" }} onChange={(e) => {
                            setUserDetails({ ...userDetails, FirstName: e.target.value });
                        }} />
                        <label>First Name</label>
                        {userErr.FirstNameErr && (
                            <span className='text-danger'>FirstName</span>)}
                    </div>
                    <div className="form-floating my-3 mt-4">
                        <input type="text" className="form-control" placeholder="Last Name" name="LastName" style={{ border: userErr.LastNameErr && "2px solid red" }} onChange={(e) => {
                            setUserDetails({ ...userDetails, LastName: e.target.value });
                        }} />
                        <label>Last Name</label>
                        {userErr.LastNameErr && (
                            <span className='text-danger'>LastName</span>)}
                    </div>
                    <div className="form-floating my-3 mt-4">
                        <input type="email" className="form-control" placeholder="Email address" name="Emailaddress" style={{ border: userErr.EmailaddressErr && "2px solid red" }} onChange={(e) => {
                            setUserDetails({ ...userDetails, Emailaddress: e.target.value });
                        }} />
                        <label>Email address</label>{
                            userErr.EmailaddressErr && (
                                <span className='text-danger'>Email address</span>
                            )
                        }
                    </div>
                    <div className="form-floating my-3 mt-4">
                        <input type="password" className="form-control" placeholder="Password" name="Password" style={{ border: userErr.PasswordErr && "2px solid red" }} onChange={(e) => {
                            setUserDetails({ ...userDetails, Password: e.target.value });
                        }} />
                        <label>Password</label>
                        {
                            userErr.EmailaddressErr && (
                                <span className='text-danger'>Password</span>
                            )
                        }
                    </div>
                    <div className="form-floating my-3 mt-4">
                        <input type="password" className="form-control" placeholder="Confirm Password" name="ConfirmPassword" style={{ border: userErr.ConfirmPasswordErr && "2px solid red" }} onChange={(e) => {
                            setUserDetails({ ...userDetails, ConfirmPassword: e.target.value });
                        }} />
                        <label>Confirm Password</label>
                        {
                            userErr.EmailaddressErr && (
                                <span className='text-danger'>Confirm Password</span>
                            )
                        }
                    </div>

                    <div className="form-check text-start my-3 text-center mt-5">
                        <button className="btn btn-primary w-25 py-1" type="submit">Sign in</button>
                    </div>
                </form>
            </main>
        </div>
    );
}
export default Form;
