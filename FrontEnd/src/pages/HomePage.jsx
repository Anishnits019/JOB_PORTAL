import { UserButton, useUser } from '@clerk/clerk-react';

export default function HomePage() {
  const { user } = useUser();

  return (
    <div className="h-screen flex flex-col items-center justify-center bg-white">
      <h1 className="text-3xl font-bold mb-4">Welcome {user?.firstName || "Guest"}!</h1>
      <UserButton afterSignOutUrl="/sign-in" />
    </div>
  );
}
