import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Film, Search } from "lucide-react"

// Przykładowe dane filmów
const videos = [
  {
    id: "1",
    title: "Jak nagrywać krótkie filmy",
    author: "VideoMaster",
    views: 1240,
    date: "2023-10-15",
    thumbnail: "/placeholder.svg?height=180&width=320",
    duration: "2:45",
  },
  {
    id: "2",
    title: "Mój pierwszy vlog",
    author: "JanVlogger",
    views: 856,
    date: "2023-10-10",
    thumbnail: "/placeholder.svg?height=180&width=320",
    duration: "3:20",
  },
  {
    id: "3",
    title: "Poradnik montażu wideo",
    author: "EditPro",
    views: 2100,
    date: "2023-09-28",
    thumbnail: "/placeholder.svg?height=180&width=320",
    duration: "5:12",
  },
  {
    id: "4",
    title: "Najlepsze miejsca w Polsce",
    author: "TravelPoland",
    views: 3500,
    date: "2023-09-20",
    thumbnail: "/placeholder.svg?height=180&width=320",
    duration: "4:30",
  },
  {
    id: "5",
    title: "Jak zacząć przygodę z programowaniem",
    author: "CodeMaster",
    views: 1800,
    date: "2023-09-15",
    thumbnail: "/placeholder.svg?height=180&width=320",
    duration: "6:15",
  },
  {
    id: "6",
    title: "Przepis na idealne ciasto",
    author: "KuchniaMagdy",
    views: 2700,
    date: "2023-09-10",
    thumbnail: "/placeholder.svg?height=180&width=320",
    duration: "3:45",
  },
]

export default function VideosPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="border-b">
        <div className="container flex items-center justify-between h-16 px-4 mx-auto">
          <Link href="/" className="flex items-center gap-2 font-semibold">
            <Film className="w-5 h-5" />
            <span>VideoShare</span>
          </Link>
          <div className="flex-1 max-w-md mx-auto px-4">
            <div className="relative">
              <Search className="absolute left-2 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input type="search" placeholder="Szukaj filmów..." className="pl-8 w-full" />
            </div>
          </div>
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
      <main className="flex-1 container mx-auto px-4 py-8">
        <h1 className="text-2xl font-bold mb-6">Przeglądaj filmy</h1>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {videos.map((video) => (
            <Link key={video.id} href={`/videos/${video.id}`} className="group">
              <div className="rounded-lg overflow-hidden border bg-card text-card-foreground shadow">
                <div className="relative">
                  <Image
                    src={video.thumbnail || "/placeholder.svg"}
                    alt={video.title}
                    width={320}
                    height={180}
                    className="w-full aspect-video object-cover"
                  />
                  <div className="absolute bottom-2 right-2 bg-black/70 text-white text-xs px-1 rounded">
                    {video.duration}
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="font-medium line-clamp-2 group-hover:text-primary transition-colors">{video.title}</h3>
                  <p className="text-sm text-muted-foreground mt-1">{video.author}</p>
                  <p className="text-xs text-muted-foreground mt-1">
                    {video.views} wyświetleń • {new Date(video.date).toLocaleDateString("pl-PL")}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </main>
      <footer className="py-6 border-t">
        <div className="container px-4 mx-auto text-center text-sm text-muted-foreground">
          &copy; {new Date().getFullYear()} VideoShare. Wszelkie prawa zastrzeżone.
        </div>
      </footer>
    </div>
  )
}
