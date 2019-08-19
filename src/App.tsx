import { JSONSchema } from "json-schema-ref-parser";
import React, { useEffect, useState } from "react";
import CatalogMenu, { Catalog } from "./CatalogMenu";
import SchemaEditor from "./SchemaEditor";

export default function App() {
  const [catalog, setCatalog] = useState<Catalog>();
  const [schema, setSchema] = useState<JSONSchema>();

  useEffect(() => {
    async function fetchCatalog() {
      try {
        const response = await fetch(
          "http://schemastore.org/api/json/catalog.json"
        );
        setCatalog(await response.json());
      } catch (error) {
        console.error(error);
      }
    }

    fetchCatalog();
  }, []);

  if (schema) {
    return <SchemaEditor schema={schema} />;
  } else if (catalog) {
    return <CatalogMenu catalog={catalog} onSelectSchema={setSchema} />;
  } else {
    return null;
  }
}
