import type { Metadata } from 'next'
import { UserProvider } from '@auth0/nextjs-auth0/client';
import styles from './page.module.css'

export const metadata: Metadata = {
  title: 'PayBud Inc.',
  description: 'PayBud Inc. Client, made by Martin Lupa as final exam for Applied Information Security, ITU, Summer 2023, Copenhagen.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={styles.layout}>
        <UserProvider>
          {children}
        </UserProvider>
      </body>
    </html>
  )
}