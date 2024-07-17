"use client";
import { useUser } from "@clerk/nextjs";

export default function Example() {
  const { isLoaded, isSignedIn, user } = useUser();

  if (!isLoaded || !isSignedIn) {
    return <p>Please Sign-in</p>;
  }

  return <div>Hello, {user.firstName} welcome to Clerk</div>;
}