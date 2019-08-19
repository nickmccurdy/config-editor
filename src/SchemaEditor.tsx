import { JSONSchema } from "json-schema-ref-parser";
import React from "react";
import Property from "./Property";

export default function SchemaEditor({
  schema: { properties, title }
}: {
  schema: JSONSchema;
}) {
  return (
    <>
      <h1>{title}</h1>
      {Object.keys(properties || []).map(property => (
        <Property key={property} name={property} />
      ))}
    </>
  );
}
