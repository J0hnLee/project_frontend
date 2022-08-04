import {useRouter} from 'next/router'


function PortfolioProject() {
    const router = useRouter();

    console.log(router.pathname);
    console.log(router.query);

// send a request to some backend server
// to fetch the piece of data with the id of router.query.projectid


  return (
    <div>
      <h1>Portfolio Project</h1>
      <p>{router.pathname}</p>
      <p>{router.query.id}</p>
    </div>
  );
}

export default PortfolioProject;