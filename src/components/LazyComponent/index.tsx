import React from "react";
import Loading from "../loading";

export default function LazyComponent(props: any) {
  return (
    <React.Suspense fallback={<Loading />}>{props.children}</React.Suspense>
  );
}
