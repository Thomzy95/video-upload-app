"use client"

import type React from "react"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { MessageSquare, ThumbsUp, ThumbsDown } from "lucide-react"

// Przykładowe komentarze
const initialComments = [
  {
    id: "1",
    author: "Anna Kowalska",
    authorAvatar: "/placeholder.svg?height=40&width=40",
    content: "Świetny film! Bardzo pomocne wskazówki, szczególnie te dotyczące oświetlenia.",
    date: "2023-10-16",
    likes: 12,
  },
  {
    id: "2",
    author: "Piotr Nowak",
    authorAvatar: "/placeholder.svg?height=40&width=40",
    content: "Dzięki za ten poradnik. Czy możesz polecić jakieś aplikacje do montażu na telefonie?",
    date: "2023-10-15",
    likes: 5,
  },
  {
    id: "3",
    author: "Marta Wiśniewska",
    authorAvatar: "/placeholder.svg?height=40&width=40",
    content: "Bardzo przydatne informacje! Czekam na więcej filmów z tej serii.",
    date: "2023-10-14",
    likes: 8,
  },
]

interface CommentSectionProps {
  videoId: string
}

export default function CommentSection({ videoId }: CommentSectionProps) {
  const [comments, setComments] = useState(initialComments)
  const [newComment, setNewComment] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmitComment = (e: React.FormEvent) => {
    e.preventDefault()
    if (!newComment.trim()) return

    setIsSubmitting(true)

    // W rzeczywistej aplikacji tutaj byłoby wysyłanie komentarza do API
    setTimeout(() => {
      const comment = {
        id: Date.now().toString(),
        author: "Ty",
        authorAvatar: "/placeholder.svg?height=40&width=40",
        content: newComment,
        date: new Date().toISOString().split("T")[0],
        likes: 0,
      }

      setComments([comment, ...comments])
      setNewComment("")
      setIsSubmitting(false)
    }, 500)
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-2">
        <MessageSquare className="h-5 w-5" />
        <h2 className="text-xl font-bold">{comments.length} komentarzy</h2>
      </div>

      <form onSubmit={handleSubmitComment} className="flex gap-4">
        <Image
          src="/placeholder.svg?height=40&width=40"
          alt="Twój avatar"
          width={40}
          height={40}
          className="rounded-full"
        />
        <div className="flex-1 space-y-2">
          <Textarea
            placeholder="Dodaj komentarz..."
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
            className="min-h-[80px]"
          />
          <div className="flex justify-end">
            <Button type="submit" disabled={isSubmitting || !newComment.trim()}>
              {isSubmitting ? "Wysyłanie..." : "Skomentuj"}
            </Button>
          </div>
        </div>
      </form>

      <div className="space-y-6">
        {comments.map((comment) => (
          <div key={comment.id} className="flex gap-4">
            <Image
              src={comment.authorAvatar || "/placeholder.svg"}
              alt={comment.author}
              width={40}
              height={40}
              className="rounded-full"
            />
            <div className="flex-1">
              <div className="flex items-center gap-2">
                <span className="font-medium">{comment.author}</span>
                <span className="text-xs text-muted-foreground">
                  {new Date(comment.date).toLocaleDateString("pl-PL")}
                </span>
              </div>
              <p className="mt-1">{comment.content}</p>
              <div className="flex items-center gap-4 mt-2">
                <button className="flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground">
                  <ThumbsUp className="h-4 w-4" />
                  <span>{comment.likes}</span>
                </button>
                <button className="flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground">
                  <ThumbsDown className="h-4 w-4" />
                </button>
                <button className="text-sm text-muted-foreground hover:text-foreground">Odpowiedz</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
