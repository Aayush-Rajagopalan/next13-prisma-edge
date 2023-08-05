import { checkuser } from "@/lib/utils";
import { NextResponse } from "next/server";

export const runtime = "edge";

export async function GET(){
    const user = await checkuser();
    if (user) {
        return new NextResponse("user exists", {
            status: 200,
        });
    } else {
        return new NextResponse("user not found", {
            status: 404,
        });
    }
}