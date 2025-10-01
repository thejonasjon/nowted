import FolderCard from "./folderCard";

export default function FolderLists(){
    return (
        <div className="space-y-7.5 bg-[#1c1c1c] py-7.5">
            <div className="text-white px-5 py-1">
                <h3 className="text-xl">Personal</h3>
            </div>

            <div className="space-y-5 px-5">
                <FolderCard />

                <FolderCard />

                <FolderCard />

                <FolderCard />
            </div>
        </div>
    )
}