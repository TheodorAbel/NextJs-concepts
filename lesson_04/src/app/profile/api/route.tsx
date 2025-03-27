import {type NextRequest} from "next/server";
import {headers,cookies} from "next/headers";

export async function GET(request:NextRequest){
const requestHeaders=new Headers(request.headers);
console.log(requestHeaders.get("authorization"));
const theme=request.cookies.get("theme");
console.log(theme);
const cookiesStore=await cookies();
cookiesStore.set("resultsPerPage","10");
return new Response("<h1>Profile API data</h1>", {
    headers: {
        "content-type": "text/html",
        "set-cookie": "theme=dark",
    }
});
}