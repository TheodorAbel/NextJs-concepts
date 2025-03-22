export default function Docs({ params }: { params: { slug: string[] } }) {
  const { slug } = params;
  if(!slug || slug?.length === 0){
    return <h1>Docs Home Page</h1>;
  }
  else if(slug?.length===1){
    return <h1>Docs Page {slug[0]}
    </h1>;
  }

  else if(slug?.length===2){
    return <h1>Docs Page {slug[0]} and {slug[1]}
    </h1>;
  }

  return <h1>Docs page</h1>

}