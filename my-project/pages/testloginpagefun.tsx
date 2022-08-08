import React from 'react';
import {useSession,signOut, getSession} from 'next-auth/react';


const Testloginpagefun = () => {
    const { data: session,status } = useSession({required:true})
    
    if (status==="authenticated") {
    return (
        <div>
            
            <p>Wellcome {session.user?.name}</p>
            
        </div>
            )
    } else{
        return (
            <div>
                <p>You need to login first</p>
            </div>
        )
    }
        }



export default Testloginpagefun;

export const getServerSideProps = async (context:any) => {
    const session = await getSession(context);
    if (!session) {
        return {
            redirect:{
                destination:'/login'
            }
        }
    }
    
    
    return {
        props: {
            session
        },
    }


}