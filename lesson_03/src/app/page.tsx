import Link from 'next/link';

export default function main(){
  return( 
    <>
    <h1>Hello, World!</h1>
    <Link href="/articles/breaking-news?lang?=en">Read in English</Link>
    <Link href="/articles/breaking-news?lang?=fr">Read in French</Link>
    </>
  )
}
