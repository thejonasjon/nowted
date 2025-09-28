import { Folder, FolderOpen, FolderPlus } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import NavButton from "./UI/NavButton";

export default function Folders(){

    [
        {"name": "Personal"},
        {
            "icons": {
            "a": "FolderPlus"
        }
        }
    ]

    const folders = [
        {
            "name": "Personal",
            "link": "url"
        },
        {
            "name": "Work",
            "link": "url"
        },
        {
            "name": "Travel",
            "link": "url"
        },
        {
            "name": "Events",
            "link": "url"
        },
        {
            "name": "Finances",
            "link": "url"
        }
    ]


    return (
        <div className="bg-black w-full h-full">
            <div className="flex justify-between">
                <h4 className="text-sm font-semibold text-white/60 font-source-sans">Folder</h4>
                <FolderPlus className="text-white/60" size={20}/>
            </div>
            <div className="text-red-600">
                <NavButton name = {"Personal"} Icon={Folder} ActiveIcon={FolderOpen}/>
            </div>
        </div>
    )
}