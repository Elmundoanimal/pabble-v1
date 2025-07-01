import '../styles/globals.css'


export const metadata = {
  title: 'Pabble',
  description: 'Notation d’entreprise',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  )
}

