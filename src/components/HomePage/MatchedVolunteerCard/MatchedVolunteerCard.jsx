import VolunteerCardBase from "../VolunteerCardBase/VolunteerCardBase.jsx";
import {
    Vtitle,
    VDetail,
    VInfoBadge,
} from "../VolunteerCardBase/VolunteerCardBase.styles.js";
import { SlideDetailWrapper,ConnectedCardWrapper } from "./MatchedVolunteerCard.styles.js";
import { useTheme } from "styled-components";
import { useState, useEffect } from "react";

const MatchedVolunteerCard = ({
                                  name, age, gender, helpRequest, helpDetail,
                                  isExpanded, onClick
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
            }, 300); // SlideDetailWrapper와 맞춤
            return () => clearTimeout(timer);
        }
    }, [isExpanded]);

    useEffect(() => {
        if (isExpanded) {
            setShowDetail(true);
        } else {
            const timer = setTimeout(() => setShowDetail(false), 300);
            return () => clearTimeout(timer);
        }
    }, [isExpanded]);

    return (
        <>
            <ConnectedCardWrapper>
            {/* 메인 카드 */}
            <VolunteerCardBase
                name={name}
                age={age}
                gender={gender}
                helpRequest={helpRequest}
                onClick={onClick}
                isExpanded={false}
                bgColor={isExpanded ? theme.colors.mint : "#ffffff"}
            >
                {/* 헬퍼 이름 뱃지 (확장 중일 땐 숨김) */}
                {!isExpanded && <VInfoBadge>김민서</VInfoBadge>}
            </VolunteerCardBase>

            {showDetail && (
                <>
                    {/* 흰색 상세 설명 박스 */}
                    <SlideDetailWrapper $show={isExpanded}>
                        <Vtitle>{helpRequest}</Vtitle>
                        <VDetail>{helpDetail}</VDetail>
                    </SlideDetailWrapper>

                    {/* 오렌지색 매칭 봉사자 카드 */}
                    {showHelperCard && (
                        <VolunteerCardBase
                            name="김민서"
                            age="23"
                            gender="female"
                            bgColor={theme.colors.orange}
                            isExpanded={false}
                        >
                            <VDetail>봉사 경험 2회</VDetail>
                        </VolunteerCardBase>
                    )}

                </>
            )}
            </ConnectedCardWrapper>
        </>
    );
};

export default MatchedVolunteerCard;
