import { SignIn } from '@clerk/clerk-react';

export default function SignInPage() {
  return (
    <div className="h-screen flex items-center justify-center bg-gray-100">
      <SignIn
        path="/sign-in"
        routing="path"
        signUpUrl="/sign-up"
        appearance={{
          elements: {
            formButtonPrimary: "bg-blue-600 hover:bg-blue-700 text-white",
          },
        }}
      />
    </div>
  );
}
