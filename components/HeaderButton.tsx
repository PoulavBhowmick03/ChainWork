import ShimmerButton from "@/components/magicui/shimmer-button";
import Link from "next/link";
Link

export function ShimmerButtonDemo() {
    return (
        <div className="z-10 flex items-center justify-center">
            <Link href="/join">
                <ShimmerButton className="shadow-2xl">

                    <span className="whitespace-pre-wrap text-center text-sm font-medium leading-none tracking-tight text-white dark:from-white dark:to-slate-900/10 lg:text-lg">
                        Get Started
                    </span>
                </ShimmerButton>
            </Link>
        </div>
    );
}
