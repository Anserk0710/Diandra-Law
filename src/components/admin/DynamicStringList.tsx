"use client";

import { useState } from "react";

type DynamicStringListProps = {
  prefix: string;
  initialItems: string[];
  addLabel?: string;
  itemLabel?: string;
  maxItems?: number;
};

export function DynamicStringList({
  prefix,
  initialItems,
  addLabel = "Tambah item",
  itemLabel = "Item",
  maxItems = 12,
}: DynamicStringListProps) {
  const [items, setItems] = useState(
    initialItems.length > 0
      ? initialItems
      : [""],
  );

  function addItem() {
    if (items.length >= maxItems) {
      return;
    }

    setItems((current) => [
      ...current,
      "",
    ]);
  }

  function updateItem(
    index: number,
    value: string,
  ) {
    setItems((current) =>
      current.map((item, itemIndex) =>
        itemIndex === index
          ? value
          : item,
      ),
    );
  }

  function removeItem(index: number) {
    setItems((current) => {
      const next = current.filter(
        (_, itemIndex) =>
          itemIndex !== index,
      );

      return next.length > 0
        ? next
        : [""];
    });
  }

  return (
    <div className="space-y-3">
      {items.map((item, index) => (
        <div
          key={`${prefix}-${index}`}
          className="flex gap-3"
        >
          <input
            name={`${prefix}.${index}.value`}
            value={item}
            onChange={(event) =>
              updateItem(
                index,
                event.target.value,
              )
            }
            className="input-text"
            placeholder={`${itemLabel} ${
              index + 1
            }`}
            maxLength={500}
          />

          <button
            type="button"
            onClick={() =>
              removeItem(index)
            }
            className="rounded-xl border border-red-200 px-4 text-sm font-semibold text-red-700 hover:bg-red-50"
          >
            Hapus
          </button>
        </div>
      ))}

      <button
        type="button"
        onClick={addItem}
        disabled={items.length >= maxItems}
        className="btn-secondary text-sm disabled:cursor-not-allowed disabled:opacity-50"
      >
        {addLabel}
      </button>
    </div>
  );
}