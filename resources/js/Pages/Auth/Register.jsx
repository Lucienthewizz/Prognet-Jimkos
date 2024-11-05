import React from "react";
import { useForm, Link } from "@inertiajs/react";
import PrimaryButton from "@Base/Buttons/PrimaryButton";

const SignUpPage = () => {
  const { data, setData, post, processing, errors } = useForm({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    password_confirmation: "",
  });

  const handleSignUp = (e) => {
    e.preventDefault();
    post("/register");
  };

  return (
    <div className="flex items-center justify-center min-h-screen px-6 bg-background">
      <div className="flex w-full max-w-5xl overflow-hidden bg-white rounded-lg shadow-lg">
        {/* Left Side - Image and Branding */}
        <div
          className="hidden bg-cover md:flex md:w-1/2"
          style={{
            backgroundImage: "url('/images/Backgrounds/Waves-12.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "top",
            backgroundRepeat: "no-repeat",
            backgroundPositionY: "10%",
            backgroundPositionX: "80%",
          }}
        >
          <div className="flex flex-col items-center justify-center w-full h-full p-12 bg-white bg-opacity-50">
            <img src="/images/logo2.png" alt="Logo" className="w-32 h-auto mb-4" />
            <h1 className="text-2xl font-semibold text-center text-text">
              Welcome to <span className="font-bold text-primary">JimKos</span>
            </h1>
          </div>
        </div>

        {/* Right Side - Form */}
        <div className="flex flex-col justify-center w-full p-8 md:p-12 md:w-1/2">
          <div className="mb-8 text-center">
            <h2 className="mb-2 text-3xl font-bold text-primary">Sign Up</h2>
          </div>
          <form className="space-y-6" onSubmit={handleSignUp}>
            <input
              type="text"
              placeholder="First Name"
              value={data.firstName}
              onChange={(e) => setData("firstName", e.target.value)}
              required
              className="w-full px-4 py-3 border rounded text-text bg-Lightgrey border-light-text focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary"
            />
            <input
              type="text"
              placeholder="Last Name"
              value={data.lastName}
              onChange={(e) => setData("lastName", e.target.value)}
              required
              className="w-full px-4 py-3 border rounded text-text bg-Lightgrey border-light-text focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary"
            />
            <input
              type="email"
              placeholder="Email"
              value={data.email}
              onChange={(e) => setData("email", e.target.value)}
              required
              className="w-full px-4 py-3 border rounded text-text bg-Lightgrey border-light-text focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary"
            />
            <input
              type="password"
              placeholder="Enter your password"
              value={data.password}
              onChange={(e) => setData("password", e.target.value)}
              required
              className="w-full px-4 py-3 border rounded text-text bg-Lightgrey border-light-text focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary"
            />
            <input
              type="password"
              placeholder="Confirm your password"
              value={data.password_confirmation}
              onChange={(e) => setData("password_confirmation", e.target.value)}
              required
              className="w-full px-4 py-3 border rounded text-text bg-Lightgrey border-light-text focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary"
            />
            {/* Display error messages */}
            {errors && (
              <div className="text-red-500">
                {Object.values(errors).map((error, index) => (
                  <p key={index}>{error}</p>
                ))}
              </div>
            )}
            <div className="flex items-center gap-4 mt-4">
              <input type="checkbox" required className="w-4 h-4 border-gray-400 rounded text-primary focus:ring-primary" />
              <span className="text-sm text-text">
                I agree to the{" "}
                <a href="#" className="text-primary hover:underline">
                  Terms & Conditions
                </a>
              </span>
            </div>
            <PrimaryButton
              type="submit"
              className="w-full py-3 mt-6 font-medium text-white rounded bg-primary hover:bg-secondary focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
              disabled={processing}
            >
              {processing ? "Loading..." : "Sign Up"}
            </PrimaryButton>
            <p className="text-secondary">
              Already have an account?{" "}
              <Link href="/login" className="text-primary hover:underline">
                Sign In
              </Link>
            </p>
          </form>
          <div className="flex items-center justify-center mt-8">
            <span className="text-sm text-secondary">Or sign up with</span>
          </div>
          <div className="flex gap-4 mt-4">
            <PrimaryButton
              type="button"
              onClick={() => (window.location.href = "/auth/google")}
              className="flex items-center justify-center w-full py-2 font-medium bg-white border rounded text-dark-bg border-light-text hover:bg-Lightgrey"
            >
              <img src="/images/icons8-google.svg" alt="Google" className="w-5 h-5 mr-2" />
              Google
            </PrimaryButton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;
