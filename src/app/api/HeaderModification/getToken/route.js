import { NextRequest, NextResponse } from "next/server";
import { headers } from "next/headers";
import React from "react";
export async function GET(req, res) {
  const headersList = headers();
  const Token = headersList.get("Token");
  return NextResponse.json({Token:Token})
  
}