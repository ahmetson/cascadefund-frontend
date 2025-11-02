import { Editor, EditorContent, useEditor } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import { TextStyleKit } from '@tiptap/extension-text-style'
import React from 'react'
import { Extension } from '@tiptap/core';
import { CharacterCount } from '@tiptap/extensions'
import { ComponentProps } from '@/types/eventTypes';

type EditorEvent = (id: string, editor: Editor | null) => void;

interface EditableProps extends ComponentProps {
    id: string
    content: string | ''
    editable?: boolean
    limit?: number
    autofocus?: boolean
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

const Editable: React.FC<EditableProps> = ({ id, content, editable = true, limit = 28, autofocus = false, onFocus, onBlur, onActivate, onCancel, className }) => {
    const editor = useEditor({
        editable: editable,
        immediatelyRender: false,
        autofocus: autofocus,
        onFocus: (props) => {
            onFocus?.(id, props.editor)
        },
        onBlur(props) {
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

    return (
        <EditorContent editor={editor} className={className} />
    )
}

export default Editable;