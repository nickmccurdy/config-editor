import { JSONSchema } from "json-schema-ref-parser";
import React from "react";

export default function PropertyControl({
  default: defaultValue,
  type
}: JSONSchema) {
  if (Array.isArray(type)) {
    return (
      <ul>
        {type.map(currentType => (
          <li key={currentType}>
            <PropertyControl default={defaultValue} type={currentType} />
          </li>
        ))}
      </ul>
    );
  }

  switch (type) {
    case "string":
      return <input defaultValue={defaultValue as string} />;
    case "number":
    case "integer":
      return <input type="number" defaultValue={defaultValue as string} />;
    case "boolean":
      return <input type="checkbox" defaultChecked={defaultValue as boolean} />;
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
