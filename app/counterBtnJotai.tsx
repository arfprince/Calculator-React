"use client";
import { atom, useAtom } from 'jotai';
import { useMemo } from 'react';
import { Button } from '@/components/ui/button';


export default function CounterBtnJotai() {
const counterAtom = useMemo(()=>atom(9),[]);
// Memoize the atom so it's stable between renders
    const [count, setCounter] = useAtom(counterAtom);

    return (
        <Button onClick={() => setCounter(count + 1)}>
            Clicked {count}
        </Button>
    );
}
