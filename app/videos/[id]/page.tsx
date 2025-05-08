
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Film, ThumbsUp, Share2, Bookmark } from "lucide-react"
import VideoPlayer from "./video-player"
import CommentSection from "./comment-section"

type Props = {
  // Next.js 15 passes params as a Promise
  params: Promise<{ id: string }>;
};

// Przykładowe dane filmu
const videos = {
  "1": {
    id: "1",
    title: "Jak nagrywać krótkie filmy",
    description:
      "W tym filmie pokazuję, jak nagrywać krótkie filmy za pomocą smartfona. Omawiam podstawowe techniki, oświetlenie i montaż.",
    author: "VideoMaster",
    authorAvatar: "/placeholder.svg?height=40&width=40",
    views: 1240,
    likes: 85,
    date: "2023-10-15",
    videoUrl: "/placeholder-video.mp4",
    thumbnail: "/placeholder.svg?height=180&width=320",
  },
  "2": {
    id: "2",
    title: "Mój pierwszy vlog",
    description: "Dzielę się moimi doświadczeniami z tworzenia pierwszego vloga.",
    author: "JanVlogger",
    authorAvatar: "/placeholder.svg?height=40&width=40",
    views: 856,
    likes: 45,
    date: "2023-10-10",
    videoUrl: "/placeholder-video.mp4",
    thumbnail: "/placeholder.svg?height=180&width=320",
  },
}

// Przykładowe dane powiązanych filmów
const relatedVideos = [
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
]

export default async function VideoPage({ params }: Props) {
  // Pobierz ID z parametrów URL lub użyj domyślnego ID "1"
  const { id: videoId } = await params;

  // Pobierz dane filmu na podstawie ID lub użyj domyślnych danych
  const video = videos[videoId as keyof typeof videos] || videos["1"]

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
      <main className="flex-1 container mx-auto px-4 py-8">
        <div className="grid gap-8 lg:grid-cols-3">
          <div className="lg:col-span-2 space-y-6">
            <VideoPlayer videoUrl={video.videoUrl} thumbnail={video.thumbnail} />
            <div>
              <h1 className="text-2xl font-bold">{video.title}</h1>
              <div className="flex items-center justify-between mt-4">
                <div className="flex items-center gap-4">
                  <Image
                    src={video.authorAvatar || "/placeholder.svg"}
                    alt={video.author}
                    width={40}
                    height={40}
                    className="rounded-full"
                  />
                  <div>
                    <p className="font-medium">{video.author}</p>
                    <p className="text-sm text-muted-foreground">
                      {video.views} wyświetleń • {new Date(video.date).toLocaleDateString("pl-PL")}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Button variant="outline" size="sm" className="gap-1">
                    <ThumbsUp className="h-4 w-4" />
                    <span>{video.likes}</span>
                  </Button>
                  <Button variant="outline" size="sm" className="gap-1">
                    <Share2 className="h-4 w-4" />
                    <span>Udostępnij</span>
                  </Button>
                  <Button variant="outline" size="sm" className="gap-1">
                    <Bookmark className="h-4 w-4" />
                    <span>Zapisz</span>
                  </Button>
                </div>
              </div>
            </div>
            <div className="bg-muted p-4 rounded-lg">
              <p className="whitespace-pre-line">{video.description}</p>
            </div>
            <CommentSection videoId={videoId} />
          </div>
          <div className="space-y-6">
            <h2 className="text-xl font-bold">Powiązane filmy</h2>
            <div className="grid gap-4">
              {relatedVideos.map((relatedVideo) => (
                <Link key={relatedVideo.id} href={`/videos/${relatedVideo.id}`} className="group">
                  <div className="flex gap-3">
                    <div className="relative flex-shrink-0">
                      <Image
                        src={relatedVideo.thumbnail || "/placeholder.svg"}
                        alt={relatedVideo.title}
                        width={160}
                        height={90}
                        className="rounded-lg object-cover w-40 aspect-video"
                      />
                      <div className="absolute bottom-1 right-1 bg-black/70 text-white text-xs px-1 rounded">
                        {relatedVideo.duration}
                      </div>
                    </div>
                    <div>
                      <h3 className="font-medium line-clamp-2 group-hover:text-primary transition-colors">
                        {relatedVideo.title}
                      </h3>
                      <p className="text-sm text-muted-foreground mt-1">{relatedVideo.author}</p>
                      <p className="text-xs text-muted-foreground">{relatedVideo.views} wyświetleń</p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
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
