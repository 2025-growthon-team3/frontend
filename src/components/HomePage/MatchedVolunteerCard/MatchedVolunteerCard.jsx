import React, { useState, useEffect } from "react";
import { useTheme } from "styled-components";
import VolunteerCardBase from "../VolunteerCardBase/VolunteerCardBase.jsx";
import {
    Vtitle,
    VDetail,
    VInfoBadge,
} from "../VolunteerCardBase/VolunteerCardBase.styles.js";
import {
    SlideDetailWrapper,
    ConnectedCardWrapper,
} from "./MatchedVolunteerCard.styles.js";

const MatchedVolunteerCard = ({
                                  historyId,
                                  helpeeName,
                                  helpeeGender,
                                  helpeeAge,
                                  helpDetail,
                                  helpTime,
                                  isExpanded,
                                  onClick,
                              }) => {
    const theme = useTheme();
    const [showDetail, setShowDetail] = useState(false);
    const [showHelperCard, setShowHelperCard] = useState(false);

    useEffect(() => {
        if (isExpanded) {
            setShowDetail(true);
            setShowHelperCard(true);
        } else {
            const timer = setTimeout(() => {
                setShowDetail(false);
                setShowHelperCard(false);
            }, 300);
            return () => clearTimeout(timer);
        }
    }, [isExpanded]);

    return (
        <ConnectedCardWrapper>
            {/* 민트색 헬피 카드 */}
            <VolunteerCardBase
                name={helpeeName}
                age={helpeeAge}
                gender={helpeeGender}
                helpRequest={helpDetail}
                onClick={onClick}
                isExpanded={false}
                bgColor={isExpanded ? theme.colors.mint : "#ffffff"}
            >
                {!isExpanded && <VInfoBadge>봉사자 Id:{historyId}</VInfoBadge>}
            </VolunteerCardBase>

            {showDetail && (
                <>
                    {/* 흰색 상세 설명 박스 */}
                    <SlideDetailWrapper $show={isExpanded}>
                        <Vtitle>봉사 내용</Vtitle>
                        <VDetail>{helpDetail}</VDetail>
                    </SlideDetailWrapper>

                    {/* 주황색 봉사 내역 카드 (historyId와 helpTime 표시) */}
                    {showHelperCard && (
                        <VolunteerCardBase
                            name={historyId}               // history id 표시
                            age={null}
                            gender={null}
                            helpRequest={null}
                            isExpanded={false}
                            bgColor={theme.colors.orange}
                        >
                            <VDetail>봉사 일정: {helpTime}</VDetail>   {/* helpTime 표시 */}
                        </VolunteerCardBase>
                    )}
                </>
            )}
        </ConnectedCardWrapper>
    );
};

export default MatchedVolunteerCard;