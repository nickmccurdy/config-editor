import $RefParser from "json-schema-ref-parser";
import resolveAllOf from "json-schema-resolve-allof";
import React from "react";

export interface Catalog {
  version: number;
  schemas: SchemaReference[];
}

export interface SchemaReference {
  filematch?: string[];
  url: string;
  name: string;
  description: string;
  versions?: Record<string, string>;
}

export default function CatalogMenu({
  catalog: { schemas },
  onSelectCatalog
}: {
  catalog: Catalog;
  onSelectCatalog: (catalog: Catalog) => void;
}) {
  return (
    <ul>
      {schemas.map(({ name, url }) => (
        <li key={name}>
          <a
            href="#"
            onClick={async event => {
              event.preventDefault();

              try {
                const response = await fetch(url);
                onSelectCatalog(
                  resolveAllOf(
                    await $RefParser.dereference(await response.json())
                  )
                );
              } catch (error) {
                console.error(error);
              }
            }}
          >
            {name}
          </a>
        </li>
      ))}
    </ul>
  );
}
