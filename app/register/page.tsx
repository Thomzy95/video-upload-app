"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Film } from "lucide-react"
import { supabase } from "@/lib/supabase";

export default function RegisterPage() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const router = useRouter()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
  
    const { error } = await supabase.auth.signUp({
      email,
      password,
    })
  
    setIsLoading(false)
  
    if (error) {
      alert("Błąd rejestracji: " + error.message)
    } else {
      alert("Zarejestrowano! Możesz się teraz zalogować na swoje konto.")
      router.push("/login")
    }
  }
  

  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex items-center justify-center flex-1 p-4">
        <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow-lg">
          <div className="text-center">
            <Link href="/" className="inline-flex items-center gap-2 text-2xl font-bold">
              <Film className="w-6 h-6" />
              <span>VideoShare</span>
            </Link>
            <h1 className="mt-4 text-2xl font-bold">Utwórz konto</h1>
            <p className="mt-1 text-sm text-muted-foreground">Wprowadź swoje dane, aby utworzyć konto</p>
          </div>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="name">Imię i nazwisko</Label>
              <Input
                id="name"
                type="text"
                placeholder="Jan Kowalski"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="twoj@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Hasło</Label>
              <Input
                id="password"
                type="password"
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <Button type="submit" className="w-full" disabled={isLoading}>
              {isLoading ? "Rejestracja..." : "Zarejestruj się"}
            </Button>
          </form>
          <div className="text-center text-sm">
            <span className="text-muted-foreground">Masz już konto? </span>
            <Link href="/login" className="text-primary hover:underline">
              Zaloguj się
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
