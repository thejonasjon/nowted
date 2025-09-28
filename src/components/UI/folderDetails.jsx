import { Ellipsis, FileText } from "lucide-react";

export default function FolderDetails(){
    return (
        <section className="bg-[#181818] text-white px-12.5 py-12.5">
            <div>
                <div className="flex justify-between items-center">
                    <h2 className="text-[32px]">Reflection on the Month of June</h2>

                    <div className="border border-white/40 rounded-full p-1">
                        <Ellipsis className="text-white/40" size={20}/>
                    </div>
                </div>
            </div>

            {/* Empty state */}
            <div className="space-y-2 w-full h-screen flex flex-col justify-center items-center">
                <div>
                    <FileText size={60} strokeWidth={0.5}/>
                </div>
                <h4 className="text-xl">Select a note to view</h4>
                <p className="text-white/60 text-center">Choose a note from the list on the left to view its contents, or create a new note to add to your collection.</p>
            </div>
        </section>
    )
}