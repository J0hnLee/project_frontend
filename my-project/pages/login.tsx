import Image from "next/image";
import { useSession, signIn, signOut } from "next-auth/react"

const Login = () => {
  
  const { data: session } = useSession()
  
  if (session) {
    return (
      <>
        Signed in as {session.user?.email} <br />
        <div>{session.user?.name}</div>
        <img src={session.user?.image} style={{borderRadius:"50px"}}/>
        <div>{console.log(session)}</div>
        <button onClick={() => signOut()}>Sign out</button>
      </>
    )
  }
  return (
    <>
      Not signed in <br />
      <button onClick={() => signIn()}>Sign in</button>
    </>
  )
}

export default Login;