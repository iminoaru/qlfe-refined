
import { Card } from "@/components/ui/card"
import Link from "next/link"
import { JSX, SVGProps } from "react"

interface ICardProps {
  title: string;
  description: string;
}

export function ICard({title, description}: ICardProps) {
  return (
      <Card className="w-full max-w-sm bg-card text-card-foreground shadow-xl ">
        <div className="p-6 flex flex-col items-center gap-4">
          <RocketIcon className="w-12 h-12 text-primary"/>
          <div className="space-y-1 text-center">
            <h3 className="text-2xl font-bold">{title}</h3>
            <p className="text-xl text-muted-foreground">
              {description}
            </p>
          </div>
          <Link
              href="#"
              className="inline-flex h-9 items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow-sm transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
              prefetch={false}
          >
            Learn More
          </Link>
        </div>
      </Card>
  )
}

function RocketIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
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
      <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
      <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
      <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" />
      <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
    </svg>
  )
}
