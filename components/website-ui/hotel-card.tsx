/**
 * v0 by Vercel.
 * @see https://v0.dev/t/WRcPhH9znT2
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import {
  CardTitle,
  CardDescription,
  CardHeader,
  CardContent,
  CardFooter,
  Card,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function HotelCard() {
  return (
    <Card className="w-full max-w-xs">
      <CardHeader>
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-2">
            <HotelIcon className="w-6 h-6" />
            <div className="grid gap-0.5 leading-none">
              <CardTitle className="text-sm font-semibold leading-none">
                Grand Hotel
              </CardTitle>
              <CardDescription className="text-xs leading-none">
                Central location
              </CardDescription>
            </div>
          </div>
          <Badge className="shrink-0">4 Stars</Badge>
        </div>
      </CardHeader>
      <CardContent>
        <img
          alt="Hotel thumbnail"
          className="aspect-[2]"
          height="200"
          src="/placeholder.svg"
          width="400"
        />
      </CardContent>
      <CardFooter className="flex justify-between">
        <div className="flex flex-col space-y-1 text-sm">
          <CardTitle>$120</CardTitle>
          <CardDescription>Per night</CardDescription>
        </div>
        <Link className="ml-4 flex-1" href="#">
          <Button className="w-full justify-center" variant="outline">
            View Hotel
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );
}

function HotelIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2Z" />
      <path d="m9 16 .348-.24c1.465-1.013 3.84-1.013 5.304 0L15 16" />
      <path d="M8 7h.01" />
      <path d="M16 7h.01" />
      <path d="M12 7h.01" />
      <path d="M12 11h.01" />
      <path d="M16 11h.01" />
      <path d="M8 11h.01" />
      <path d="M10 22v-6.5m4 0V22" />
    </svg>
  );
}
