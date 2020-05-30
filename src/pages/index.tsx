import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import styles from "./index.module.less"
import "./index.css"

const IndexPage = () => (
  <div className={styles.layout}>
    <SEO title="Home" />
    <Image style={{ height: "100px", width: "100px", borderRadius: "50%" }} />
    <h1>A Front-end Development Engineer</h1>
    <div className={styles.container}>
      <Link to="/blog" className={styles.textDecorationNone}>
        <div className={styles.card}>
          <div className={styles.imgBx}>
            <img
              src="https://image.flaticon.com/icons/svg/2092/2092063.svg"
              alt=""
            />
          </div>
          <div className={styles.contentBx}>
            <h2>Blog</h2>
            <p>暂时没有太多时间</p>
          </div>
        </div>
      </Link>
      <div
        className={styles.card}
        onClick={() => {
          window.open("https://fastrtc.wuwei.tech/")
        }}
      >
        <div className={styles.imgBx}>
          <img
            src="https://image.flaticon.com/icons/svg/1197/1197460.svg"
            alt=""
          />
        </div>
        <div className={styles.contentBx}>
          <h2>FastRTC</h2>
          <p>基于WebRTC的视频通讯平台</p>
        </div>
      </div>
      <div className={styles.card}>
        <div className={styles.imgBx}>
          <img
            src="https://image.flaticon.com/icons/svg/1067/1067256.svg"
            alt=""
          />
        </div>
        <div className={styles.contentBx}>
          <h2>Launch</h2>
          <p>Just Test.</p>
        </div>
      </div>
    </div>
  </div>
)

export default IndexPage
