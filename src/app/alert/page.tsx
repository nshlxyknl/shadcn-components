"use client"

import { Button } from '@/components/ui/button'
import {
  Alert,
  AlertDescription,
  
} from "@/components/ui/alert"
import { useState } from 'react'
const AlertP = () => {

    const [show,setShow]= useState(false)
  return (
    <>
    <div className='h-[40px] w-full flex justify-center items-center'>
    <Button variant="destructive" onClick={(prev)=>{setShow(!show)}} >Delete</Button>
    </div>

    { show &&
 <Alert>
  <AlertDescription>
Your task ahs been deleted </AlertDescription>
</Alert>
    }
   </>
  )
}

export default AlertP