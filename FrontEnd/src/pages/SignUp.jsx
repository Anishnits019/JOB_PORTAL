import { SignUp } from '@clerk/clerk-react';

export default function SignUpPage() {
  return (
    <div className="h-screen flex items-center justify-center bg-gray-100">
      <SignUp
        path="/sign-up"
        routing="path"
        signInUrl="/sign-in"
        appearance={{
          elements: {
            formButtonPrimary: "bg-green-600 hover:bg-green-700 text-white",
          },
        }}
      />
    </div>
  );
}
