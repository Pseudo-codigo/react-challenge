import React, { useState } from "react";
import { setNames } from "@/lib/slice/name-slice";
import { useAppDispatch } from "@/lib/hooks";
import { NamesModel } from "@/lib/models/names-model";

const Inputs = () => {
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')

    const dispatch = useAppDispatch();

    const onClick = () => {
        const names: NamesModel = { firstName, lastName }
        dispatch(setNames(names));
    }

    return (
        <React.Fragment>
            <div className="flex sm:flex-row flex-col gap-y-2">
                <div className="flex flex-col gap-2 sm:w-1/2 w-full px-2">
                    <label htmlFor="firstName" className="text-white">First Name:</label>
                    <input id="firstName" placeholder="Breaking" onInput={(el) => { setFirstName(el.currentTarget.value) }} type="text" className="rounded-sm px-2 py-1" />
                </div>
                <div className="flex flex-col gap-2 sm:w-1/2 w-full px-2">
                    <label htmlFor="lastName" className="text-white">Last Name</label>
                    <input id="lastName" placeholder="Bad" onInput={(el) => { setLastName(el.currentTarget.value) }} type="text" className="rounded-sm px-2 py-1" />
                </div>
            </div>
            <div onClick={onClick} className="bg-greenButton min-h-[40px] min-w-[320px] w-full rounded-lg cursor-pointer active:bg-greenElement flex self-center items-center justify-center text-white">
                Breakify
            </div>
        </React.Fragment>
    );
};
export default Inputs;