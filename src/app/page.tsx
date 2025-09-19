"use client"
import { Button } from "/components/ui/button";

export default function SimpleBlackButton() {
  return (
    <Button className="bg-black text-white hover:bg-black/90">
      Click me
    </Button>
  );
}
