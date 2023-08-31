import React from "react";
import DetailsRepo from "@/app/components/DetailsRepo";
export default function page({ params }) {
  return (
    <div>
      <DetailsRepo repoName={params?.slug} />
    </div>
  );
}
