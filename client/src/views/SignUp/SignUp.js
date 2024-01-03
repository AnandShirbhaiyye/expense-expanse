import React, { useState, useEffect } from "react";
import "./SignUp.css";
import { Link } from "react-router-dom";
import showToast from "crunchy-toast";
import axios from "axios";
import Navbar from "../../components/Navbar/Navbar";

function SignUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [address, setAddress] = useState("");
  const [gender, setGender] = useState("male");
  const [password, setPassword] = useState("");

  async function signupUser() {
    if (!name) {
      showToast("name is required", "alert", 4000);
      return;
    }
    if (!email) {
      showToast("email is required", "alert", 4000);
      return;
    }
    if (!password) {
      showToast("password is required", "alert", 4000);
      return;
    }
    if (!mobile) {
      showToast("mobile number is required", "alert", 4000);
      return;
    }
    if (!address) {
      showToast("address is required", "alert", 4000);
      return;
    }
    const response = await axios.post("/signup", {
      name: name,
      email: email,
      mobile: mobile,
      password: password,
      address: address,
      gender: gender,
    });
    console.log(response.data);
    if (response.data.success) {
      showToast(response.data.message, "success", 3000);
      window.location.href = "/login";
    } else {
      showToast(response.data.message, "alert", 3000);

      setName("");
      setEmail("");
      setMobile("");
      setPassword("");
      setAddress("");
    }
  }

  useEffect(() => {
    const storageUser = JSON.parse(localStorage.getItem("user") || "{}");
    console.log(storageUser);

    if (storageUser?.email) {
      showToast("You are already logged in!", "danger", 4000);
      window.location.href = "/";
    }
  }, []);

  return (
    <>
      <Navbar />
      <form>
        <div className="signup-container shadow-lg p-4 mb-5  rounded">
          <h3 className="text-center">SignUp</h3>
          <div className="container">
            <div className="row">
              <div className="col-md-6 mt-3">
                <input
                  type="text"
                  className="form-control mb-4"
                  placeholder="enter your name"
                  value={name}
                  onChange={(e) => {
                    setName(e.target.value);
                  }}
                />
                <input
                  type="password"
                  className="form-control mb-4"
                  placeholder="enter your Password"
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                />
                <input
                  type="text"
                  className="form-control mb-4"
                  placeholder="enter your address"
                  value={address}
                  onChange={(e) => {
                    setAddress(e.target.value);
                  }}
                />
              </div>

              <div className="col-md-6 mt-3">
                <input
                  type="email"
                  className="form-control mb-4"
                  placeholder="enter your email"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                />
                <input
                  type="numbet"
                  className="form-control mb-4"
                  placeholder="enter your mobile"
                  value={mobile}
                  onChange={(e) => {
                    setMobile(e.target.value);
                  }}
                />
                <div className="d-flex justify-content-around">
                  <div>
                    <input
                      type="radio"
                      id="male"
                      name="gender"
                      className="gender mb-4"
                      checked={gender === "male"}
                      onClick={() => {
                        setGender("male");
                      }}
                    />
                    <label htmlFor="male">Male</label>
                  </div>

                  <div>
                    <input
                      type="radio"
                      id="female"
                      name="gender"
                      className="gender mb-4"
                      checked={gender === "female"}
                      onClick={() => {
                        setGender("female");
                      }}
                    />
                    <label htmlFor="female">Female</label>
                  </div>
                </div>
              </div>
              <button
                type="button"
                className="btn btn-dark w-100 mb-3"
                onClick={signupUser}
              >
                SignUp
              </button>
              <p className="text-center">
                Already have an Account,
                <Link to="/login" className="signup-link">
                  <b>login</b>
                </Link>
              </p>
            </div>
          </div>
        </div>
      </form>
    </>
  );
}

export default SignUp;


// import React, { useState, useEffect } from "react";
// import "./SignUp.css";
// import { Link } from "react-router-dom";
// import showToast from "crunchy-toast";
// import axios from "axios";
// import { useForm } from "react-hook-form";
// import Navbar from "../../components/Navbar/Navbar";

// function SignUp() {
//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//   } = useForm();

//   const onSubmit = async (data) => {
//     console.log(data);
//     await signupUser(data);
//   };

//   const [gender, setGender] = useState("male");

//   async function signupUser(data) {
//     try {
//       const response = await axios.post("/signup", data);
//       console.log(response.data);

//       if (response.data.success) {
//         showToast(response.data.message, "success", 3000);
//         window.location.href = "/login";
//       } else {
//         showToast(response.data.message, "alert", 3000);
//       }
//     } catch (error) {
//       console.error("Error signing up:", error.message);
//     }
//   }

//   useEffect(() => {
//     const storageUser = JSON.parse(localStorage.getItem("user") || "{}");
//     console.log(storageUser);

//     if (storageUser?.email) {
//       showToast("You are already logged in!", "danger", 4000);
//       window.location.href = "/";
//     }
//   }, []);

//   return (
//     <>
//       <Navbar />
//       <form onSubmit={handleSubmit(onSubmit)}>
//         <div className="signup-container shadow-lg p-4 mb-5 rounded">
//           <h3 className="text-center">SignUp</h3>
//           <div className="container">
//             <div className="col-md-6 mt-3">
//               <input
//                 type="text"
//                 className={`form-control mb-4 ${errors.firstName ? "is-invalid" : ""}`}
//                 placeholder="enter your name"
//                 {...register("firstName", { required: "Name is required" })}
//               />
//               {errors.firstName && (
//                 <div className="invalid-feedback">{errors.firstName.message}</div>
//               )}

//               <input
//                 type="password"
//                 className={`form-control mb-4 ${errors.password ? "is-invalid" : ""}`}
//                 placeholder="enter your Password"
//                 {...register("password", { required: "Password is required" })}
//               />
//               {errors.password && (
//                 <div className="invalid-feedback">{errors.password.message}</div>
//               )}

//               <input
//                 type="text"
//                 className={`form-control mb-4 ${errors.address ? "is-invalid" : ""}`}
//                 placeholder="enter your address"
//                 {...register("address", { required: "Address is required" })}
//               />
//               {errors.address && (
//                 <div className="invalid-feedback">{errors.address.message}</div>
//               )}
//             </div>
      
//             <button
//               type="submit"
//               className="btn btn-dark w-100 mb-3"
//             >
//               SignUp
//             </button>
//           </div>
//         </div>
//       </form>
//     </>
//   );
// }

// export default SignUp;

