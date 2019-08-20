import { RouteComponentProps } from "@reach/router";
import $RefParser, { JSONSchema } from "json-schema-ref-parser";
import resolveAllOf from "json-schema-resolve-allof";
import React, { useEffect, useState } from "react";
import { Catalog } from "./CatalogMenu";
import Property from "./Property";

export default function SchemaEditor({
  catalog,
  name
}: { catalog: Catalog } & RouteComponentProps<{ name: string }>) {
  const [schema, setSchema] = useState<JSONSchema>();

  useEffect(() => {
    async function fetchSchema() {
      try {
        const matchingSchema = catalog.schemas.find(
          schema => schema.name === name
        );

        if (matchingSchema) {
          const response = await fetch(matchingSchema.url);
          setSchema(
            resolveAllOf(await $RefParser.dereference(await response.json()))
          );
        }
      } catch (error) {
        console.error(error);
      }
    }

    fetchSchema();
  }, [catalog, name]);

  if (schema) {
    return (
      <>
        <h1>{schema.title}</h1>
        {Object.keys(schema.properties || []).map(property => (
          <Property key={property} name={property} />
        ))}
      </>
    );
  } else {
    return null;
  }
}
