"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function FloatingReserveButton() {
  return (
    <div className="fixed bottom-6 right-6 z-50">
      <Button
        variant="mint"
        size="lg"
        className="rounded-full px-8 shadow-lg"
        asChild
      >
        <Link href="/reserve">
          ご予約はこちら
        </Link>
      </Button>
    </div>
  );
}