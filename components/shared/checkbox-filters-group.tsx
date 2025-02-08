import React from "react";

interface Props {
    title: string;
    Items: Item[];
    defaultItems?: Item[];
    limit?: number;
    searchInputPlaceholder?: string;
    onChanged?:(value, string[]) => void;
    className?: string;
    
  }

  export const CheckboxFiltersGroup: React.FC<Props> = ({ className }) => {
    <div className={className}></div>
  }