import { NextResponse } from "next/server"


export  async function GET(req,res){
    return NextResponse.json(
      {},
     {
      status: 400,
      headers:{
        'Set-Cookie':'theme=dark;Path=/'
      }
     }
    );
  
  }



