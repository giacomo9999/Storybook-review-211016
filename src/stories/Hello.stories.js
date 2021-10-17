import React from "react";
import Hello from "../components/Hello.js";

export default {
  title: "Hello Story",
  component: Hello,
};

export function HelloJim() {
  return <Hello name="Jim Gary" />;
}
