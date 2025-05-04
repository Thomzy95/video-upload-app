"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { MoreVertical, Play } from "lucide-react"

// Przykładowe dane filmów
const videos = [
  {
    id: "1",
    title: "Jak nagrywać krótkie filmy",
    views: 1240,
    date: "2023-10-15",
    thumbnail: "/placeholder.svg?height=180&width=320",
    duration: "2:45",
  },
  {
    id: "2",
    title: "Mój pierwszy vlog",
    views: 856,
    date: "2023-10-10",
    thumbnail: "/placeholder.svg?height=180&width=320",
    duration: "3:20",
  },
  {
    id: "3",
    title: "Poradnik montażu wideo",
    views: 2100,
    date: "2023-09-28",
    thumbnail: "/placeholder.svg?height=180&width=320",
    duration: "5:12",
  },
]

export default function VideoList() {
  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {videos.map((video) => (
        <Card key={video.id} className="overflow-hidden">
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
            <Link
              href={`/videos/${video.id}`}
              className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 bg-black/30 transition-opacity"
            >
              <div className="bg-white/90 rounded-full p-3">
                <Play className="h-6 w-6" />
              </div>
            </Link>
          </div>
          <CardContent className="p-4">
            <h3 className="font-medium line-clamp-2">{video.title}</h3>
            <p className="text-sm text-muted-foreground mt-1">
              {video.views} wyświetleń • {new Date(video.date).toLocaleDateString("pl-PL")}
            </p>
          </CardContent>
          <CardFooter className="p-4 pt-0 flex justify-between">
            <Link href={`/videos/${video.id}/edit`}>
              <Button variant="outline" size="sm">
                Edytuj
              </Button>
            </Link>
            <Button variant="ghost" size="icon">
              <MoreVertical className="h-4 w-4" />
            </Button>
          </CardFooter>
        </Card>
      ))}
    </div>
  )
}
