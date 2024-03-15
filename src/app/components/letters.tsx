import React, { ReactNode } from "react";

const mapLetters = (letters: string[]): Iterable<ReactNode> => {
    const mapped = letters.map((value, index) => {

        if (value) {
            if (index === 1) {

                return <div key={index} className="bg-greenElement px-1 leading-snug">{value}</div>
            }
            return <div key={index} className="leading-snug">{value}</div>
        }

        return <React.Fragment key={index} />
    })

    return mapped;
}

export default mapLetters;