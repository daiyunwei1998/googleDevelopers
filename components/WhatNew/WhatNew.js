import React from 'react'
import ButtonSquared from '../ButtonSquared/ButtonSquared'
import styles from "./WhatNew.module.css";

export default function WhatNew() {
  return (
    <section className = {styles.section_what_new}>
        <div className = {styles.container}>
            <img className = {styles.img_what_new} src = "/img/android-studio-jellyfish_480.png" />
            <div className = {styles.div_what_new}>
                <p>WHAT'S NEW IN ANDROID</p>
                <h1>Android Studio Jellyfish is now stable</h1>
                <p className = {styles.p}>Android Studio Jellyfish is here! Dive into cutting-edge AI features like Gemini in Android Studio and seamless services integrations like Android Device Streaming.</p>
                <ButtonSquared url = "https://developer.android.com/studio" text = "Download now"  />
            </div>
        </div>

    </section>
  )
}
