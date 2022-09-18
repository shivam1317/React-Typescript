import React from "react";

type ListProps<T> = {
  items: T[];
  onClick: (value: T) => void;
};

// passing generics for props
const List = <T extends string | number>({ items, onClick }: ListProps<T>) => {
  return (
    <div>
      <h2>List of items using generics</h2>
      {items.map((item, index) => {
        return (
          <div key={index} onClick={() => onClick(item)}>
            {item}
          </div>
        );
      })}
    </div>
  );
};

export default List;
