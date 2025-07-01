'use client'
import { useEffect, useState } from "react";

export function useLocalStorage(key:string) {
    const [value, setValue] = useState<string | null>(null);

    useEffect(()=>{
        if (typeof window === "undefined") return;
        const storedValue = localStorage.getItem(key);
        if (storedValue) setValue(storedValue);
    }, [key])

  return value
}