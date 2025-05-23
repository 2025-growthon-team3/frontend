import React from "react";
import {
    VContainer,
    VImg,
    VInfo,
    VName,
    VSubInfo,
} from "./VolunteerCardBase.styles.js";

const VolunteerCardBase = ({
                               name,
                               age,
                               gender,
                               helpRequest,
                               onClick,
                               isExpanded,
                               bgColor = "#ffffff",
                               children
                           }) => {
    return (
        <VContainer onClick={onClick} $expanded={isExpanded} $bgColor={bgColor}>
            <VImg src="/img/val.jpg" />
            <VInfo>
                {/* 이름이 있을 때만 표시 */}
                {name && <VName>{name}</VName>}
                {/* 성별 또는 나이가 있을 때만 표시 */}
                {(gender || age) && (
                    <VSubInfo>
                        {/* 성별 표시 */}
                        {gender && (gender === "female" ? "여성" : "남성")}
                        {/* 성별과 나이가 모두 있을 때 구분자 */}
                        {gender && age && " / "}
                        {/* 나이 표시 */}
                        {age && `${age}세`}
                    </VSubInfo>
                )}
                {/* helpRequest가 있을 때만 표시 */}
                {helpRequest && <VSubInfo>{helpRequest}</VSubInfo>}
                {/* children이 있을 때만 표시 */}
                {children}
            </VInfo>
        </VContainer>
    );
};

export default VolunteerCardBase;
