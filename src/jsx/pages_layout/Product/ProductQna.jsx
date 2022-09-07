import React from "react";

function ProductQna({qnaList}) {

  return (
    <div className="mndtl_sec_cont" id="_detailqna">
      <div className="mndtl_sec_subject">
        <h3 className="mndtl_sec_tit">Q&amp;A 문의</h3>
        <div className="mndtl_qna_btnarea">
          <a href="" className="mndtl_qna_btn" target="_parent">
            <span className="clickable">문의하기</span>
          </a>
        </div>
      </div>
      <div className="mndtl_qna_wrap">


        {qnaList.length > 0?
           <div class="mndtl_qna_wrap" data-react-unit-type="text"
           data-react-unit-text='[{"type":"tarea_addt_val","value":"전체보기"}]'>
           <div class="mndtl_qna_lst">
             <ul class="mndtl_chart_lst">
               <div id="data_of_list" data-page="1" data-pagesize="5" data-totalcount="4" data-next="false">


                {qnaList.map((qna)=>
                   <li class="mndtl_chart_item mndtl_toggle on">
                   <div class="mndtl_msg_unit">
                     <div class="mndtl_msg_bx">
                       <div class="mndtl_msg">
                         <div class="mndtl_msg_cont">
                           <div class="mndtl_qna_info">

                           {qna.answerMain ? 
                           <span class="mndtl_qna_status complete">
                           <span class="mndtl_qna_tx">답변완료</span>
                         </span>
                           
                           : 
                           
                           <span class="mndtl_qna_status">
                           <span class="mndtl_qna_tx">답변대기</span>
                         </span>
                           }
                             
                             <div class="mndtl_user_info">userAccount
                               <span class="mndtl_user_tx">{qna.questionDate}</span>
                               <span class="mndtl_user_tx">{qna.userAccount}</span>
                             </div>
                           </div>
                           <div class="mndtl_qna_cont" data-react-unit-type="text"
                             data-react-unit-text='[{"type":"tarea_addt_val","value":"펼쳐보기"}]'>
                             <span class="blind">문의내용</span>
                             <button type="button" class="mndtl_qna_btnmore mndtl_toggle_btn clickable"
                               data-react-tarea-dtl-cd="t00060" aria-expanded="true"
                               onclick="itemQna.getAnswer(this, '1179889829')">
                               <span class="blind">
                                 <span class="sr_off">문의내용 펼치기</span>
                                 <span class="sr_on">문의내용 접기</span>
                               </span>
                               <em class="mndtl_qna_tit">{qna.title}</em>
                               <p class="mndtl_qna_desc">
                                 {qna.questionMain}
                               </p>
                             </button>
                           </div>
                         </div>
                       </div>
                     </div>
                   </div>


                  {qna.answerMain ? 
                  <div class="mndtl_msg_unit answer mndtl_toggle_cont">
                    <div class="mndtl_msg_bx">
                      <div class="mndtl_msg">
                        <div class="mndtl_msg_cont">
                          <div class="mndtl_qna_info">
                            <span class="mndtl_qna_status">
                              <span class="blind">문의답변</span>
                            </span>
                            <div class="mndtl_user_info">
                              <span class="mndtl_user_tx">답변일</span>
                              <span class="mndtl_user_tx">{qna.answerDate}</span>
                            </div>
                          </div>
                          <div class="mndtl_qna_cont">
                            <p class="mndtl_qna_answer">
                              {qna.answerMain}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                   : 
                   ""}
                  


                 </li>
                )}
              
                
               </div>
               <li class="mndtl_chart_item">
                 <div class="mndtl_msg_unit">
                   <div class="mndtl_msg_bx">
                     <div class="mndtl_msg">
                       <a href="#" class="mndtl_msg_more modal-iframe-open clickable" data-react-tarea-dtl-cd="t00060"
                         data-title="Q&amp;A 문의"
                         data-layer-target="/mitem/qnaAll.ssg?repItemId=&amp;itemId=1000414670142&amp;siteNo=6004&amp;inqSalestrNo=6005&amp;splVenId=0024818290&amp;lrnkSplVenId=&amp;itemRegDivCd=10"
                         target="">Q&amp;A 문의 전체보기 <span class="count">(4건)</span></a>
                     </div>
                   </div>
                 </div>
               </li>
             </ul>
           </div>
         </div>
        
        
        :
        <div className="mndtl_summary_noti">
        <p className="mndtl_summary_tx">궁금한점은 언제든 물어보세요.</p>
      </div>
        }
    
      </div>
    </div>




  );
}

export default ProductQna;
