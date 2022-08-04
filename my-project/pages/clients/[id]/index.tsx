
import Link from "next/link";
import { useRouter } from "next/router";
function ClientProjectsPage() {
    const clients=[
      {id:'max', name:'Max'},
      {id:'jane', name:'Jane'},
    ];
    const router = useRouter();

    function loadProjectHandler(){
      //load data...
      router.push(
        {
          pathname:'/clients/[id]/[projectid]',
          query:{id:'max', projectid:'project1'}
        }
        
    
        ); 
    }
  
  return (

    <div>
      <h1>The Projects of a Given Client</h1>
      <button onClick={loadProjectHandler}>load Project A</button>
            <ul>
            {clients.map((client) => (
                <li key={client.id}>
                    <Link href={{
                      pathname:`/clients/[id]`
                      ,query:{id:client.id}
                }}>
                  {client.name}
                  </Link>
                </li>
            ))}
            </ul>



    </div>
  );
}

export default ClientProjectsPage;