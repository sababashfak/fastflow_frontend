interface GoogleLoginBtnProps {
  isSignup?: boolean;
}

const GoogleLoginBtn: React.FC<GoogleLoginBtnProps> = ({
  isSignup = false,
}) => {
  const handleGooglelogin = () => {
    window.open(
      `${import.meta.env.VITE_BACKEND_URL}/api/v1/auth/google/callback`,
      "_self",
    );
  };

  return (
    <div className="mt-2">
      <p className="mb-2 text-center text-gray-600">or</p>
      <button
        onClick={handleGooglelogin}
        className="flex w-full items-center justify-center gap-5 rounded-md bg-gray-200 p-2 duration-200 hover:bg-gray-300/70"
      >
        <img src="/google.png" alt="Google" className="w-8" />
        <span className="font-medium text-gray-700">
          {!isSignup ? "Login" : "Signup"} with Google
        </span>
      </button>
    </div>
  );
};

export default GoogleLoginBtn;
