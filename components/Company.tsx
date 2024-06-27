
import { JSX, SVGProps } from "react"


export default function Company() {
    return (
        <div className="w-full">
            <div className="container mx-auto px-4 py-8 md:py-12 lg:py-16">
                <div className="flex items-center justify-between mb-6 md:mb-8 lg:mb-10">
                    <h1 className="text-2xl font-bold text-center md:text-3xl lg:text-4xl">Our Users work at</h1>

                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8 lg:gap-10">
                    <div className="bg-card rounded-lg p-4 flex flex-col items-center justify-center text-center">
                        <div className="bg-muted rounded-full p-3 mb-4">
                            <BuildingIcon className="h-6 w-6 text-primary"/>
                        </div>
                        <h3 className="text-lg font-medium mb-2">Acme Inc.</h3>
                        <p className="text-muted-foreground text-sm">Software Company</p>
                    </div>
                    <div className="bg-card rounded-lg p-4 flex flex-col items-center justify-center text-center">
                        <div className="bg-muted rounded-full p-3 mb-4">
                            <BuildingIcon className="h-6 w-6 text-primary"/>
                        </div>
                        <h3 className="text-lg font-medium mb-2">Globex Corporation</h3>
                        <p className="text-muted-foreground text-sm">Technology Conglomerate</p>
                    </div>
                    <div className="bg-card rounded-lg p-4 flex flex-col items-center justify-center text-center">
                        <div className="bg-muted rounded-full p-3 mb-4">
                            <BuildingIcon className="h-6 w-6 text-primary"/>
                        </div>
                        <h3 className="text-lg font-medium mb-2">Stark Industries</h3>
                        <p className="text-muted-foreground text-sm">Engineering and Manufacturing</p>
                    </div>
                    <div className="bg-card rounded-lg p-4 flex flex-col items-center justify-center text-center">
                        <div className="bg-muted rounded-full p-3 mb-4">
                            <BuildingIcon className="h-6 w-6 text-primary"/>
                        </div>
                        <h3 className="text-lg font-medium mb-2">Wayne Enterprises</h3>
                        <p className="text-muted-foreground text-sm">Diversified Conglomerate</p>
                    </div>
                    <div className="bg-card rounded-lg p-4 flex flex-col items-center justify-center text-center">
                        <div className="bg-muted rounded-full p-3 mb-4">
                            <BuildingIcon className="h-6 w-6 text-primary"/>
                        </div>
                        <h3 className="text-lg font-medium mb-2">Stark Industries</h3>
                        <p className="text-muted-foreground text-sm">Engineering and Manufacturing</p>
                    </div>
                    <div className="bg-card rounded-lg p-4 flex flex-col items-center justify-center text-center">
                        <div className="bg-muted rounded-full p-3 mb-4">
                            <BuildingIcon className="h-6 w-6 text-primary"/>
                        </div>
                        <h3 className="text-lg font-medium mb-2">Wayne Enterprises</h3>
                        <p className="text-muted-foreground text-sm">Diversified Conglomerate</p>
                    </div>
                    <div className="bg-card rounded-lg p-4 flex flex-col items-center justify-center text-center">
                        <div className="bg-muted rounded-full p-3 mb-4">
                            <BuildingIcon className="h-6 w-6 text-primary"/>
                        </div>
                        <h3 className="text-lg font-medium mb-2">Acme Inc.</h3>
                        <p className="text-muted-foreground text-sm">Software Company</p>
                    </div>
                    <div className="bg-card rounded-lg p-4 flex flex-col items-center justify-center text-center">
                        <div className="bg-muted rounded-full p-3 mb-4">
                            <BuildingIcon className="h-6 w-6 text-primary"/>
                        </div>
                        <h3 className="text-lg font-medium mb-2">Globex Corporation</h3>
                        <p className="text-muted-foreground text-sm">Technology Conglomerate</p>
                    </div>
                </div>

            </div>
        </div>
    )
}

function BuildingIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
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
            <rect width="16" height="20" x="4" y="2" rx="2" ry="2" />
            <path d="M9 22v-4h6v4" />
            <path d="M8 6h.01" />
            <path d="M16 6h.01" />
            <path d="M12 6h.01" />
            <path d="M12 10h.01" />
            <path d="M12 14h.01" />
            <path d="M16 10h.01" />
            <path d="M16 14h.01" />
            <path d="M8 10h.01" />
            <path d="M8 14h.01" />
        </svg>
    )
}


function PlusIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
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
            <path d="M5 12h14" />
            <path d="M12 5v14" />
        </svg>
    )
}