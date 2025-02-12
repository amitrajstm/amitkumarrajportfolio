"use client";
import { Toaster } from "react-hot-toast";
const Provider = ({ children }) => {
  return (
    <section>
      <Toaster position="bottom-right" reverseOrder={false} />
      {children}
    </section>
  );
};

export default Provider;
