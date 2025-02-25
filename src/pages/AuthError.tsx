import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const AuthError = () => {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center p-4">
      <div className="w-full max-w-md space-y-6 text-center">
        <img
          src="/lovable-uploads/152a966e-3c8c-4533-a044-542cbcc6d8e5.png"
          alt="SPLY Capital"
          className="w-48 mx-auto mb-6"
        />
        <h1 className="text-2xl font-bold text-gray-900 mb-4">
          Authentication Error
        </h1>
        <p className="text-gray-600 mb-8">
          There was an error processing your request. Please try again or contact support if the problem persists.
        </p>
        <Link to="/auth">
          <Button className="bg-gray-800 hover:bg-gray-700 text-white">
            Back to Login
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default AuthError;