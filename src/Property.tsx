import { JSONSchema } from "json-schema-ref-parser";
import React from "react";
import PropertyControl from "./PropertyControl";

export default function Property({
  name,
  ...schema
}: { name: string } & JSONSchema) {
  return (
    <div>
      <label>
        {name}
        <br />
        <PropertyControl {...schema} />
      </label>
    </div>
  );
}
