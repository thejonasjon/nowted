import { EditorContent, useEditor } from "@tiptap/react"
import { BubbleMenu, FloatingMenu } from "@tiptap/react/menus"
import StarterKit from "@tiptap/starter-kit"
import Link from "@tiptap/extension-link"
import Image from "@tiptap/extension-image"
import { FontSize } from "../extensions/fontSize"
import { TextStyle } from "@tiptap/extension-text-style"
import NoteEditorMenuBar from "./noteEditorMenuBar"

const NoteEditor = () => {
  const editor = useEditor({
    extensions: [
        StarterKit,
        TextStyle,
        FontSize,
        Link.configure({
        openOnClick: true,
        autolink: true,
        HTMLAttributes: {
            rel: "noopener noreferrer",
            target: "_blank",
            class: "text-blue-500 underline"
        },
        }),
        Image.configure({
        inline: false,
        allowBase64: true,
        HTMLAttributes: {
            class: "rounded-lg max-w-full mx-auto",
        },
        }),
    ], // define your extension array
    content: '<p>Hello World!</p>', // initial content
    editorProps: {
        attributes: {
            class: "min-h-300 border-0 outline-0 focus:border-1 focus:border-white/40 text-white text-base rounded-md px-8 py-4"
        }
    }
  })

  return (
    <div className="space-y-7.5">
        <NoteEditorMenuBar editor={editor} />
        <EditorContent editor={editor} />
      {/*
      <FloatingMenu editor={editor}>This is the floating menu</FloatingMenu>
      <BubbleMenu editor={editor}>This is the bubble menu</BubbleMenu>
      */}
    </div>
  )
}

export default NoteEditor