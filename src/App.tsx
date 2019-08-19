import $RefParser, { JSONSchema as Schema } from "json-schema-ref-parser";
import resolveAllOf from "json-schema-resolve-allof";
import React, { useEffect, useState } from "react";

interface Catalog {
  version: number;
  schemas: SchemaReference[];
}

interface SchemaReference {
  filematch?: string[];
  url: string;
  name: string;
  description: string;
  versions?: Record<string, string>;
}

export default function App() {
  const [catalog, setCatalog] = useState<Catalog>();
  const [schema, setSchema] = useState<Schema>();

  useEffect(() => {
    async function fetchCatalog() {
      try {
        const response = await fetch(
          "http://schemastore.org/api/json/catalog.json"
        );
        const catalog: Catalog = await response.json();
        setCatalog(catalog);
      } catch (error) {
        console.error(error);
      }
    }

    fetchCatalog();
  }, []);

  if (schema) {
    return (
      <>
        <h1>{schema.title}</h1>
        {schema.properties &&
          Object.keys(schema.properties).map(property => (
            <div>
              <label>
                {property}
                <br />
                <input />
              </label>
            </div>
          ))}
      </>
    );
  } else if (catalog) {
    return (
      <ul>
        {catalog &&
          catalog.schemas.map(schema => (
            <li key={schema.name}>
              <a
                href="#"
                onClick={async event => {
                  event.preventDefault();

                  try {
                    const response = await fetch(schema.url);
                    const schemaData: Schema = await response.json();
                    setSchema(
                      resolveAllOf(await $RefParser.dereference(schemaData))
                    );
                  } catch (error) {
                    console.error(error);
                  }
                }}
              >
                {schema.name}
              </a>
            </li>
          ))}
      </ul>
    );
  } else {
    return null;
  }
}
