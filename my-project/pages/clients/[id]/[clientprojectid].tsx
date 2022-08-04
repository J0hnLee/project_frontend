import {useRouter} from 'next/router';
import Link from 'next/link';
function SelectedClientProjectPage(){
    const router = useRouter();
    console.log(router.query.id);
    console.log(router.query.clientprojectid);

    


    return (
        <div>
            <h1>Selected Client Project Page</h1>
            <h2>{router.query.clientprojectid}</h2>
        </div>
    );
}

export default SelectedClientProjectPage;