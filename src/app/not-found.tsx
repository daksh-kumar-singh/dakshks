import Link from "next/link";

export default function NotFound() {
  return (
    <main className="min-h-screen grid place-items-center px-4 text-center">
      <div className="grid gap-3">
        <h1 className="text-3xl">Page not found</h1>
        <p className="text-muted-foreground">The page you’re looking for doesn’t exist.</p>
        <Link href="/" className="underline underline-offset-4">Go home</Link>
      </div>
    </main>
  );
}
