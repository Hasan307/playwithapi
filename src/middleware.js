"use server"
import { NextRequest, NextResponse } from "next/server";
import { headers } from "next/headers";
import React from "react";

export default async function middleware(req, res) {
  if (req.nextUrl.pathname.startsWith("/api/HeaderModification")) {
   
        const tokenHeader = new Headers(req.headers);
        let Token=tokenHeader.get("Authorization");
        let newToken='Bearer '+ Token;

    const resp = NextResponse.next();
    resp.headers.set('Authorization',newToken);
    return resp;
  }
}