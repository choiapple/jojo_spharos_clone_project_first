import React from "react";
import { Link } from "react-router-dom";

function CategorySmall({CategoryDatasS, cateName, clid, csid}) {
  return (
    <>
      {
        clid === csid ?
        <div className={cateName} style={{ height: "150px" }}>
        <div className="clnb_lst">
          <ul className="cate_view">
            {CategoryDatasS &&
              CategoryDatasS.map((data, idx) => (
                <li key={idx} className="">
                  <Link
                    to={`/categoryproductlist?parent=${data.categoryLv1}&lv=${2}&id=${data.id}&page=1`}
                    className="clickable"
                    >
                    {data.lv2name}
                  </Link>
                </li>
              ))}
          </ul>
        </div>
      </div>
      :
      
      null
      }
      
    </>
  );
}

export default CategorySmall;
