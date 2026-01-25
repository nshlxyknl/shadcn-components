import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import React from 'react'

const TablePage = () => {

    const items:number[] =[1,2,3]
  return (
     <div className=" mt-20 overflow-hidden rounded-md border ">
      <Table>
        <TableHeader>
           <TableRow>
            <TableHead>letters</TableHead>
            <TableHead>numbers</TableHead>
            <TableHead>Status</TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          {
            items.map((items, index)=>(
                <TableRow>
                <TableCell>a</TableCell>
              <TableCell>{items}</TableCell>
              <TableCell>-</TableCell>
              </TableRow>
            ))
          }
              
        
            
        </TableBody>
      </Table>
    </div>
  )
}

export default TablePage