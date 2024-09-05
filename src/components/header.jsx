import Link from "next/link";

export default function Header() {
    return <header>
       <div className='bg-gradient-to-r from-blue-300 to-purple-400 shadow-lg flex justify-around'>
         <Link href="/">
            <span className="sm:px-8 md:px-6 lg:px-4 xl:px-2 2xl:px-0 text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-blue-700 drop-shadow-md group-hover:from-blue-400 group-hover:to-blue-600">Auth</span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-purple-700 drop-shadow-md group-hover:from-purple-400 group-hover:to-purple-600">App</span>
         </Link>
         <div className="sm:px-0 md:px-2 lg:px-4 xl:px-6 2xl:px-8">
            <Link href="/" className="px-1">Home</Link>
            <Link href="/about"className="px-1">About</Link>
            <Link href="/sign-in"className="px-1">Sign in</Link>
         </div>
        </div> 
    </header>
};
