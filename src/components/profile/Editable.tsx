import { Editor, EditorContent, useEditor } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import { TextStyleKit } from '@tiptap/extension-text-style'
import React from 'react'
import { Extension } from '@tiptap/core';
import { CharacterCount } from '@tiptap/extensions'

type EditorEvent = (id: string, editor: Editor | null) => void;

interface EditableProps {
    id: string
    content: string | ''
    editable?: boolean
    limit?: number
    onFocus?: EditorEvent
    onBlur?: EditorEvent
    onActivate?: EditorEvent
    onCancel?: EditorEvent
}

const AddKbrd = ({ id, onActivate, onCancel }: { id: string, onActivate: EditorEvent | undefined, onCancel: EditorEvent | undefined }) => {
    const ext = Extension.create({
        name: 'AddKbrd',

        addKeyboardShortcuts() {
            return {
                Escape: () => {
                    // Calls the built-in blur command
                    this.editor.commands.blur();
                    onCancel?.(id, this.editor);
                    return true;
                },
                'Ctrl-Space': () => {
                    onActivate?.(id, this.editor);
                    return true;
                },
            };
        },
    })
    return ext;
}

const Editable: React.FC<EditableProps> = ({ id, content, editable = true, limit = 28, onFocus, onBlur, onActivate, onCancel }) => {
    const editor = useEditor({
        editable: editable,
        autofocus: false,
        // onUpdate(props) {
        //     onContentChange(id, editor, true, props.editor.getHTML())
        // },
        onFocus: (props) => {
            onFocus?.(id, props.editor)
        }, onBlur(props) {
            onBlur?.(id, props.editor)
        },
        extensions: [
            TextStyleKit,
            StarterKit,
            AddKbrd({ id, onActivate, onCancel }),
            CharacterCount.configure({
                limit,
            }),
        ],
        content: content,
    })

    return (<EditorContent editor={editor} />)
}

export default Editable;