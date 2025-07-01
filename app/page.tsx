"use client"

import { useState } from "react"
import { EnvelopeIcon, HomeIcon, CheckIcon } from "@heroicons/react/24/solid"

export default function Page() {
  const [siren, setSiren] = useState("")
  const [email, setEmail] = useState("")
  const [loading, setLoading] = useState(false)

  const handleRequest = (type: "simple" | "complet") => {
    if (!siren || !email) {
      alert("Veuillez remplir les deux champs")
      return
    }

    setLoading(true)

    const stripeUrl =
      type === "complet"
        ? process.env.NEXT_PUBLIC_STRIPE_COMPLET_URL
        : process.env.NEXT_PUBLIC_STRIPE_SIMPLE_URL

    window.location.href = stripeUrl || "#"
  }

  return (
    <div className="min-h-screen bg-[#fdfdfd] flex items-center justify-center p-6 relative overflow-hidden">
      <div className="absolute top-[-100px] left-[-100px] w-[300px] h-[300px] bg-red-200 rounded-full opacity-40 blur-3xl z-0"></div>

      <div className="relative max-w-md w-full bg-white z-10 p-8 rounded-[40px] shadow-xl border border-red-100">
        <div className="absolute right-[-20px] top-1/2 transform -translate-y-1/2 bg-red-500 rounded-full p-3 shadow-md">
          <CheckIcon className="w-6 h-6 text-white" />
        </div>

        <h1 className="text-4xl font-bold text-red-600 text-center lowercase mb-4">padble</h1>
        <p className="text-center text-gray-700 mb-6 text-sm font-bold uppercase">
  ENTREZ UN NUMÉRO DE SIREN POUR<br />OBTENIR UNE NOTATION D’ENTREPRISE
</p>


        <div className="space-y-4">
          <div className="relative">
            <HomeIcon className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              value={siren}
              onChange={(e) => setSiren(e.target.value)}
              className="w-full pl-11 pr-4 py-2 rounded-full border border-gray-200 bg-[#f9f9f9] focus:outline-none focus:ring-2 focus:ring-red-400 text-sm"
              placeholder="numéro de siren"
            />
          </div>

          <div className="relative">
            <EnvelopeIcon className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full pl-11 pr-4 py-2 rounded-full border border-gray-200 bg-[#f9f9f9] focus:outline-none focus:ring-2 focus:ring-red-400 text-sm"
              placeholder="adresse email"
            />
          </div>

          <div className="flex justify-between space-x-4 pt-2">
            <button
              onClick={() => handleRequest("simple")}
              className="w-1/2 bg-red-500 text-white py-2 text-sm rounded-full hover:bg-red-600 transition"
            >
              notation simple<br />(2 €)
            </button>
            <button
              onClick={() => handleRequest("complet")}
              className="w-1/2 bg-red-500 text-white py-2 text-sm rounded-full hover:bg-red-600 transition"
            >
              rapport complet<br />(4 €)
            </button>
          </div>

          {loading && (
            <p className="text-center text-sm text-gray-500 pt-4">
              redirection vers paiement sécurisé…
            </p>
          )}
        </div>
      </div>
    </div>
  )
}
