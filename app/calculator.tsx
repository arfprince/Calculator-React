"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { atom, useAtom } from "jotai";

const displayScreen = atom("0");

export default function Calculator() {
  const [displayNumber, setDisplayNumber] = useAtom(displayScreen);
  
  const handleNumberClick = (num: number) => {
    setDisplayNumber(displayNumber === "0" ? String(num) : displayNumber + String(num));
  };

  const handleOperationClick = (operator: string) => {
    const lastChar = displayNumber.slice(-1);
    if (!["+", "-", "*", "/"].includes(lastChar)) {
      setDisplayNumber(displayNumber + operator);
    }
  };

  const handleClearClick = () => {
    setDisplayNumber("0");
  };

  const handleDeleteClick = () => {
    setDisplayNumber(displayNumber.length > 1 ? displayNumber.slice(0, -1) : "0");
  };

  const handleResultClick = () => {
    try {
      setDisplayNumber(String(eval(displayNumber)));
    } catch (error) {
      setDisplayNumber("Error");
    }
  };

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
              onClick={() => handleNumberClick(num)}
              variant="outline"
            >
              {num}
            </Button>
          ))}
          {['+','-','*','/'].map((operator) => (
              <Button 
                key={operator}
                onClick={()=>handleOperationClick(operator)}
                variant="secondary"
              >
                {operator}
              </Button>
            ))
          }
          <Button onClick={handleDeleteClick} variant="destructive">
            DEL
          </Button>
          <Button
            onClick={handleResultClick}
            className="col-span-1"
            variant="default"
          >
            =
          </Button>
          <Button
            onClick={handleClearClick}
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
