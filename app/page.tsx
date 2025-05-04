import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Film } from "lucide-react"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="border-b">
        <div className="container flex items-center justify-between h-16 px-4 mx-auto">
          <Link href="/" className="flex items-center gap-2 font-semibold">
            <Film className="w-5 h-5" />
            <span>VideoShare</span>
          </Link>
          <div className="flex items-center gap-4">
            <Link href="/login">
              <Button variant="ghost" size="sm">
                Zaloguj się
              </Button>
            </Link>
            <Link href="/register">
              <Button size="sm">Zarejestruj się</Button>
            </Link>
          </div>
        </div>
      </header>
      <main className="flex-1">
        <section className="py-20 text-center">
          <div className="container px-4 mx-auto">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
              Udostępniaj swoje krótkie filmy
            </h1>
            <p className="max-w-lg mx-auto mt-4 text-xl text-muted-foreground">
              Twórz, udostępniaj i oglądaj krótkie filmy w jednym miejscu.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mt-8">
              <Link href="/register">
                <Button size="lg" className="gap-2">
                  Rozpocznij teraz
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
              <Link href="/videos">
                <Button variant="outline" size="lg">
                  Przeglądaj filmy
                </Button>
              </Link>
            </div>
          </div>
        </section>
        <section className="py-20 bg-muted">
          <div className="container px-4 mx-auto">
            <h2 className="text-3xl font-bold text-center">Jak to działa</h2>
            <div className="grid gap-8 mt-12 md:grid-cols-3">
              <div className="p-6 bg-background rounded-lg shadow">
                <div className="flex items-center justify-center w-12 h-12 mb-4 rounded-full bg-primary/10 text-primary">
                  1
                </div>
                <h3 className="mb-2 text-xl font-medium">Zarejestruj się</h3>
                <p className="text-muted-foreground">Utwórz konto, aby móc przesyłać i oglądać filmy.</p>
              </div>
              <div className="p-6 bg-background rounded-lg shadow">
                <div className="flex items-center justify-center w-12 h-12 mb-4 rounded-full bg-primary/10 text-primary">
                  2
                </div>
                <h3 className="mb-2 text-xl font-medium">Prześlij film</h3>
                <p className="text-muted-foreground">Dodaj swoje krótkie filmy do platformy.</p>
              </div>
              <div className="p-6 bg-background rounded-lg shadow">
                <div className="flex items-center justify-center w-12 h-12 mb-4 rounded-full bg-primary/10 text-primary">
                  3
                </div>
                <h3 className="mb-2 text-xl font-medium">Udostępniaj i oglądaj</h3>
                <p className="text-muted-foreground">Udostępniaj swoje filmy i oglądaj filmy innych użytkowników.</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="py-6 border-t">
        <div className="container px-4 mx-auto text-center text-sm text-muted-foreground">
          &copy; {new Date().getFullYear()} VideoShare. Wszelkie prawa zastrzeżone.
        </div>
      </footer>
    </div>
  )
}
