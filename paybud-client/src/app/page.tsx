"use client"
import { useUser } from '@auth0/nextjs-auth0/client'
import { useState } from 'react'


export default function Home() {
  const { user, error, isLoading } = useUser()
  const [secretData, setSecretData] = useState([])

  if (user) {
    fetch("https://protected-server.localhost")
      .then(res => res.json())
      .then(data => setSecretData(data))
      .catch(err => console.log(err))
  }
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
          Here are your last transactions:
          {secretData.length > 0 ?
            <ul>
              {secretData[0].account_transactions?.map(transaction =>
                <li>{transaction.amount} {transaction.currency} - {transaction.benefitiary}</li>)}
            </ul>
            : <div></div>
          }
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
