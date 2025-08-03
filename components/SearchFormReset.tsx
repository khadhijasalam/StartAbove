"use client";

import Link from "next/link";
import React from "react";

// we use a different component because the reset button is client side and the form is rendered server side
const SearchFormReset = () => {
  const reset = () => {
    const form = document.querySelector(".search-form") as HTMLFormElement;
    if (form) form.reset();
  };
  return (
    <button type="reset" onClick={reset}>
      <Link href="/" className="search-btn text-white">
        X
      </Link>
    </button>
  );
};
export default SearchFormReset;
