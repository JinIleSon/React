import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App" style={{display: "flex", gap: "10px", justifyContent:"center", alignItems: "center", minHeight: "100vh"}}>
      <div style={{display: "flex", alignItems: "center", marginRight: "15px"}}>
        <button style={{width: "42px", height: "135px", border: "2px solid #A0A7AF", borderRadius: "8px", display:"flex", alignItems:"center", justifyContent:"center", cursor:"pointer", background: "white"}}>
          <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M17.0154 5.73527C17.4384 6.15834 17.4384 6.84427 17.0154 7.26733L11.2814 13.0013L17.0154 18.7353C17.4384 19.1583 17.4384 19.8443 17.0154 20.2673C16.5923 20.6904 15.9064 20.6904 15.4833 20.2673L8.98332 13.7673C8.56025 13.3443 8.56025 12.6583 8.98332 12.2353L15.4833 5.73527C15.9064 5.3122 16.5923 5.3122 17.0154 5.73527Z" fill="#A0A7AF"/>
          </svg>
        </button>
      </div>
      <div style={{width: "769px", border: "1px solid", height: "949px", borderRadius: "16px", border: "1px solid #E2E8F0", boxShadow: "10px 10px 10px 10px rgba(0, 0, 0, 0.08), -10px -10px 10px 10px rgba(0, 0, 0, 0.08)"}}>
        <div style={{border: "0px solid", textAlign: "left", padding: "13px"}}>
          <div style={{border: "0px solid", marginTop: "15px"}}>
            <div style={{display: "flex"}}>
              <div style={{border: "0px solid", marginRight: "13px"}}>
                <svg width="3" height="27" viewBox="0 0 3 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect y="9" width="9" height="2.13281" transform="rotate(-90 0 9)" fill="#00ABB3"/>
                  <path d="M0 18L0 9H2.13281L2.13281 18H0Z" fill="#5686C4"/>
                  <rect y="27" width="9" height="2.13281" transform="rotate(-90 0 27)" fill="#FCA108"/>
                </svg>
              </div>
              <div style={{border: "0px solid"}}>
                <span style={{color: "#525252", fontWeight:"600"}}>데이터 위치 보기</span>
              </div>
            </div>
            <div style={{border: "1px solid", height: "511px", marginTop: "10px"}}>
              지도공간임
            </div>
            <div style={{border: "0px solid", marginTop: "15px"}}>
              <div style={{display: "flex"}}>
                <div style={{border: "0px solid", marginRight: "13px"}}>
                  <svg width="3" height="27" viewBox="0 0 3 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect y="9" width="9" height="2.13281" transform="rotate(-90 0 9)" fill="#00ABB3"/>
                    <path d="M0 18L0 9H2.13281L2.13281 18H0Z" fill="#5686C4"/>
                    <rect y="27" width="9" height="2.13281" transform="rotate(-90 0 27)" fill="#FCA108"/>
                  </svg>
                </div>
                <div style={{border: "0px solid"}}>
                  <span style={{color: "#525252", fontWeight:"600"}}>지하시설물 분류 정보</span>
                </div>
              </div>
            </div>
            <div style={{border: "0px solid", marginTop: "15px", padding: "20px"}}>
              <div style={{border: "0px solid", display: "flex"}}>
                <div style={{display: "flex", marginRight: "120px"}}>
                  <div style={{marginTop:"7px"}}>
                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <g clip-path="url(#clip0_246_13986)">
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M4.22703 2.72703C5.4929 1.46116 7.20979 0.75 9 0.75C10.7902 0.75 12.5071 1.46116 13.773 2.72703C15.0388 3.9929 15.75 5.70979 15.75 7.5C15.75 8.34298 15.567 9.1729 15.2761 9.961C15.1326 10.3496 14.7013 10.5483 14.3127 10.4048C13.9242 10.2614 13.7255 9.83008 13.8689 9.4415C14.1135 8.7791 14.25 8.12702 14.25 7.5C14.25 6.10761 13.6969 4.77225 12.7123 3.78769C11.7277 2.80312 10.3924 2.25 9 2.25C7.60761 2.25 6.27225 2.80312 5.28769 3.78769C4.30312 4.77225 3.75 6.10761 3.75 7.5C3.75 9.11949 4.66251 10.865 5.8483 12.423C6.99449 13.9289 8.30972 15.1484 8.99996 15.7474C9.18616 15.5856 9.36979 15.4208 9.55078 15.2531C9.85464 14.9716 10.3292 14.9897 10.6107 15.2935C10.8922 15.5974 10.8741 16.0719 10.5702 16.3534C10.3638 16.5446 10.1543 16.7323 9.94153 16.9164C9.92856 16.9276 9.91521 16.9384 9.9015 16.9487C9.64158 17.1441 9.32519 17.2498 9 17.2498C8.6748 17.2498 8.35841 17.1441 8.0985 16.9487C8.08501 16.9385 8.07187 16.9279 8.0591 16.9169C7.34271 16.2984 5.91215 14.9836 4.6547 13.3314C3.41462 11.7021 2.25 9.62526 2.25 7.5C2.25 5.70979 2.96116 3.9929 4.22703 2.72703Z" fill="#525252"/>
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M9 6C8.17157 6 7.5 6.67157 7.5 7.5C7.5 8.32843 8.17157 9 9 9C9.82843 9 10.5 8.32843 10.5 7.5C10.5 6.67157 9.82843 6 9 6ZM6 7.5C6 5.84315 7.34315 4.5 9 4.5C10.6569 4.5 12 5.84315 12 7.5C12 9.15685 10.6569 10.5 9 10.5C7.34315 10.5 6 9.15685 6 7.5Z" fill="#525252"/>
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M17.0303 11.4697C17.3232 11.7626 17.3232 12.2374 17.0303 12.5303L14.0303 15.5303C13.7374 15.8232 13.2626 15.8232 12.9697 15.5303L11.4697 14.0303C11.1768 13.7374 11.1768 13.2626 11.4697 12.9697C11.7626 12.6768 12.2374 12.6768 12.5303 12.9697L13.5 13.9393L15.9697 11.4697C16.2626 11.1768 16.7374 11.1768 17.0303 11.4697Z" fill="#525252"/>
                      </g>
                      <defs>
                      <clipPath id="clip0_246_13986">
                      <rect width="18" height="18" fill="white"/>
                      </clipPath>
                      </defs>
                    </svg>
                  </div>
                  <div style={{marginTop: "5px", color: "#525252", fontWeight: "700", marginLeft: "7px", fontSize: "14px"}}>
                    지역 선택
                  </div>
                </div>
                <div style={{position: "relative"}}>
                  <select name="" id=""
                  style={{width: "138.91px", border: "1px solid #D1D5DB", padding: "9px", borderRadius: "8px", paddingRight: "40px", color: "#999999",
                    appearance:"none",
                    WebkitAppearance:"none",
                    MozAppearance:"none",
                    fontSize: "11px",
                    marginRight: "45px",
                  }}>
                    <option value="특광역시도 선택">특광역시도 선택</option>
                    <option value="서울특별시">서울특별시</option>
                    <option value="부산광역시">부산광역시</option>
                    <option value="대구광역시">대구광역시</option>
                    <option value="인천광역시">인천광역시</option>
                    <option value="광주광역시">광주광역시</option>
                    <option value="대전광역시">대전광역시</option>
                    <option value="울산광역시">울산광역시</option>
                    <option value="세종특별자치시">세종특별자치시</option>
                    <option value="경기도">경기도</option>
                    <option value="충청북도">충청북도</option>
                    <option value="충청남도">충청남도</option>
                    <option value="전라북도">전라북도</option>
                    <option value="전라남도">전라남도</option>
                    <option value="경상북도">경상북도</option>
                    <option value="경상남도">경상남도</option>
                    <option value="제주특별자치도">제주특별자치도</option>
                    <option value="강원특별자치도">강원특별자치도</option>
                  </select>
                  <svg
                    width="8"
                    height="7"
                    viewBox="0 0 8 7"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    style={{
                      position: "absolute",
                      right: "58px",
                      top: "50%",
                      transform: "translateY(-50%)",
                      pointerEvents: "none", // 클릭 방해 X
                    }}
                  >
                    <path
                      d="M7.10162 0.503603L0.900391 0.515625L4.01592 5.5096L7.10162 0.503603Z"
                      stroke="#A8A4A4"
                    />
                  </svg>
                </div>
                <div style={{position: "relative"}}>
                  <select name="" id=""
                  style={{width: "138.91px", border: "1px solid #D1D5DB", padding: "9px", borderRadius: "8px", paddingRight: "40px", color: "#999999",
                    appearance:"none",
                    WebkitAppearance:"none",
                    MozAppearance:"none",
                    fontSize: "11px"
                  }}>
                    <option value="시도 선택">시도 선택</option>
                  </select>
                  <svg
                    width="8"
                    height="7"
                    viewBox="0 0 8 7"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    style={{
                      position: "absolute",
                      right: "14px",
                      top: "50%",
                      transform: "translateY(-50%)",
                      pointerEvents: "none", // 클릭 방해 X
                    }}
                  >
                    <path
                      d="M7.10162 0.503603L0.900391 0.515625L4.01592 5.5096L7.10162 0.503603Z"
                      stroke="#A8A4A4"
                    />
                  </svg>
                </div>
              </div>
              <div style={{borderTop: "1px solid #E2E8F0", marginTop: "20px", marginBottom: "20px"}}></div>
              <div style={{border: "0px solid"}}>
                <div>
                  <div style={{border: "0px solid", display: "flex"}}>
                    <div style={{display: "flex", marginRight: "90px"}}>
                      <div style={{marginTop:"7px"}}>
                        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path fill-rule="evenodd" clip-rule="evenodd" d="M3 3V8.25H6.75V3H3ZM6.75093 8.24996C6.75096 8.24996 6.75095 8.24996 6.75091 8.24996L6.75093 8.24996ZM1.5 3C1.5 2.17157 2.17157 1.5 3 1.5H6.75C7.57843 1.5 8.25 2.17157 8.25 3V8.25C8.25 9.07843 7.57843 9.75 6.75 9.75H3C2.17157 9.75 1.5 9.07843 1.5 8.25V3Z" fill="#525252"/>
                          <path fill-rule="evenodd" clip-rule="evenodd" d="M11.25 3V5.25H15V3H11.25ZM11.2491 5.24997C11.249 5.24996 11.249 5.24996 11.2491 5.24996L11.2491 5.24997ZM9.75 3C9.75 2.17157 10.4216 1.5 11.25 1.5H15C15.8284 1.5 16.5 2.17157 16.5 3V5.25C16.5 6.07843 15.8284 6.75 15 6.75H11.25C10.4216 6.75 9.75 6.07843 9.75 5.25V3Z" fill="#525252"/>
                          <path fill-rule="evenodd" clip-rule="evenodd" d="M11.25 9.75V15H15V9.75H11.25ZM15.0009 15C15.001 15 15.001 15 15.0009 15L15.0009 15ZM9.75 9.75C9.75 8.92157 10.4216 8.25 11.25 8.25H15C15.8284 8.25 16.5 8.92157 16.5 9.75V15C16.5 15.8284 15.8284 16.5 15 16.5H11.25C10.4216 16.5 9.75 15.8284 9.75 15V9.75Z" fill="#525252"/>
                          <path fill-rule="evenodd" clip-rule="evenodd" d="M3 12.75V15H6.75V12.75H3ZM2.99909 15C2.99905 15 2.99904 15 2.99907 15L2.99909 15ZM1.5 12.75C1.5 11.9216 2.17157 11.25 3 11.25H6.75C7.57843 11.25 8.25 11.9216 8.25 12.75V15C8.25 15.8284 7.57843 16.5 6.75 16.5H3C2.17157 16.5 1.5 15.8284 1.5 15V12.75Z" fill="#525252"/>
                        </svg>
                      </div>
                      <div style={{marginTop: "5px", color: "#525252", fontWeight: "700", marginLeft: "7px", fontSize: "14px"}}>
                        검사 대상 분류
                      </div>
                    </div>
                    <div>
                      <div style={{display: "flex", marginBottom: "10px"}}>
                        <div style={{border: "1px solid #D1D5DB", borderRadius: "8px", padding:"8px 12px 8px 12px",fontSize: "10px", marginRight: "15px"}}>
                          <span style={{color: "#999999"}}><span style={{fontWeight: "700"}}>상수 관로</span>(WTL_SA001_LS)</span>
                        </div>
                        <div style={{border: "1px solid #D1D5DB", borderRadius: "8px", padding:"8px 12px 8px 12px",fontSize: "10px", marginRight: "15px"}}>
                          <span style={{color: "#999999"}}><span style={{fontWeight: "700"}}>상수 심도</span>(WTL_SA900_PS)</span>
                        </div>
                        <div style={{border: "1px solid #D1D5DB", borderRadius: "8px", padding:"8px 12px 8px 12px",fontSize: "10px", marginRight: "15px"}}>
                          <span style={{color: "#999999"}}><span style={{fontWeight: "700"}}>상수 맨홀</span>(WTL_SA900_PS)</span>
                        </div>
                      </div>
                      <div style={{display: "flex", marginBottom: "10px"}}>
                        <div style={{border: "1px solid #D1D5DB", borderRadius: "8px", padding:"8px 12px 8px 12px",fontSize: "10px", marginRight: "15px"}}>
                          <span style={{color: "#999999"}}><span style={{fontWeight: "700"}}>소방 시설</span>(WTL_SA001_LS)</span>
                        </div>
                        <div style={{border: "1px solid #D1D5DB", borderRadius: "8px", padding:"8px 12px 8px 12px",fontSize: "10px", marginRight: "15px"}}>
                          <span style={{color: "#999999"}}><span style={{fontWeight: "700"}}>유계량</span>(WTL_SA900_PS)</span>
                        </div>
                        <div style={{border: "1px solid #D1D5DB", borderRadius: "8px", padding:"8px 12px 8px 12px",fontSize: "10px", marginRight: "15px"}}>
                          <span style={{color: "#999999"}}><span style={{fontWeight: "700"}}>취수장</span>(WTL_SA900_PS)</span>
                        </div>
                      </div>
                      <div style={{display: "flex", marginBottom: "10px"}}>
                        <div style={{border: "1px solid #D1D5DB", borderRadius: "8px", padding:"8px 12px 8px 12px",fontSize: "10px", marginRight: "15px"}}>
                          <span style={{color: "#999999"}}><span style={{fontWeight: "700"}}>상수 관로</span>(WTL_SA001_LS)</span>
                        </div>
                        <div style={{border: "1px solid #D1D5DB", borderRadius: "8px", padding:"8px 12px 8px 12px",fontSize: "10px", marginRight: "15px"}}>
                          <span style={{color: "#999999"}}><span style={{fontWeight: "700"}}>상수 심도</span>(WTL_SA900_PS)</span>
                        </div>
                        <div style={{border: "1px solid #D1D5DB", borderRadius: "8px", padding:"8px 12px 8px 12px",fontSize: "10px", marginRight: "15px"}}>
                          <span style={{color: "#999999"}}><span style={{fontWeight: "700"}}>상수 맨홀</span>(WTL_SA900_PS)</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div style={{textAlign: "right", marginTop: "15px"}}>
                  <button style={{border: "1px solid #7EB6FF", background: "white", width: "140px", height: "36px", borderRadius: "8px", color: "#7EB6FF", cursor: "pointer"}}>
                    <div style={{display:"flex", justifyContent:"center"}}>
                      <div style={{marginRight: "10px"}}>
                        <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path fill-rule="evenodd" clip-rule="evenodd" d="M16.3931 4.18891C16.7023 4.49807 16.7023 4.99933 16.3931 5.30849L7.68479 14.0168C7.37563 14.326 6.87437 14.326 6.56521 14.0168L2.60687 10.0585C2.29771 9.74933 2.29771 9.24807 2.60687 8.9389C2.91604 8.62974 3.41729 8.62974 3.72646 8.9389L7.125 12.3374L15.2735 4.18891C15.5827 3.87974 16.084 3.87974 16.3931 4.18891Z" fill="#7EB6FF"/>
                        </svg>
                      </div>
                      <div>
                        품질 검수
                      </div>
                    </div>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div style={{width: "769px", border: "1px solid", height: "949px", borderRadius: "16px", border: "1px solid #E2E8F0", boxShadow: "10px 10px 10px 10px rgba(0, 0, 0, 0.08), -10px -10px 10px 10px rgba(0, 0, 0, 0.08)"}}></div>
    </div>
  );
}

export default App;
