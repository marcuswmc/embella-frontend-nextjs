'use client'

interface Props {
  children: React.ReactNode;
  className: string
}

export function ClientLayoutWrapper({children, className}: Props) {
  return (
    <body className={`${className} antialiased`} 
    suppressHydrationWarning={true}>
      {children}
    </body>
  )
}
