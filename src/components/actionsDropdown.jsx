import { Star } from "lucide-react";

export default function ActionsDropdown(){
    return (
        <div>
            <div>
                <button className="flex gap-4 items-center text-base">
                    <Star />
                    Add to favorites
                </button>
            </div>
        </div>
    )
}