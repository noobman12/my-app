import React from "react";
import logo from "./logo.svg";
import IconMore from "./Widget/IconMore";
import Loading from "./Widget/loading";
import "./App.css";
import IconButton from "./IconButton";
import SearchButton from "./SearchButton";
import Widget from "./Widget";
import InfoWidget from "./InfoWidget";
import styles from "./App.module.css";
import { HiOutlineMagnifyingGlass } from "react-icons/hi2";
import { FiCamera } from "react-icons/fi";
import { FaPhone } from "react-icons/fa";
import Avatar from "./Avatar";
function App() {
  return (
    <div className='App'>
      <div className={styles.container}>
        <div className={styles.flex}>
          <div>
            <IconButton
              text='Get started'
              iconRight='/images/Vector.png'
              width='17px'
              height='16px'
            ></IconButton>
            <IconButton
              text='Continue with Apple'
              iconLeft='/images/Vector (3).png'
              width='17px'
              height='16px'
              marginLeft='8px'
              marginRight='65px'
            ></IconButton>
            <IconButton
              text='Continue with Google'
              color='black'
              bgColor='white'
              iconLeft='/images/Vector (1).png'
              width='17px'
              height='16px'
              marginLeft='8px'
              marginRight='53px'
            ></IconButton>
            <IconButton
              text='Continue with Facebook'
              color='black'
              bgColor='white'
              iconLeft='/images/Vector (2).png'
              width='17px'
              height='16px'
              marginLeft='8px'
              marginRight='32px'
            ></IconButton>
          </div>
          <div>
            <SearchButton
              iconLeft={<HiOutlineMagnifyingGlass></HiOutlineMagnifyingGlass>}
              borderRadius='20px'
            ></SearchButton>
            <SearchButton
              iconLeft={<HiOutlineMagnifyingGlass></HiOutlineMagnifyingGlass>}
              text='Search'
              borderRadius='20px'
            ></SearchButton>
            <SearchButton
              iconLeft={<HiOutlineMagnifyingGlass></HiOutlineMagnifyingGlass>}
              text='Textfield'
              fontWeight='bold'
              color='black'
              borderRadius='20px'
            ></SearchButton>
            <SearchButton
              iconLeft={<HiOutlineMagnifyingGlass></HiOutlineMagnifyingGlass>}
              text='Search in the web'
              textWidth='119px'
              iconRight='/images/Vector1.svg'
              borderRadius='20px'
            ></SearchButton>
            <SearchButton
              iconLeft={<HiOutlineMagnifyingGlass></HiOutlineMagnifyingGlass>}
              text='Search crypto'
              textWidth='119px'
              iconRight='/images/Vector2.svg'
              borderRadius='12px'
            ></SearchButton>
            <SearchButton
              iconLeft={<HiOutlineMagnifyingGlass></HiOutlineMagnifyingGlass>}
              text='Phone number'
              textWidth='119px'
              iconRight='/images/Vector3.svg'
              iconBgColor='#D3FFD8'
              iconBorderRadius='12px'
              borderRadius='20px'
            ></SearchButton>
            <SearchButton
              iconLeft={<HiOutlineMagnifyingGlass></HiOutlineMagnifyingGlass>}
              text='Search in the web'
              textWidth='119px'
              iconRight='/images/Vector4.svg'
              iconBgColor='#FFE664'
              iconBorderRadius='100px'
              borderRadius='20px'
            ></SearchButton>
          </div>
          <div className='homework3'>
            <div className={styles.containerChild}>
              <Widget
                text="7'"
                textColor='#DB2D2D'
                fontSize='14px'
                fontWeight='700'
                iconMore={<IconMore></IconMore>}
              ></Widget>
              <InfoWidget
                textLeft='Spain'
                iconLeft='/images/emojione_flag-for-ceuta-and-melilla.svg'
                scores='0:0'
                textRight='France'
                iconRight='/images/emojione_flag-for-france.svg'
              ></InfoWidget>
            </div>
            <div className={styles.containerChild}>
              <Widget
                textColor='#000'
                fontSize='17px'
                fontWeight='600'
                iconLeft='/images/manchester-united-logo-svgrepo-com 1.svg'
                text='Manchester United'
                iconMore={<IconMore></IconMore>}
              ></Widget>
            </div>
            <div className={styles.containerChild}>
              <div className={`${styles.flex} ${styles.flexAlign}`}>
                <InfoWidget iconLeft='/images/avatar.png'></InfoWidget>
                <div className={styles.flexCol}>
                  <span
                    style={{
                      color: "black",
                      fontFamily: "Roboto",
                      fontSize: "18px",
                      fontStyle: "normal",
                      fontWeight: "500",
                      lineHeight: "23px" /* 127.778% */,
                      letterSpacing: "0.1px",
                    }}
                  >
                    Wade Warren
                  </span>
                  <div className={`${styles.spaceBetween}`}>
                    <div className={styles.flexAlign}>
                      <img src='/images/visa.svg' alt='visa.svg' />
                      <span>4293 3242 ••••</span>
                    </div>
                    <img src='/images/blind.svg' alt='blind.svg' />
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.containerChild}>
              <div className={styles.spaceBetween} style={{ width: "282px" }}>
                <div className={styles.flex}>
                  <span
                    style={{
                      display: "flex",
                      padding: "1px 11px",
                      alignItems: "center",
                      gap: "10px",
                      borderRadius: "50px",
                      background: " #E9FFEB",
                      color: "#000",
                      fontFamily: "Roboto",
                      fontSize: "11px",
                      fontStyle: "normal",
                      fontWeight: "500",
                      lineHeight: "23px",
                      letterSpacing: "0.5px",
                    }}
                  >
                    Highlight
                  </span>
                  <span
                    style={{
                      marginLeft: "6px",
                      display: "flex",
                      padding: "1px 11px",
                      alignItems: "center",
                      gap: "10px",
                      borderRadius: "50px",
                      background: " #FDE3FF",
                      color: "#000",
                      fontFamily: "Roboto",
                      fontSize: "11px",
                      fontStyle: "normal",
                      fontWeight: "500",
                      lineHeight: "23px",
                      letterSpacing: "0.5px",
                    }}
                  >
                    Feed
                  </span>
                </div>
                <Widget iconMore={<IconMore></IconMore>}></Widget>
              </div>
              <div className={styles.flexCol} style={{ gap: "10px" }}>
                <div className={styles.flexCol} style={{ paddingTop: "16px" }}>
                  <span
                    style={{
                      color: "#000",
                      fontFamily: "Roboto",
                      fontSize: "17px",
                      fontStyle: "normal",
                      fontWeight: "600",
                      lineHeight: "18px",
                    }}
                  >
                    Dashboard
                  </span>
                  <span
                    style={{
                      color: "#9AABB4",
                      fontFamily: "Roboto",
                      fontSize: "13px",
                      fontStyle: "normal",
                      fontWeight: "400",
                      lineHeight: "23px",
                    }}
                  >
                    Business management service
                  </span>
                </div>
                <div
                  className={styles.flex}
                  style={{
                    alignItems: "flex-end",
                    justifyContent: "space-between",
                  }}
                >
                  <Loading text='80%'></Loading>
                </div>
              </div>
            </div>
          </div>
          <div className='homework4'>
            <div className={styles.containerChild}>
              <div className={`${styles.flex} ${styles.flexAlign}`}>
                <InfoWidget iconLeft='/images/avatar1.png'></InfoWidget>
                <div className={styles.flexCol}>
                  <span
                    style={{
                      fontFamily: "Roboto",
                      fontSize: "18px",
                      fontStyle: "normal",
                      fontWeight: "700",
                      lineHeight: "normal",
                    }}
                  >
                    Yolanda
                  </span>
                  <div>
                    <span
                      style={{
                        fontFamily: "Roboto",
                        fontSize: "14px",
                        fontStyle: "normal",
                        fontWeight: "400",
                        lineHeight: "25.5px" /* 182.143% */,
                        letterSpacing: "0.5px",
                      }}
                    >
                      Web Development
                    </span>
                  </div>
                </div>

                <img
                  alt='camera'
                  src='/images/camera.png'
                  style={{ width: " 27px", height: "27px", color: "black " }}
                ></img>
              </div>
            </div>
            <div
              className={styles.containerChild}
              style={{ paddingLeft: "0", paddingTop: 0, paddingBottom: 0 }}
            >
              <div className={`${styles.flex} ${styles.flexAlign}`}>
                <img
                  src='/images/Avatar3.png'
                  alt=''
                  style={{
                    borderRadius: "20px 0 0 20px  ",
                    display: "flex",
                    width: "107px",
                  }}
                />

                <div
                  className={styles.flex}
                  style={{
                    width: "173px",
                    padding: "25px",
                    justifyContent: "space-between",
                    alignItems: "center",
                    flex: "1 0 0",
                    alignSelf: "stretch",
                  }}
                >
                  <div
                    className={styles.flexCol}
                    style={{
                      justifyContent: "space-between",
                      width: "173px",
                    }}
                  >
                    <span
                      style={{
                        fontFamily: "Roboto",
                        fontSize: "24px",
                        fontStyle: "normal",
                        fontWeight: "500",
                        lineHeight: "normal",
                        display: "flex",
                      }}
                    >
                      María
                    </span>
                  </div>
                  <img src='/images/clarity_phone-handset-solid.png' alt='' />
                </div>
              </div>
            </div>
            <div
              className={styles.containerChild}
              style={{
                borderRadius: "100px",
                backgroundColor: "#12C0E7",
                width: "282px",
              }}
            >
              <div className={`${styles.flex} ${styles.flexAlign}`}>
                <InfoWidget iconLeft='/images/avatar1.png'></InfoWidget>
                <div className={styles.flexCol}>
                  <span
                    style={{
                      fontFamily: "Roboto",
                      fontSize: "18px",
                      fontStyle: "normal",
                      fontWeight: "700",
                      color: "#FFF",
                      lineHeight: "23px" /* 127.778% */,
                      letterSpacing: "0.5px",
                    }}
                  >
                    Miriam Jimenez
                  </span>
                </div>
              </div>
            </div>
            <div
              className={styles.containerChild}
              style={{
                borderRadius: "100px",
                backgroundColor: "#740EF5",
                width: "282px +29px",
              }}
            >
              <div className={`${styles.flex} ${styles.flexAlign}`}>
                <div className={styles.multipleAvatar}></div>
                <Avatar iconLeft='/images/avatar5 (2).png'></Avatar>
                <Avatar iconLeft='/images/avatar5 (3).png'></Avatar>
                <Avatar iconLeft='/images/avatar5 (4).png'></Avatar>

                <div className={styles.flexCol}>
                  <span
                    style={{
                      fontFamily: "Roboto",
                      fontSize: "18px",
                      fontStyle: "normal",
                      fontWeight: "700",
                      color: "#FFF",
                      lineHeight: "23px" /* 127.778% */,
                      letterSpacing: "0.5px",
                    }}
                  >
                    Teams
                  </span>
                  <span
                    style={{
                      color: "#F5EEFF",
                      fontFamily: "Roboto",
                      fontSize: "12px",
                      fontStyle: "normal",
                      fontWeight: "400",
                      lineHeight: "23px" /* 191.667% */,
                      letterSpacing: "0.5px",
                    }}
                  >
                    Two currently
                  </span>
                </div>
              </div>
            </div>
            <div
              className={styles.containerChild}
              style={{
                borderRadius: "100px",
                backgroundColor: "#FFF614",
                width: "282px +29px",
              }}
            >
              <div className={`${styles.flex} ${styles.flexAlign}`}>
                <div className={styles.multipleAvatar}></div>
                <Avatar
                  backgroundColor='#FFF614'
                  borderColor='#FFF614'
                  iconLeft='/images/avatar5 (1).png'
                ></Avatar>
                <Avatar
                  backgroundColor='#FFF614'
                  borderColor='#FFF614'
                  iconLeft='/images/avatar5 (5).png'
                ></Avatar>
                <div className={styles.flexCol}>
                  <span
                    style={{
                      fontFamily: "Roboto",
                      fontSize: "23px",
                      fontStyle: "normal",
                      fontWeight: "700",
                      color: "#000",
                      lineHeight: "23px" /* 127.778% */,
                      letterSpacing: "0.5px",
                    }}
                  >
                    New Teams
                  </span>
                </div>
              </div>
            </div>
            <div className={styles.containerChild} style={{ height: "42px" }}>
              <div
                className={`${styles.flex} ${styles.flexAlign}`}
                style={{
                  height: "42px",
                }}
              >
                <div
                  style={{
                    backgroundColor: "#000000",
                    display: "flex",
                    width: "22px",
                    height: "22px",
                    padding: "10px",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: " 10px",
                    borderRadius: "100px",
                    background: "#000",
                    alignSelf: "center",
                  }}
                >
                  <InfoWidget
                    iconLeft='/images/Nike.png'
                    padding='0'
                    alignSelf='center'
                  ></InfoWidget>
                </div>
                <div className={styles.flexCol} style={{ gap: 0 }}>
                  <span
                    style={{
                      fontFamily: "Roboto",
                      fontSize: "18px",
                      fontStyle: "normal",
                      fontWeight: "700",
                      lineHeight: "normal",
                    }}
                  >
                    Nike store
                  </span>
                  <div>
                    <span
                      style={{
                        fontFamily: "Roboto",
                        fontSize: "14px",
                        fontStyle: "normal",
                        fontWeight: "400",
                        lineHeight: "25.5px" /* 182.143% */,
                        letterSpacing: "0.5px",
                      }}
                    >
                      6 months of promotions
                    </span>
                  </div>
                </div>
                <div
                  className={styles.flexCol}
                  style={{ gap: 0, flex: 0, alignItems: "flex-end" }}
                >
                  <span
                    style={{
                      color: "#000",
                      fontFamily: "Roboto",
                      fontSize: "15px",
                      fontStyle: "normal",
                      fontWeight: "600",
                      lineHeight: "20px" /* 133.333% */,
                      letterSpacing: "0.3px",
                    }}
                  >
                    -27.50
                  </span>
                  <span
                    style={{
                      color: "#76848B",
                      fontFamily: "Roboto",
                      fontSize: "9px",
                      fontStyle: "normal",
                      fontWeight: "400",
                      lineHeight: "20px" /* 133./* 222.222% */,
                      letterSpacing: "0.3px",
                    }}
                  >
                    11:00AM
                  </span>
                </div>
              </div>
            </div>
            <div className={styles.containerChild} style={{ height: "42px" }}>
              <div
                className={`${styles.flex} ${styles.flexAlign}`}
                style={{
                  height: "42px",
                }}
              >
                <div
                  style={{
                    backgroundColor: "#000000",
                    display: "flex",
                    width: "22px",
                    height: "22px",
                    padding: "10px",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: " 10px",
                    borderRadius: "100px",
                    background: "#000",
                    alignSelf: "center",
                  }}
                >
                  <InfoWidget
                    iconLeft='/images/Nike.png'
                    padding='0'
                    alignSelf='center'
                  ></InfoWidget>
                </div>
                <div
                  className={styles.flexCol}
                  style={{
                    gap: 0,
                    alignItems: "flex-start",
                    flex: "1 0 0",
                    color: "#000",
                    fontFamily: "Roboto",
                    fontSize: "13px",
                    fontStyle: "normal",
                    fontWeight: "700",
                    lineHeight: "20.5px" /* 157.692% */,
                    letterSpacing: "0.5px",
                  }}
                >
                  <span>All your notifications are well turned on</span>
                </div>
                <div
                  className={styles.flexCol}
                  style={{ gap: 0, flex: 0, alignItems: "flex-end" }}
                >
                  <span
                    style={{
                      color: "#000",
                      fontFamily: "Roboto",
                      fontSize: "15px",
                      fontStyle: "normal",
                      fontWeight: "600",
                      lineHeight: "20px" /* 133.333% */,
                      letterSpacing: "0.3px",
                      textAlign: "start",
                    }}
                  >
                    -27.50
                  </span>
                  <span
                    style={{
                      color: "#76848B",
                      fontFamily: "Roboto",
                      fontSize: "9px",
                      fontStyle: "normal",
                      fontWeight: "400",
                      lineHeight: "20px" /* 133./* 222.222% */,
                      letterSpacing: "0.3px",
                    }}
                  >
                    11:00AM
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
