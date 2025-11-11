import { CalendarDays, Ellipsis, FileText, Folder } from "lucide-react";
import NoteEditor from "./noteEditor";
import ActionsDropdown from "./actionsDropdown";
import { useState } from "react";

export default function FolderDetails(){
    const [dropdown, SetDropdwown] = useState(false)

    return (
        <section className="space-y-7.5 bg-[#181818] text-white px-12.5 py-12.5">
            <div>
                <div className="flex justify-between items-center">
                    <h2 className="text-[32px]">Reflection on the Month of June</h2>

                    <div className="relative">
                        <button
                        onClick={() => SetDropdwown(!dropdown)}
                        className="border-2 border-white rounded-full p-1 transition-all ease-in-out duration-75">
                            <Ellipsis className="text-white size-6 hover:size-6.5 transition-all ease-in-out duration-100" size={20}/>
                        </button>

                        {dropdown ? <ActionsDropdown /> : null }
                    </div>
                </div>
            </div>

            <div>
                <div className="flex items-center gap-10 border-b border-white/20">
                    <div className="flex items-center gap-8 text-white/60 py-4">
                        <CalendarDays className="size-6"/>
                        <div className="text-base font-medium">Date <span ></span></div>
                    </div>
                    <div className="text-white text-base underline">
                        21/06/2022
                    </div>
                </div>

                <div className="flex items-center gap-10">
                    <div className="flex items-center gap-8 text-white/60 py-4">
                        <Folder className="size-6"/>
                        <div className="text-base font-medium">Folder <span ></span></div>
                    </div>
                    <div className="text-white text-base underline">
                        Personal
                    </div>
                </div>
            </div>

            {/* Empty state */}
            {/*
            <div className="space-y-2 w-full h-screen flex flex-col justify-center items-center">
                <div>
                    <FileText size={60} strokeWidth={0.5}/>
                </div>
                <h4 className="text-xl">Select a note to view</h4>
                <p className="text-white/60 text-center">Choose a note from the list on the left to view its contents, or create a new note to add to your collection.</p>
            </div> */}

            <section>
                <NoteEditor />
            </section>
        </section>
    )
}