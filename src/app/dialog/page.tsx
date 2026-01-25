"use client"

import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import React, { useState } from 'react'

const DialogPage = () => {

      const [openPop, setOpenPop] = useState(false)
      const handleSubmit=(e:React.FormEvent)=>{
        e.preventDefault();
alert("saved")
    }

  return (
     <div className="flex mx-4 ">
            <Dialog open={openPop} onOpenChange={setOpenPop} >
              <DialogTrigger asChild>
                <Button onClick={async () => {
                  setOpenPop(!openPop);
                }
                }>Rate me</Button>
              </DialogTrigger>
              <DialogContent className="max-w-md p-6 rounded-2xl shadow-lg bg-white ">
                <form onSubmit={handleSubmit}  className="flex flex-col gap-4 mt-4">
                  <Input type="text" placeholder="comments"  className="p-2 rounded-md " />

                  <div className="flex justify-between gap-2 mt-2">
                    <Button type="button" onClick={() => setOpenPop(false)}>Cancel</Button>
                    <Button type="submit" >
                      Add
                    </Button>
                  </div>
                </form>

                

              </DialogContent>
            </Dialog>
          </div>
  )
}

export default DialogPage