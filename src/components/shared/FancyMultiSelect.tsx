/* eslint-disable react-hooks/exhaustive-deps */
import { Badge } from "@/components/ui/badge";
import {
  Command,
  CommandGroup,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import { cn } from "@/lib/utils";
import { Command as CommandPrimitive } from "cmdk";
import { X } from "lucide-react";
import { useCallback, useEffect, useRef, useState } from "react";
import { ScrollArea } from "../ui/scroll-area";

type Selectable = {
  value: string;
  label: string;
  isCustom?: boolean;
};

type FancyMultiSelectProps = {
  selected: Selectable[];
  setSelected: (
    selected: Selectable[] | ((prev: Selectable[]) => Selectable[]),
  ) => void;
  initialSelectables?: Selectable[];
  placeholderText?: string;
};

const FancyMultiSelect: React.FC<FancyMultiSelectProps> = ({
  selected,
  setSelected,
  initialSelectables = [],
  placeholderText = "Select...",
}) => {
  const inputRef = useRef(null);
  const [open, setOpen] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [selectables, setSelectables] =
    useState<Selectable[]>(initialSelectables);

  const handleUnselect = useCallback((val: Selectable) => {
    setSelected((prev) => prev.filter((s) => s.value !== val.value));
  }, []);

  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent<HTMLDivElement>) => {
      const input = inputRef.current! as HTMLInputElement;

      if (!input) return;

      if ((e.key === "Delete" || e.key === "Backspace") && input.value === "") {
        setSelected((prev) => prev.slice(0, -1));
      }

      if (e.key === "Escape") {
        input.blur();
      }
    },
    [],
  );

  const handleInputChange = (inputText: string) => {
    setInputValue(inputText);

    setSelectables((prev) => {
      const filtered = prev.filter((val) => !val.isCustom);

      const isAlreadySelected = selected.some(
        (val) => val.value?.toLowerCase() === inputText.toLowerCase(),
      );

      const isAlreadyInSelectables = filtered.some(
        (val) => val.value?.toLowerCase() === inputText.toLowerCase(),
      );

      if (inputText === "" || isAlreadySelected || isAlreadyInSelectables)
        return filtered;

      return [
        ...filtered,
        {
          value: inputText,
          label: inputText,
          isCustom: true,
        },
      ];
    });
  };

  useEffect(() => {
    setSelectables(
      initialSelectables.filter(
        (val) => !selected.some((s) => s.value === val.value),
      ),
    );
  }, [selected]);

  return (
    <Command
      onKeyDown={handleKeyDown}
      className="overflow-visible bg-transparent"
      filter={(value: string, search: string) => {
        const regex = new RegExp(search, "i");

        if (regex.test(value)) return 1;
        return 0;
      }}
    >
      <div className="border-input focus-within:border-blue/60 group rounded-md border px-3 py-2 text-sm transition-colors">
        <div className="flex flex-wrap gap-1">
          {selected.map((val) => {
            return (
              <Badge key={val.value} variant="secondary">
                {val.label}
                <button
                  className="ml-1 rounded-full outline-none"
                  onKeyDown={(e) => {
                    if (e.key === "Enter") {
                      handleUnselect(val);
                    }
                  }}
                  onMouseDown={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                  }}
                  onClick={() => handleUnselect(val)}
                >
                  <X className="text-muted-foreground hover:text-foreground h-3 w-3" />
                </button>
              </Badge>
            );
          })}
          <CommandPrimitive.Input
            ref={inputRef}
            value={inputValue}
            onValueChange={handleInputChange}
            onBlur={() => setOpen(false)}
            onFocus={() => setOpen(true)}
            placeholder={placeholderText}
            className="placeholder:text-muted-foreground ml-2 flex-1 bg-transparent py-1 text-[15px] outline-none"
          />
        </div>
      </div>
      <div className="relative">
        <CommandList>
          {open && selectables.length > 0 ? (
            <div className="text-popover-foreground absolute top-0 z-10 w-full rounded-md border bg-white shadow-md outline-none animate-in">
              <CommandGroup className="h-full">
                <ScrollArea
                  className={cn(selectables.length > 7 ? "h-60" : "h-auto")}
                >
                  {selectables.map((val) => {
                    return (
                      <CommandItem
                        key={val.value}
                        onMouseDown={(e) => {
                          e.preventDefault();
                          e.stopPropagation();
                        }}
                        onSelect={() => {
                          setInputValue("");
                          setSelected((prev) => [...prev, val]);
                        }}
                        className={"cursor-pointer"}
                      >
                        {!val.isCustom
                          ? val.label
                          : `create new "${val.label}"`}
                      </CommandItem>
                    );
                  })}
                </ScrollArea>
              </CommandGroup>
            </div>
          ) : null}
        </CommandList>
      </div>
    </Command>
  );
};

export default FancyMultiSelect;
