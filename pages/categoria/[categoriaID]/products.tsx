import React from "react";
import { useRouter } from "next/router";
const CategoriaID = () => {
  const router = useRouter();

  const { categoriaID } = router.query;
  return <div>{categoriaID}</div>;
};

export default CategoriaID;
