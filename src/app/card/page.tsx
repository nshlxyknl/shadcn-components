"use client"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
 
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Skeleton } from "@/components/ui/skeleton"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { useEffect, useState } from "react"
import { toast } from "sonner"


const CardPage = () => {

  const [loading, setLoading] = useState<Boolean>(false);

    const handleSubmit=(e:React.FormEvent)=>{
        e.preventDefault();
        setLoading(true)
toast("saved")
    }

   

  return (
     <div className='flex justify-center items-center min-h-screen px-4'>

        {
            loading ? <Skeleton className="h-12 w-12 rounded-full" />:

            <Tabs defaultValue="name" className="w-[400px]">
  <TabsList>
    <TabsTrigger value="name">Name</TabsTrigger>
    <TabsTrigger value="email">Email</TabsTrigger>
  </TabsList>
  <TabsContent value="name"> <Card className={'w-full max-w-md p-6'}>
                <CardContent >
                    <h2 className='text-center text-2xl font-semibold mb-4'> Give your name</h2>
                    <form  onSubmit={handleSubmit} className="space-y-4">
                        <Input type='text' placeholder='name'  className={'p-4'} />
                        <div className="flex justify-center">
                            <Button type='submit' className="w-full sm:w-auto" >  Save</Button>
                        </div>
                    </form>
                </CardContent>
            </Card>.</TabsContent>
  <TabsContent value="email"> <Card className={'w-full max-w-md p-6'}>
                <CardContent >
                    <h2 className='text-center text-2xl font-semibold mb-4'> Give your email</h2>
                    <form  onSubmit={handleSubmit} className="space-y-4">
                        <Input type='email' placeholder='email' className={'p-4'} />
                        <div className="flex justify-center">
                            <Button type='submit' className="w-full sm:w-auto" > Save</Button>
                        </div>
                    </form>
                </CardContent>
            </Card></TabsContent>
</Tabs>

}
        </div>
  )
}

export default CardPage