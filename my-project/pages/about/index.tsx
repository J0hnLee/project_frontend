import { useSession} from "next-auth/react";


const aboutPageFromIndex = () => {
  const { data: session } = useSession()
  if (session) {
    return (
      <div>
      <h1>About</h1>
      </div>);
}
else {
  return (
    <div>
    <h1>Hello, 請登陸</h1>
    </div>);
  }
}
export default aboutPageFromIndex;