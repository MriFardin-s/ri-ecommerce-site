import { NextResponse } from "next/server";

import { headers } from "next/headers";
import { auth } from "@/lib/auth";

export async function proxy(request) {
    const session = await auth.api.getSession({
        headers: await headers(),
    });

    if (!session) {
        const callbackUrl = request.nextUrl.pathname;
        return NextResponse.redirect(
            new URL(`/login?callbackUrl=${callbackUrl}`, request.url)
        );
    }

    return NextResponse.next();
}
export const config = {
    matcher: ["/animals/:path*", "/my-profile"],
};