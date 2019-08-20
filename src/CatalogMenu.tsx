import { Link, RouteComponentProps } from "@reach/router";
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
  catalog: { schemas }
}: { catalog: Catalog } & RouteComponentProps) {
  return (
    <ul>
      {schemas.map(({ name }) => (
        <li key={name}>
          <Link to={`/${name}`}>{name}</Link>
        </li>
      ))}
    </ul>
  );
}
