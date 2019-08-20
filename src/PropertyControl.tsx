import { JSONSchema } from "json-schema-ref-parser";
import React from "react";

export default function PropertyControl({
  default: defaultValue,
  type
}: JSONSchema) {
  if (Array.isArray(type)) {
    return (
      <ul>
        {type.map(type => (
          <li key={type}>
            <PropertyControl default={defaultValue} type={type} />
          </li>
        ))}
      </ul>
    );
  } else {
    switch (type) {
      case "string":
        return <input defaultValue={defaultValue as string} />;
      case "number":
      case "integer":
        return <input type="number" defaultValue={defaultValue as string} />;
      case "boolean":
        return (
          <input type="checkbox" defaultChecked={defaultValue as boolean} />
        );
      case "object":
        return (
          <>
            <input />: <input />
            <br />
            <button>Add</button>
          </>
        );
      case "array":
        return (
          <>
            <input />
            <br />
            <button>Add</button>
          </>
        );
      default:
        return null;
    }
  }
}
