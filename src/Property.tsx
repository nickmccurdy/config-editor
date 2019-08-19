import React from "react";

export default function Property({ name }: { name: string }) {
  return (
    <div>
      <label>
        {name}
        <br />
        <input />
      </label>
    </div>
  );
}
