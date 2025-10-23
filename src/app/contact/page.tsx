import SiteHeader from "@/components/site-header";
import SiteFooter from "@/components/site-footer";

export const metadata = { title: "Contact — Daksh K. Singh" };

export default function ContactPage() {
  return (
    <>
      <SiteHeader />
      <main className="mx-auto max-w-5xl px-4 py-12 grid gap-4">
        <h1 className="text-3xl">Contact</h1>
        <p className="text-muted-foreground">
          Best ways to reach me:
          {" "}<a className="underline underline-offset-4" href="mailto:singh988@purdue.edu">singh988@purdue.edu</a>
          {" "}or{" "}
          <a className="underline underline-offset-4" href="mailto:singhkumardaksh@gmail.com">singhkumardaksh@gmail.com</a>
        </p>
        <p className="text-sm text-muted-foreground">Open to research collaborations and internship opportunities.</p>
      </main>
      <SiteFooter />
    </>
  );
}
