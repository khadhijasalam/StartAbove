import { client } from "@/sanity/lib/client";
import { STARTUP_BY_ID_QUERY } from "@/sanity/lib/queries";
import { notFound } from "next/navigation";
import React from "react";

export const experimental_ppr = true;

const Page = async ({ params }: { params: Promise<{ id: string }> }) => {
  // ✅ await the promise
  const { id } = await params;
  console.log("ID:", id);

  const post = await client.fetch(STARTUP_BY_ID_QUERY, { id });
  console.log("POST:", post);

  if (!post) notFound();

  return (
    <>
      <h1 className="text-3xl">{post.title}</h1>
    </>
  );
};

export default Page;
