import {
  createHistory,
  HistorySource,
  LocationProvider,
  Router
} from "@reach/router";
import createHashSource from "hash-source";
import React, { useEffect, useState } from "react";
import CatalogMenu, { Catalog } from "./CatalogMenu";
import SchemaEditor from "./SchemaEditor";

export default function App() {
  const [catalog, setCatalog] = useState<Catalog>();

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

  if (catalog) {
    return (
      <LocationProvider
        history={createHistory(createHashSource() as HistorySource)}
      >
        <Router>
          <CatalogMenu path="/" catalog={catalog} />
          <SchemaEditor path=":name" catalog={catalog} />
        </Router>
      </LocationProvider>
    );
  } else {
    return null;
  }
}
