import { useEffect } from "react";
import Navbar from "../components/Navbar";
import SignInForm from "../components/Form/SignInForm";

const Login = () => {
  useEffect(() => {
    document.title = `Login • Firegram`;
  }, []);
  return (
    <div className="bg-dark-500 h-screen w-full">
      <div className="container mx-auto max-w-screen-lg">
        <Navbar type="SIGN_UP" />
        <div className="flex flex-col items-center justify-center">
          <div className="text-white mb-8">
            <h2 className="text-center text-6xl font-semibold text-gray-100">
              Welcome to Firegram
            </h2>
            <p className="text-center font-medium text-xl text-lightGray-750 py-8 px-16">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui
              laboriosam porro maiores necessitatibus itaque laudantium. Id
              pariatur distinctio facilis nemo.
            </p>
          </div>

          <SignInForm />
        </div>
      </div>
    </div>
  );
};

export default Login;
