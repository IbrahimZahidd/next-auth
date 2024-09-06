import { SignIn } from '@clerk/nextjs'

export default function Page() {
  return <div className='flex items-center justify-center p-3'>
    <SignIn />
  </div> 
}


// https://www.youtube.com/watch?v=REfusFIsd2g (40:00)