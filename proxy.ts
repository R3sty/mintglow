import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function proxy(request: NextRequest) {
  return new NextResponse(
    `
      <html>
        <head>
          <meta charset="utf-8" />
          <title>メンテナンス中</title>
        </head>
        <body style="display:flex;align-items:center;justify-content:center;height:100vh;font-family:sans-serif;">
          <div style="text-align:center;">
            <!-- Note: React components (e.g., <Logo />) cannot be used inside proxy.ts because this file runs at the edge and returns raw HTML. If you want to reuse the Logo component, move maintenance rendering to layout.tsx instead. -->
            <h1>現在メンテナンス中です</h1>
            <p>ただいまサイトリニューアル準備中です。</p>
          </div>
        </body>
      </html>
    `,
    {
      headers: {
        "content-type": "text/html; charset=utf-8",
      },
    }
  );
}