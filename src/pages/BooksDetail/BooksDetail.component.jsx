import React from "react";

import BookShowcase from "../../components/BookShowcase/BookShowcase.component";
import Classes from "./Bookdetail.module.scss";

export default function BooksDetail() {
  return (
    <>
      <div className={Classes.containerMain}>
        <BookShowcase />
      </div>
    </>
  );
}
