import React from "react";

function SignUpZipcode() {
  return (
    <div id="zipcode" style={{ display: "none" }}>
      <div className="m_fullpop_header">
        <h1 className="m_fullpop_tit">우편번호 찾기</h1>
        <a
        
          className="m_fullpop_close"
        >
          <span className="blind">닫기</span>
        </a>
      </div>
      <div className="search_address">
        <div className="srchaddr_form">
          <form action="">
            <fieldset>
              <legend className="blind">검색어 입력</legend>
              <div className="srchaddr_search">
                <input
                  name="searchKeyword"
                  type="text"
                  title="검색어 입력"
                  className="search_txt"
                  placeholder="도로명 또는 지번 주소를 입력해주세요."
                />
                <button
                  type="button"
                  className="search_clear"
                  
                >
                  <span className="blind">검색어 지우기</span>
                </button>
                <button
                  type="button"
                  className="search_btn"
                  
                >
                  <span className="blind">검색</span>
                </button>
              </div>
            </fieldset>
          </form>
          <div className="srchaddr_suggest" style={{ display: "none" }}>
            <strong className="blind">제안 검색어</strong>
            <ul className="suggest_list"></ul>
          </div>
        </div>

        <div className="srchaddr_sec srchaddr_sec_init">
          <div className="srchaddr_tip">
            <strong className="tip_tit">TIP_이렇게 검색하세요!</strong>
            <div className="tip_search">
              <dl>
                <dt>도로명 + 건물번호</dt>
                <dd className="notranslate">
                  <span>우정국로 26</span>
                </dd>
              </dl>
              <dl>
                <dt>지역명 + 번지</dt>
                <dd className="notranslate">
                  <span>공평동 17</span>
                </dd>
              </dl>
              <dl>
                <dt>지역명 + 건물명</dt>
                <dd className="notranslate">
                  <span>회현동 신세계백화점</span>
                </dd>
              </dl>
            </div>
          </div>
        </div>

        <div
          className="srchaddr_sec srchaddr_sec_noresult"
          style={{ display: "none" }}
        >
          <h2 className="blind">주소 검색결과</h2>
          <div className="srchaddr_noresult">
            <p className="noresult_txt">
              <span className="point">검색결과가 없습니다</span>
            </p>
          </div>
          <div className="srchaddr_tip">
            <strong className="tip_tit">TIP_찾으시는 주소가 없나요?</strong>
            <ul className="tip_desc">
              <li>
                행정안전부 도로명주소 시스템에 주소 등록 후 익일부터 주소 검색이
                가능합니다.
              </li>
              <li>
                도로명주소 홈페이지에서 주소 등록 여부를 확인해주세요.
                <br />
                · 도로명주소 안내 홈페이지 : https://www.juso.go.kr
                <br />· 도로명주소 도움센터 : 1588-0061
              </li>
            </ul>
          </div>
        </div>

        <div
          className="srchaddr_sec srchaddr_sec_result"
          style={{ display: "none" }}
        >
          <h2 className="blind">주소 검색결과</h2>
          <div className="srchaddr_notice">
            <p className="notice_txt">
              <em>검색한 결과 총 0건 입니다.</em>
            </p>
          </div>

          <div className="srchaddr_result">
            <ul className="result_list"></ul>
            <div className="srchaddr_more" style={{ display: "none" }}></div>
          </div>
        </div>

        <div
          className="srchaddr_sec srchaddr_sec_detail"
          style={{ display: "none" }}
        >
          <h2 className="blind">상세주소 입력</h2>
          <div className="srchaddr_final">
            <dl className="srchaddr_info">
              <dt className="info_tit">우편번호</dt>
              <dd name="zipcd" className="info_cont">
                <span className="num"></span>
              </dd>
              <dt className="info_tit">도로명</dt>
              <dd name="roadNmAddr" className="info_cont"></dd>
              <dt className="info_tit">지번</dt>
              <dd name="lotnoAddr" className="info_cont"></dd>
            </dl>
          </div>
          <div className="srchaddr_detail">
            <span className="srchaddr_input">
              <input
                name="dtlAddr"
                type="text"
                title="상세주소 입력"
                className="input_txt"
                placeholder="상세주소를 입력해주세요."
                maxLength="40"
              />
            </span>
            <div className="srchaddr_btnarea">
              <a
                href=""
                onClick
                className="srchaddr_btn"
              >
                확인
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUpZipcode;
