"use client";

import { useState } from "react";
import { Select } from "./_components/atoms";

export default function Home() {
  return (
    <main className="grid-content h-full bg-slate-400">
      <h1>Testing components.</h1>
      <div className="bg-yellow-400 full-width">
        <Select
          onChange={(value) => console.log({ value })}
          placeholder="EN"
          options={[
            { value: "EN", label: "EN" },
            { value: "KO", label: "KO" },
          ]}
        />
        <p>hello</p>
        <select name="" id="">
          <option value="ed">di</option>
          <option value="ed">di</option>
          <option value="ed">di</option>
          <option value="ed">di</option>
          <option value="ed">di</option>
          <option value="ed">di</option>
        </select>
      </div>
      <div className="bg-red-500">hello</div>
    </main>
  );
}
