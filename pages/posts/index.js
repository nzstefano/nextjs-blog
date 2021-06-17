import * as React from "react";
import { DataGrid } from "@material-ui/data-grid";

import { getSortedPostsData } from "../../lib/posts";
import { useRouter } from "next/router";

export async function getStaticProps() {
  const allPostsData = await getSortedPostsData();

  return {
    props: {
      allPostsData,
    },
  };
}

const columns = [
  { field: "id", headerName: "ID", width: 100 },
  { field: "title", headerName: "Title", width: 700 },
];

export default function DataTable({ allPostsData }) {
  const router = useRouter();
  return (
    <div style={{ height: 700, width: "100%" }}>
      <DataGrid
        rows={allPostsData.props.posts}
        columns={columns}
        pageSize={10}
        onRowClick={({ row }) => {
          router.push(`/posts/${row.id}`);
        }}
      />
    </div>
  );
}
