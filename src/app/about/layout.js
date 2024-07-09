import React from 'react'
import Nav from '../../components/nav'

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        <Nav />
        <div>
          {children}
        </div>
      </body>
    </html>
  )
}
