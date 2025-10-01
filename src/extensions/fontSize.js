import { Mark } from "@tiptap/core"
import {TextStyle} from "@tiptap/extension-text-style"

export const FontSize = TextStyle.extend({
  addAttributes() {
    return {
      fontSize: {
        default: null,
        parseHTML: element => element.style.fontSize.replace("px", ""),
        renderHTML: attributes => {
          if (!attributes.fontSize) return {}
          return { style: `font-size: ${attributes.fontSize}px` }
        },
      },
    }
  },
})

