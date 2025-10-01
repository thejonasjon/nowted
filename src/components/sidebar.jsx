import { useState } from "react";
import { Archive, FileText, Folder, FolderOpen, FolderPlus, Pencil, Plus, Search, Star, Trash } from "lucide-react";
import NavButton from "./UI/NavButton";
import Button from "./UI/Button";
import FolderCard from "./folderCard";
import InputText from "./UI/inputText";

export default function SideBar() {

    const [activeItem, setActiveItem] = useState(null);
    const [search, setSearch] = useState(false);
    const [value, setValue] = useState("My New Folder");
    const [addFolder, setAddFolder] = useState(false)


  const folders = [
    { title: "Personal" },
    { title: "Work" },
    { title: "Travel" },
    { title: "Event" },
    { title: "Finance" }
  ];

  const more = [
    { title: "Favorites", Icon: Star, ActiveIcon: Star },
    { title: "Trash", Icon: Trash, ActiveIcon: Trash },
    { title: "Archived Notes", Icon: Archive, ActiveIcon: Archive }
  ];

  const recents = [
    { title: "Reflection on the Month of June" },
    { title: "Project proposal" },
    { title: "Travel itinerary" }
  ];

  return (
    <aside className="bg-[#181818] py-7.5">
      <div className="space-y-6">
        <div className="flex justify-between px-5 py-2">
          <div className="flex gap-1.5 text-[26px] text-white font-kaushan-script">
            Nowted <Pencil size={18} />
          </div>
          <div className="flex items-center gap-2">
            {search ?
                <InputText />
            : null
          }
            <button className="cursor-pointer text-white/60 hover:text-white/80 transition-all ease-in-out duration-75"
                onClick={() => setSearch(!search)}
            >
                <Search className="" size={20} />
            </button>
          </div>
        </div>

        <div className="w-11/12 mx-auto">
          <Button text={"New Note"} Icon={Plus} />
        </div>

        {/* Recents */}
        <div>
          <div className="flex items-center justify-between px-5 py-2">
            <h4 className="text-sm font-semibold text-white/60 ">Recents</h4>
          </div>
          <div>
            {recents.map((recent) => (
              <NavButton
                key={recent.title}
                title={recent.title}
                Icon={FileText}
                ActiveIcon={FileText}
                active={activeItem === recent.title}
                onClick={() => setActiveItem(recent.title)}
              />
            ))}
          </div>
        </div>

        {/* Folders */}
        <div>
          <div className="flex items-center justify-between px-5 py-2">
            <h4 className="text-sm font-semibold text-white/60 ">Folder</h4>
            <button className="cursor-pointer"
                onClick={() => setAddFolder(!addFolder)}
            >
                <FolderPlus className="text-white/60" size={24} />
            </button>
        </div>
        { addFolder ?
        <div className="px-5 py-2.5">
          <div className="flex gap-4 items-center">
              <Folder className="text-white" size={20}/>
              <input type="text" value={value}
                  onChange={(e) => setValue(e.target.value)}
                  style={{ width: `${Math.max(value.length, 1)}ch` }}
                  placeholder="Type to search" className="h-full border border-white/90 text-white text-base px-1 py-1 outline-0" />
          </div>
        </div> : null
        }

        <div>
            {folders.map((folder) => (
              <NavButton
                key={folder.title}
                title={folder.title}
                Icon={Folder}
                ActiveIcon={FolderOpen}
                active={activeItem === folder.title}
                onClick={() => setActiveItem(folder.title)}
              />
            ))}
          </div>
        </div>

        {/* More */}
        <div>
          <div className="flex items-center justify-between px-5 py-2">
            <h4 className="text-sm font-semibold text-white/60 ">More</h4>
          </div>
          <div>
            {more.map((m) => (
              <NavButton
                key={m.title}
                title={m.title}
                Icon={m.Icon}
                ActiveIcon={m.ActiveIcon}
                active={activeItem === m.title}
                onClick={() => setActiveItem(m.title)}
              />
            ))}
          </div>
        </div>
      </div>
    </aside>
  );
}
