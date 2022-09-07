import { useEffect } from "react";
import { React, useState } from "react";
import { Link } from "react-router-dom";
// import CategoryDatas from "../../../data/CategoryDatas.json";
import CategoryLarge from "../../common/widget/CategoryLarge";
import CategorySmall from "../../common/widget/CategorySmall";
import axios from 'axios';
import Server from "../../../server/server";
function CategoryMain() {
  const [clName, setClName] = useState("clnb_renew_item");
  const [cateName, setCateName] = useState("clnb_lst_cate");
  const [categorySmall, setCategorySmall] = useState([]);
  const [clid, setCLId] = useState();

  const handleItem = (smallCategory, lid) => {
    setClName("clnb_renew_item selected");
    setCateName("clnb_lst_cate selected");
    setCategorySmall(smallCategory);
    setCLId(lid);
  };
  const [categoryDatas, setCategoryDatas] = useState([]);
  useEffect(()=>{
    axios.get(`${Server.baseUrl}api/category/Lv1/findAll`)
    .then(Response => {
      setCategoryDatas(Response.data)
     
    })
  },[])
  return (
    <>
      <ul>
        {categoryDatas &&
          categoryDatas.map((data, idx) => (
            <li key={idx}
              className={clName}
              onClick={() => handleItem(data.categoryLv2List, data.lv1Id)}>
              <CategoryLarge data={data} />
              <CategorySmall csid={data.lv1Id} CategoryDatasS={categorySmall} cateName={cateName} clid={clid}/>
            </li>
          ))}
      </ul>
     
    </>
  );
}

export default CategoryMain;
