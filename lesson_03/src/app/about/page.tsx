import {Metadata} from "next";

export const metadata:Metadata={
    title:{
      absolute:"About"
    }
  }

export default function about(){
    return <h1>About</h1>;
}