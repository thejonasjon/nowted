import { Archive, Delete, Star, Trash } from "lucide-react";

export default function ActionsDropdown(){
    return (
        <div className="absolute right-0 top-12 flex flex-col gap-y-2 bg-[#333333] rounded-lg px-6 py-3">
            <div className="space-y-3">
                <button className="flex gap-4 items-center text-base py-2">
                    <Star />
                    Add to favorites
                </button>
                <button className="flex gap-4 items-center text-base py-2">
                    <Archive />
                    Archived
                </button>
                <hr className="text-white/20" />
                <button className="flex gap-4 items-center text-base py-2">
                    <Trash />
                    Delete
                </button>
            </div>
        </div>
    )
}