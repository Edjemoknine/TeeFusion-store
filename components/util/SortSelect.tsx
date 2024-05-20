"use client";
import React from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
type SelectProps = {
  sorted: string;
  setSorted: (item: string) => void;
};
const SortSelect = ({ sorted, setSorted }: SelectProps) => {
  return (
    <Select>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Sorted By" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="light">Last added</SelectItem>
        <SelectItem value="dark">Most populair</SelectItem>
        <SelectItem value="system">Recents</SelectItem>
      </SelectContent>
    </Select>
  );
};

export default SortSelect;
