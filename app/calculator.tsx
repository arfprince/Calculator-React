"use client";


import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { atom, useAtom } from "jotai";

const displayScreen=atom("0");
export default function Calculator() {

  let [displayNumber, handleNumberClick]=useAtom(displayScreen);
  let [displayOperatoion, handleOperationClick]=useAtom(displayScreen);
  let [handleClear, handleClearClick]=useAtom(displayScreen);
  let [calculate,displayResult]=useAtom(displayScreen);
  let [deletLast,displayRenew]=useAtom(displayScreen);
  return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader>
        <CardTitle className="text-2xl font-bold text-center">
          Calculator
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="bg-secondary p-4 rounded-md mb-4 text-right text-2xl font-mono">
          {displayNumber}
        </div>
        <div className="grid grid-cols-4 gap-2">
          {[7, 8, 9, 4, 5, 6, 1, 2, 3, 0].map((num) => (
            <Button
              key={num}
              onClick={() => handleNumberClick(displayNumber==="0" ? displayNumber=String(num) : displayNumber+=num)}
              variant="outline"
            >
              {num}
            </Button>
          ))}
          <Button onClick={() => handleOperationClick( displayOperatoion.slice(-1)!=="+" && displayOperatoion.slice(-1)!=="-" && displayOperatoion.slice(-1)!=="/" && displayOperatoion.slice(-1)!=="*" && displayOperatoion!=="0" ? displayOperatoion+="+" : displayOperatoion )} variant="secondary">
            +
          </Button>
          <Button onClick={() => handleOperationClick( displayOperatoion.slice(-1)!=="+" && displayOperatoion.slice(-1)!=="-" && displayOperatoion.slice(-1)!=="/" && displayOperatoion.slice(-1)!=="*" && displayOperatoion!=="0" ? displayOperatoion+="-" : displayOperatoion )} variant="secondary">
            -
          </Button>
          <Button onClick={() => handleOperationClick( displayOperatoion.slice(-1)!=="+" && displayOperatoion.slice(-1)!=="-" && displayOperatoion.slice(-1)!=="/" && displayOperatoion.slice(-1)!=="*" && displayOperatoion!=="0" ? displayOperatoion+="*" : displayOperatoion )} variant="secondary">
            *
          </Button>
          <Button onClick={() => handleOperationClick( displayOperatoion.slice(-1)!=="+" && displayOperatoion.slice(-1)!=="-" && displayOperatoion.slice(-1)!=="/" && displayOperatoion.slice(-1)!=="*" && displayOperatoion!=="0" ? displayOperatoion+="/" : displayOperatoion )} variant="secondary">
            /
          </Button>          
          <Button onClick={()=> displayRenew(deletLast.slice(0,-1))}  variant="destructive">
            DEL
          </Button>
          <Button
            onClick={()=> displayResult(calculate.slice(-1)!=="+" && calculate.slice(-1)!=="-" && calculate.slice(-1)!=="/" && calculate.slice(-1)!=="*" ? String(eval(calculate)) : calculate)}
            className="col-span-1"
            variant="default"
          >
            =
          </Button>
          <Button
            onClick={()=>handleClearClick(handleClear="0")}
            className="col-span-4"
            variant="destructive"
          >
            C
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}