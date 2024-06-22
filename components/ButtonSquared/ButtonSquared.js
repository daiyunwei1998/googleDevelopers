import React from 'react';
import styles from './ButtonSquared.module.css';

export default function ButtonSquared({url, text}) {
  return (
    <div>
      <a href = {url}>
      <button className = {styles.button}>{text}</button>
      </a>
    </div>
  )
}
