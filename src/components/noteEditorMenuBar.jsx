import { Bold, Heading1, Italic, Link, Table, Underline, Image, ChevronDown } from "lucide-react"
import { useEffect, useState } from "react"

export default function NoteEditorMenuBar({ editor }) {
    const [, setUpdate] = useState(0);

    useEffect(() => {
        if (!editor) return

        // re-render on any change
        editor.on("update", () => setUpdate(x => x + 1))
        editor.on("selectionUpdate", () => setUpdate(x => x + 1))

        return () => {
        editor.off("update")
        editor.off("selectionUpdate")
        }
    }, [editor]);

    const addImage = () => {
        const url = window.prompt('URL')
        if (url) {
        editor.chain().focus().setImage({ src: url }).run()
        }
    }

    const addLink = () => {
        const url = window.prompt("Enter URL");

        if (url) {
        const { state } = editor;
        const { from, to } = state.selection;

        if (from === to) {
        // No text selected → insert link text
            editor
                .chain()
                .focus()
                .insertContent(`<a href="${url}" target="_blank">${url}</a>`)
                .run();
            } else {
            // Text selected → apply link to it
            editor.chain().focus().setLink({ href: url }).run();
            }
        }
    };

    const addTable = () => {
        editor
            .chain()
            .focus()
            .insertTable({ rows: 3, cols: 3, withHeaderRow: true })
            .run();
    };




    if (!editor) return null

    const options = [
        {
        p: [
            {
            icon: <ChevronDown className="size-5" />,
            onclick: () => editor.chain().focus().toggleHeading({ level: 1 }).run(),
            processed: editor.isActive("heading", { level: 1 }),
            },
        ],
        },
        {
        n: [
            {
            icon: <ChevronDown className="size-5" />,
            onclick: () => editor.chain().focus().toggleHeading({ level: 2 }).run(),
            processed: editor.isActive("heading", { level: 2 }),
            },
        ],
        },
        {
        biu: [
            {
            icon: <Bold className="size-5" />,
            onclick: () => editor.chain().focus().toggleBold().run(),
            processed: editor.isActive("bold"),
            },
            {
            icon: <Italic className="size-5" />,
            onclick: () => editor.chain().focus().toggleItalic().run(),
            processed: editor.isActive("italic"),
            },
            {
            icon: <Underline className="size-5" />,
            onclick: () => editor.chain().focus().toggleUnderline().run(),
            processed: editor.isActive("underline"),
            },
        ],
        },
        {
        il: [
            {
            icon: <Image className="size-5" />,
            onclick: () => addImage(),
            processed: editor.isActive("image"),
            },
            {
            icon: <Link className="size-5" />,
            onclick: () => addLink(),
            processed: editor.isActive("link"),
            },
        ],
        },
        {
        t: [
            {
            icon: <Table className="size-5" />,
            onclick: () => addTable,
            processed: editor.isActive("table"),
            },
        ],
        },
    ]

    return (
        <div className="w-full flex gap-8 border-y border-white/20 text-white py-2">
        {/* Paragraph section */}
        <div className="flex gap-2 items-center">
            <span className="text-white text-base">Paragraph</span>
            {options[0].p.map((option, idx) => (
            <button
                key={idx}
                onClick={option.onclick}
                className={`p-2 rounded-sm ${
                option.processed ? "bg-white/10" : "bg-transparent"
                } cursor-pointer`}
            >
                {option.icon}
            </button>
            ))}
        </div>

        {/* Font size section */}
        <div className="relative inline-block">
            <select
                className="appearance-none bg-transparent cursor-pointer outline-0 text-white rounded-sm px-2 py-1 pr-8"
                onChange={(e) =>
                editor.chain().focus().setMark("textStyle", { fontSize: e.target.value }).run()
                }
                value={editor.getAttributes("textStyle").fontSize || "16"}
            >
                {[9, 10, 11, 12, 14, 16, 18, 20, 24, 28, 32, 34, 36, 38, 40, 42, 44, 46, 48, 50, 52, 54, 56, 60].map((size) => (
                <option key={size} value={size} className="text-black">
                    {size}
                </option>
                ))}
            </select>
            {/* Custom dropdown icon */}
            < ChevronDown className="size-5 absolute right-2 top-1/2 transform -translate-y-1/2 text-white pointer-events-none"/>
        </div>

        {/* Bold / Italic / Underline */}
        <div className="flex gap-2">
            {options[2].biu.map((option, idx) => (
            <button
                key={idx}
                onClick={option.onclick}
                className={`p-2 rounded-sm ${
                option.processed ? "bg-white/10" : "bg-transparent"
                } cursor-pointer`}
            >
                {option.icon}
            </button>
            ))}
        </div>

        {/* Image / Link */}
        <div className="flex gap-2">
            {options[3].il.map((option, idx) => (
            <button
                key={idx}
                onClick={option.onclick}
                className={`p-2 rounded-sm ${
                option.processed ? "bg-white/10" : "bg-transparent"
                } cursor-pointer`}
            >
                {option.icon}
            </button>
            ))}
        </div>

        {/* Table */}
        <div className="flex gap-2">
            {options[4].t.map((option, idx) => (
            <button
                key={idx}
                onClick={option.onclick}
                className={`p-2 rounded-sm ${
                option.processed ? "bg-white/10" : "bg-transparent"
                } cursor-pointer`}
            >
                {option.icon}
            </button>
            ))}
        </div>
        </div>
    )
}