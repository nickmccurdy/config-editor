import { JSONSchema } from "json-schema-ref-parser";
import React from "react";
import PropertyControl from "./PropertyControl";

export default function Property({
  name: nameProp,
  ...schema
}: { name: string } & JSONSchema) {
  return (
    <div>
      <label>
        {nameProp}
        <br />
        <PropertyControl {...schema} />
      </label>
    </div>
  );
}
