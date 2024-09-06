"use client";
import { Button } from "@/components/ui/button";
import { useState } from "react";

 export default function CounterBtn(){
    const [count, setCount]=useState(0);

    return(
        <Button className="bg-blue-800 hover:bg-blue-700" onClick={()=>{setCount(count+1)}}>clicked {count}</Button>
    );
 }