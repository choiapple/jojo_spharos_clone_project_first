import React from "react";
import { Link } from "react-router-dom";

function CategoryLarge({data}) {
  console.log(data.lv1imgpath);
  return (
    <Link to="" className="clickable">
      <span
        className="thmb ssg_lazy"
       
        style={{
          backgroundImage: `url(${data.lv1imgpath})`,
        }}
      ></span>
      <em>{data.lv1name}</em>
    </Link>
  );
}

export default CategoryLarge;
