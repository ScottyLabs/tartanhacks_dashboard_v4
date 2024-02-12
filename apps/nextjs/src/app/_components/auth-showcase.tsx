import { UserButton } from "@clerk/nextjs";

export async function AuthShowcase() {
  return (
    <div className="h-screen">
      <UserButton afterSignOutUrl="/" />
    </div>
  );
}
