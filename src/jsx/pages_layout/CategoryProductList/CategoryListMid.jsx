import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';

function CategoryListMid({categoryData, queryId}) {
  let initial = Math.ceil(categoryData.childLevelCategory.length/3);
  let initialArr = Array(initial).fill(1);
  const [ulCnt, setUlCnt] = useState(initialArr);
    return (
        <div className="m_catelst">
          {
            ulCnt && ulCnt.map((data, idx)=>{
              return (
                <ul className="lst_cate" key={idx}>
                    {
                      categoryData && categoryData.childLevelCategory.map((dataC, idxC)=>{
                        if(idxC < (idx+1)*3 && idxC>=idx*3){
                          return (
                            <li key={idxC}>
                              <a
                                href="https://m-shinsegaemall.ssg.com/disp/category.ssg?dispCtgId=6000201548"
                                className="clickable">
                                <span>{dataC.categoryName}</span>
                              </a>
                            </li>
                          )
                        }
                      })
                    }
                  </ul>
              );
            })
          }
                </div>
    );
}

export default CategoryListMid;