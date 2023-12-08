import { useState } from "react";
import { auth, googleProvider } from "../config/firebase";
import { createUserWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import photo1 from "../assets/images/photo1.jpg";
import CustomButton from "../components/Button";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faGoogle } from "@fortawesome/free-brands-svg-icons";
import "@fortawesome/fontawesome-free/css/all.min.css";
const Auth = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });

  const [errorMessage, setErrorMessage] = useState("");

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newPassword = event.target.value;
    setFormData({ ...formData, password: newPassword });

    // Password validation
    const lengthCheck = newPassword.length >= 8;
    const numberCheck = /\d/.test(newPassword); // Checks for at least one digit

    if (!lengthCheck) {
      setErrorMessage("Password must be at least 8 characters long.");
    } else if (!numberCheck) {
      setErrorMessage("Password must contain at least 1 number.");
    } else {
      setErrorMessage("");
    }
  };

  console.log(formData);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleButtonClick = () => {
    // Add your button click logic here
  };

  const { email, password } = formData;

  const signIn = async () => {
    try {
      createUserWithEmailAndPassword(auth, email, password);
    } catch (error) {
      console.error(error);
    }
  };

  const signInWithGoogle = async () => {
    try {
      signInWithPopup(auth, googleProvider);
    } catch (error) {
      console.error(error);
    }
  };

  console.log(auth?.currentUser?.email);

  return (
    <>
      <main className="flex text-[15px] py-5">
        <section className="w-[50%] mx-5">
          <img className="w-full max-h-screen rounded-xl" src={photo1} alt="" />
        </section>
        <section className="w-1/2 flex mx-auto ml-5 flex-col justify-center items-center ">
          <h1 className="text-[45px]">Welcome 👋</h1>
          <p className="text-[30px]">Create an account and get started</p>
          <label className="mt-4">
            <p className="text-[18px] font-semibold">Email *</p>
            <input
              onChange={handleChange}
              name="email"
              type="email"
              className="w-[460px] mt- mb-5 px-2 py-[4px] border border-[#555] border-b-2 "
              placeholder="Enter your email address"
            />
          </label>

          <label>
            <p className="text-[18px] font-semibold">Create a password *</p>
            <input
              onChange={handlePasswordChange}
              name="password"
              type="password"
              className="w-[460px] px-2 py-[4px] border border-[#555] border-b-2 "
              placeholder="Create a password"
            />
            {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}
          </label>

          <CustomButton onClick={signIn}>Create account</CustomButton>
          <p className="text-[15px]">
            By clicking "Sign Up", you agree to our{" "}
            <a
              href=""
              className="text-[--primary-color] underline underline-offset-2"
            >
              Terms and Conditions
            </a>{" "}
            and{" "}
            <a
              href=""
              className="text-[--primary-color] underline underline-offset-2"
            >
              Privacy Policies
            </a>
          </p>
          <div className="mt-3 flex items-center text-[15px]">
            <hr className="w-40 mr-2" />
            <span className="">Or sign Up with</span>
            <hr className="w-40 ml-2" />
          </div>
          <CustomButton onClick={signInWithGoogle}>
            {/* <FontAwesomeIcon icon={faGoogle} className="google-icon" /> */}
            Sign Up with Google
          </CustomButton>
          <CustomButton onClick={handleButtonClick}>
            Sign Up with Apple
          </CustomButton>
          <hr className="w-full mt-4" />
          <p className="mt-4 text-[15px]">
            Already have an account?{" "}
            <a
              href=""
              className=" text-[--primary-color] underline underline-offset-2"
            >
              Login here
            </a>
          </p>
        </section>
      </main>
    </>
  );
};

export default Auth;
