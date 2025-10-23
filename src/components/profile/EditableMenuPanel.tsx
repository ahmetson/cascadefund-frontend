import { Editor, useEditorState } from '@tiptap/react'
import Button from '../custom-ui/Button'
import InfoPanel from '../panel/InfoPanel'

function MenuBar({ editor, className = '' }: { editor: Editor, className?: string }) {
    // Read the current editor's state, and re-render the component when it changes
    const editorState = useEditorState({
        editor,
        selector: ctx => {
            return {
                isBold: ctx.editor.isActive('bold') ?? false,
                canBold: ctx.editor.can().chain().toggleBold().run() ?? false,
                isItalic: ctx.editor.isActive('italic') ?? false,
                canItalic: ctx.editor.can().chain().toggleItalic().run() ?? false,
                isStrike: ctx.editor.isActive('strike') ?? false,
                canStrike: ctx.editor.can().chain().toggleStrike().run() ?? false,
                isCode: ctx.editor.isActive('code') ?? false,
                canCode: ctx.editor.can().chain().toggleCode().run() ?? false,
                canClearMarks: ctx.editor.can().chain().unsetAllMarks().run() ?? false,
                isParagraph: ctx.editor.isActive('paragraph') ?? false,
                isHeading1: ctx.editor.isActive('heading', { level: 1 }) ?? false,
                isHeading2: ctx.editor.isActive('heading', { level: 2 }) ?? false,
                isHeading3: ctx.editor.isActive('heading', { level: 3 }) ?? false,
                isHeading4: ctx.editor.isActive('heading', { level: 4 }) ?? false,
                isHeading5: ctx.editor.isActive('heading', { level: 5 }) ?? false,
                isHeading6: ctx.editor.isActive('heading', { level: 6 }) ?? false,
                isBulletList: ctx.editor.isActive('bulletList') ?? false,
                isOrderedList: ctx.editor.isActive('orderedList') ?? false,
                isCodeBlock: ctx.editor.isActive('codeBlock') ?? false,
                isBlockquote: ctx.editor.isActive('blockquote') ?? false,
                canUndo: ctx.editor.can().chain().undo().run() ?? false,
                canRedo: ctx.editor.can().chain().redo().run() ?? false,
            }
        },
    })

    return (
        <InfoPanel className={className} >
            <div className="flex flex-wrap flex-row justify-start items-center gap-1 w-full">
                <Button
                    variant='secondary'
                    onClick={() => {
                        editor.chain().focus().toggleBold().run()
                    }}
                    disabled={!editorState.canBold}
                    className={'w-10 h-10' + editorState.isBold ? 'is-active' : ''}
                >
                    Bold
                </Button>
                <Button
                    variant='secondary'
                    onClick={() => editor.chain().focus().toggleItalic().run()}
                    disabled={!editorState.canItalic}
                    className={'w-10 h-10' + editorState.isItalic ? 'is-active' : ''}
                >
                    Italic
                </Button>
                <Button
                    variant='secondary'
                    onClick={() => editor.chain().focus().toggleStrike().run()}
                    disabled={!editorState.canStrike}
                    className={'w-10 h-10' + editorState.isStrike ? 'is-active' : ''}
                >
                    Strike
                </Button>
                <Button
                    variant='secondary'
                    onClick={() => editor.chain().focus().toggleCode().run()}
                    disabled={!editorState.canCode}
                    className={'w-10 h-10' + editorState.isCode ? 'is-active' : ''}
                >
                    Code
                </Button>
                <Button variant='secondary' onClick={() => editor.chain().focus().unsetAllMarks().run()}>Clear marks</Button>
                <Button variant='secondary' onClick={() => editor.chain().focus().clearNodes().run()}>Clear nodes</Button>
                <Button
                    variant='secondary'
                    onClick={() => editor.chain().focus().setParagraph().run()}
                    className={'w-10 h-10' + editorState.isParagraph ? 'is-active' : ''}
                >
                    Paragraph
                </Button>
                <Button
                    onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}
                    className={'w-10 h-10' + editorState.isHeading1 ? 'is-active' : ''}
                >
                    H1
                </Button>
                <Button
                    onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
                    className={'w-10 h-10' + editorState.isHeading2 ? 'is-active' : ''}
                >
                    H2
                </Button>
                <Button
                    onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()}
                    className={'w-10 h-10' + editorState.isHeading3 ? 'is-active' : ''}
                >
                    H3
                </Button>
                <Button
                    onClick={() => editor.chain().focus().toggleHeading({ level: 4 }).run()}
                    className={'w-10 h-10' + editorState.isHeading4 ? 'is-active' : ''}
                >
                    H4
                </Button>
                <Button
                    onClick={() => editor.chain().focus().toggleHeading({ level: 5 }).run()}
                    className={'w-10 h-10' + editorState.isHeading5 ? 'is-active' : ''}
                >
                    H5
                </Button>
                <Button
                    onClick={() => editor.chain().focus().toggleHeading({ level: 6 }).run()}
                    className={'w-10 h-10' + editorState.isHeading6 ? 'is-active' : ''}
                >
                    H6
                </Button>
                <Button
                    onClick={() => editor.chain().focus().toggleBulletList().run()}
                    className={'w-10 h-10' + editorState.isBulletList ? 'is-active' : ''}
                >
                    Bullet list
                </Button>
                <Button
                    onClick={() => editor.chain().focus().toggleOrderedList().run()}
                    className={'w-10 h-10' + editorState.isOrderedList ? 'is-active' : ''}
                >
                    Ordered list
                </Button>
                <Button
                    onClick={() => editor.chain().focus().toggleCodeBlock().run()}
                    className={'w-10 h-10' + editorState.isCodeBlock ? 'is-active' : ''}
                >
                    Code block
                </Button>
                <Button
                    onClick={() => editor.chain().focus().toggleBlockquote().run()}
                    className={'w-10 h-10' + editorState.isBlockquote ? 'is-active' : ''}
                >
                    Blockquote
                </Button>
                <Button onClick={() => editor.chain().focus().setHorizontalRule().run()}>Horizontal rule</Button>
                <Button onClick={() => editor.chain().focus().setHardBreak().run()}>Hard break</Button>
                <Button onClick={() => editor.chain().focus().undo().run()} disabled={!editorState.canUndo}>
                    Undo
                </Button>
                <Button onClick={() => editor.chain().focus().redo().run()} disabled={!editorState.canRedo}>
                    Redo
                </Button>
            </div>
        </InfoPanel>
    )
}

export default MenuBar;