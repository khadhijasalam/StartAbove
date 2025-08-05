// import Image from "next/image";

import SearchForm from "@/components/SearchForm";
import StartupCard from "@/components/StartupCard";
export default async function Home({
  searchParams,
}: {
  searchParams: Promise<{ query?: string }>;
}) {
  const query = (await searchParams).query;
  const posts = [
    {
      _createdAt: new Date(),
      views: 55,
      author: { _id: 1, name: "Khadhija" },
      _id: 1,
      description: "THis is a description.",
      // title: "This is a title",
      image:
        "https://images.unsplash.com/photo-1526779259212-939e64788e3c?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZnJlZSUyMGltYWdlc3xlbnwwfHwwfHx8MA%3D%3D",
      category: "Startups",
      title: "Start Above",
    },
  ];

  return (
    <>
      <section className="red_blue_container">
        <h1 className="heading text-2xl">
          Pitch your startUp,
          <br /> Connect with Entrepreneurs
        </h1>
        <p className="sub-heading !max-w-3xl">
          Submit Ideas, Vote on Pitches, and Get Noticed in Virtual
          Competitions;
        </p>
        <SearchForm query={query} />
      </section>

      <section className="section_container">
        <p className="text-30-semibold">
          {query ? `Section results for ${query}` : "All Startups"}
        </p>
        <ul className="mt-7 card_grid ">
          {posts?.length > 0 ? (
            posts.map((post: StartupCardType, index: number) => (
              <StartupCard key={post?._id} post={post} />
            ))
          ) : (
            <p className="no-results"> No startups found</p>
          )}
        </ul>
      </section>
    </>
  );
}
