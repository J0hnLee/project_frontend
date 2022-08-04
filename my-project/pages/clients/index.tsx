import Link from "next/link";


function ClientPage(){
    const clients =[
        {id:'max', name:'Max'},
        {id:'jane', name:'Jane'},
    ];
    return (
        <div>
            <h1>The Clients Pages</h1>
            <ul>
            {clients.map((client) => (
                <li key={client.id}>
                    <Link href={`/clients/${client.id}`}>{client.name}</Link>
                </li>
            ))}
            </ul>
        </div>
    )
}

export default ClientPage;