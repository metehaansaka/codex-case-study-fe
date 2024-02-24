"use client"
import { useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.min.js'

export default function Home() {
  useEffect(() => {
    if (typeof window !== "undefined") {
      require('bootstrap/dist/js/bootstrap.js')
    }
  }, [])
  return (
    <main>
        <div className="container">
            <p>TEST</p>
        </div>
    </main>
  );
}
