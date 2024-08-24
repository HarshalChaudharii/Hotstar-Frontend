import Loader from "@/components/Loader";
import React, { Suspense } from "react";
import MovieDetail from "@/components/MovieDetail";
const page = ({ params }: any) => {
  return (
    <>
      <Suspense fallback={<Loader />}>
        <MovieDetail id={params.id} key={params.key} />
      </Suspense>
    </>
  );
};

export default page;
