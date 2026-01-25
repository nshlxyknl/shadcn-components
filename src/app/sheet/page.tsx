"use client"

import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetFooter, SheetTrigger } from "@/components/ui/sheet";
import { useState } from "react";

const SheetPage = () => {

      const [openSheet, setOpenSheet] = useState(false)

  return (
     <Sheet open={openSheet} onOpenChange={(open) => {
                        setOpenSheet(open)
                       
                      }}>
                        <SheetTrigger asChild>
                          <Button variant="outline" className="flex ml-70" > open me  </Button>
                        </SheetTrigger>
                        <SheetContent>
                         
                                   
                                  
                          
                          <SheetFooter>
                            <div className="flex justify-between gap-2 mt-2">
                             
                            
                              <Button variant="outline" onClick={() => { setOpenSheet(false) }}>Close</Button>
                            </div>
                          </SheetFooter>
                        </SheetContent>
                      </Sheet>
  )
}

export default SheetPage