import { RouteComponentProps } from "@reach/router";
import $RefParser, { JSONSchema } from "json-schema-ref-parser";
import resolveAllOf from "json-schema-resolve-allof";
import React, { useEffect, useState } from "react";
import { Catalog } from "./CatalogMenu";
import Property from "./Property";

export default function SchemaEditor({
  catalog,
  name: nameProp
}: { catalog: Catalog } & RouteComponentProps<{ name: string }>) {
  const [schema, setSchema] = useState<JSONSchema>();

  useEffect(() => {
    async function fetchSchema() {
      try {
        const matchingSchema = catalog.schemas.find(
          currentSchema => currentSchema.name === nameProp
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
  }, [catalog, nameProp]);

  if (schema) {
    return (
      <>
        <h1>{schema.title}</h1>
        {Object.entries(schema.properties || []).map(
          ([property, currentSchema]: [string, JSONSchema]) => (
            <Property key={property} name={property} {...currentSchema} />
          )
        )}
      </>
    );
  }

  return null;
}
