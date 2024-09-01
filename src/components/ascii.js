'use client'
import React, { useState, useEffect } from "react";
import "@/styles/random.css"

export default function Ascii({ file }) {
  const [ascii, setAscii] = useState("");
  useEffect(() => {
    fetch(file)
      .then((response) => response.text())
      .then((text) => setAscii(text));
  }, [file]);
  return <pre id="ascii-art">{ascii}</pre>;
}