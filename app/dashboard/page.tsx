"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Upload } from "lucide-react"
import DashboardHeader from "./dashboard-header"
import VideoList from "./video-list"

export default function DashboardPage() {
  const [isUploading, setIsUploading] = useState(false)
  const [videoTitle, setVideoTitle] = useState("")
  const [videoDescription, setVideoDescription] = useState("")
  const [selectedFile, setSelectedFile] = useState<File | null>(null)

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setSelectedFile(e.target.files[0])
    }
  }

  const handleUpload = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!selectedFile) return

    setIsUploading(true)

    // W rzeczywistej aplikacji tutaj byłaby integracja z Vercel Blob lub innym serwisem do przechowywania plików
    // Symulacja przesyłania
    setTimeout(() => {
      setIsUploading(false)
      setVideoTitle("")
      setVideoDescription("")
      setSelectedFile(null)
      // Resetowanie pola input file
      const fileInput = document.getElementById("video-file") as HTMLInputElement
      if (fileInput) fileInput.value = ""
    }, 2000)
  }

  return (
    <div className="flex flex-col min-h-screen">
      <DashboardHeader />
      <main className="flex-1 container mx-auto px-4 py-8">
        <Tabs defaultValue="my-videos" className="w-full">
          <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 mb-8">
            <TabsTrigger value="my-videos">Moje filmy</TabsTrigger>
            <TabsTrigger value="upload">Prześlij film</TabsTrigger>
          </TabsList>
          <TabsContent value="my-videos">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-2xl font-bold mb-6">Moje filmy</h2>
              <VideoList />
            </div>
          </TabsContent>
          <TabsContent value="upload">
            <Card className="max-w-2xl mx-auto">
              <CardHeader>
                <CardTitle>Prześlij nowy film</CardTitle>
                <CardDescription>Dodaj swój film do platformy. Obsługiwane formaty: MP4, WebM.</CardDescription>
              </CardHeader>
              <form onSubmit={handleUpload}>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="video-title">Tytuł filmu</Label>
                    <Input
                      id="video-title"
                      placeholder="Wprowadź tytuł filmu"
                      value={videoTitle}
                      onChange={(e) => setVideoTitle(e.target.value)}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="video-description">Opis (opcjonalnie)</Label>
                    <Input
                      id="video-description"
                      placeholder="Wprowadź opis filmu"
                      value={videoDescription}
                      onChange={(e) => setVideoDescription(e.target.value)}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="video-file">Plik wideo</Label>
                    <div className="border-2 border-dashed rounded-lg p-6 text-center cursor-pointer hover:bg-muted/50 transition-colors">
                      <input
                        id="video-file"
                        type="file"
                        accept="video/mp4,video/webm"
                        className="hidden"
                        onChange={handleFileChange}
                        required
                      />
                      <label htmlFor="video-file" className="cursor-pointer flex flex-col items-center gap-2">
                        <Upload className="h-8 w-8 text-muted-foreground" />
                        <span className="text-sm font-medium">
                          {selectedFile ? selectedFile.name : "Kliknij, aby wybrać plik lub przeciągnij i upuść"}
                        </span>
                        <span className="text-xs text-muted-foreground">MP4 lub WebM, maksymalnie 100MB</span>
                      </label>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button type="submit" className="w-full" disabled={isUploading || !selectedFile}>
                    {isUploading ? "Przesyłanie..." : "Prześlij film"}
                  </Button>
                </CardFooter>
              </form>
            </Card>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  )
}
