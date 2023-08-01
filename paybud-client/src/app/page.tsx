"use client"
import { useUser } from '@auth0/nextjs-auth0/client'


export default function Home() {
  const { user, error, isLoading } = useUser()

  if (user) console.log("User: ", user)
  if (error) return <div>{error.message}</div>
  if (isLoading) return <div>Loading ...</div>

  return (
    <div>
      <h1>PayBud Client</h1>
      {user ? (
        < div >
          <h1>Welcome {user.name}</h1>
          {user.picture && <img src={user?.picture} alt="user pic" />} <br />
          {user.org_id} <br />
          {user.sub} <br />
          {user.updated_at} <br />
          <a href="/api/auth/logout">Logout</a>
        </div>
      ) : (
        <div>
          <a href="/api/auth/login">Login</a>
        </div>)
      }
    </div >
  )
}
