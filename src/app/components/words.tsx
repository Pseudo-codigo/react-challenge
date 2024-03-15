import findElement from "@/functions/element-functions";
import splitWord from "@/functions/name-functions";
import { useAppSelector } from "@/lib/hooks";
import React from "react";
import mapLetters from "./letters";

const Words = () => {
    const names = useAppSelector((state) => state.names);

    const arrayFirstName = splitWord(names.firstName ?? "", findElement(names.firstName ?? "") ?? "");

    const arrayLastName = splitWord(names.lastName ?? "", findElement(names.lastName ?? "") ?? "");

    return (
        <div className="flex flex-col gap-2 text-white w-full text-center">
            <div className="sm:text-[min(4.5rem,4.5vw)] text-4xl transition-all duration-300 font-bold flex justify-center sm:whitespace-break-spaces">{mapLetters(arrayFirstName)}</div>
            <div className="sm:text-[min(4.5rem,4.5vw)] text-4xl  transition-all duration-300 font-bold flex justify-center">{mapLetters(arrayLastName)}</div>
        </div>
    );
};
export default Words;