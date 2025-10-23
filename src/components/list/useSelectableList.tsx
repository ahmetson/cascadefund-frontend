import React, { useState } from 'react'

export class SelectedItem {
  private _ids: string[] = []
  public readonly allowMany: boolean

  constructor({ allowMany }: { allowMany: boolean }) {
    this.allowMany = allowMany
  }

  get amount(): number {
    return this._ids.length
  }

  get asArray(): string[] {
    return [...this._ids]
  }

  has(id: string): boolean {
    return this._ids.includes(id)
  }

  toggle(id: string): SelectedItem {
    const newSelectedItem = new SelectedItem({ allowMany: this.allowMany })

    if (this.has(id)) {
      // Remove the id
      newSelectedItem._ids = this._ids.filter(existingId => existingId !== id)
    } else {
      // Add the id
      if (this.allowMany) {
        newSelectedItem._ids = [...this._ids, id]
      } else {
        // Single selection - replace all with this id
        newSelectedItem._ids = [id]
      }
    }

    return newSelectedItem
  }

  // Custom comparison for === operator
  [Symbol.toPrimitive]() {
    return this._ids.length === 0 ? undefined : this._ids.length === 1 ? this._ids[0] : this._ids
  }

  // Override valueOf for comparison
  valueOf() {
    return this._ids.length === 0 ? undefined : this._ids.length === 1 ? this._ids[0] : this._ids
  }

  // Custom equals method for explicit comparison
  equals(other: string | undefined): boolean {
    if (other === undefined) {
      return this._ids.length === 0
    }
    return this._ids.includes(other)
  }
}

export function useSelectableList({ allowMany = false }: { allowMany?: boolean } = {}) {
  const [selectedItem, setSelectedItemState] = useState<SelectedItem>(
    new SelectedItem({ allowMany })
  )

  const setSelectedItem = (id: string) => {
    setSelectedItemState(prev => prev.toggle(id))
  }

  return { selectedItem, setSelectedItem }
}

export default useSelectableList
