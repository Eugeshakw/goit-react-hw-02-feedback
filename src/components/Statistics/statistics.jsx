import React from "react";
import style from './statistics.module.scss';
const Statistics = ({good, neutral, bad, total, countPercentage}) => {
    return (
        <div className={style.confeedback}>
            <p className={style.statfeedback}>Good: {good} </p>
            <p className={style.statfeedback}>Neutral: {neutral} </p>
            <p className={style.statfeedback}>Bad: {bad}</p>
            <p className={style.statfeedback}>Total:{total}</p>
            <p className={style.statfeedback}>Positive feedback: {countPercentage.toFixed(0)}%</p>
        </div>
    )
}

export default Statistics;