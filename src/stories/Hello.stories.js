// import React from "react";
import Hello, { IsLoading } from "../components/Hello.js";

export default {
  title: "Hello Story",
  component: Hello,
};

export function HelloJim() {
  return <Hello name="Jim Gary" />;
}

export function HelloLisa() {
  return <Hello name="Lisa Ross" />;
}

export function notLoading() {
  return <IsLoading condition={false} />;
}

export function isLoading() {
  return <IsLoading condition={true} />;
}
