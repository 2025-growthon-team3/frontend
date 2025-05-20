import VolunteerCardBase from "../VolunteerCardBase/VolunteerCardBase.jsx";
import {
    Vtitle,
    VDetail
} from "../VolunteerCardBase/VolunteerCardBase.styles.js";
import { SlideDetailWrapper } from "./MatchedVolunteerCard.styles.js";
import { useTheme } from "styled-components";
import {useState, useEffect} from "react";

const MatchedVolunteerCard = ({
                                  name, age, gender, helpRequest, helpDetail,
                                  isExpanded, onClick, extraCardData = null
                              }) => {
    const theme = useTheme();
    const [showDetail, setShowDetail] = useState(false);

    useEffect(() => {
        if (isExpanded) {
            setShowDetail(true);
        } else {
            // 사라지는 애니메이션을 위해 약간 delay 후 제거
            const timer = setTimeout(() => setShowDetail(false), 300);
            return () => clearTimeout(timer);
        }
    }, [isExpanded]);

    return (
        <>
            <VolunteerCardBase
                name={name}
                age={age}
                gender={gender}
                helpRequest={helpRequest}
                onClick={onClick}
                isExpanded={false}
                bgColor={isExpanded ? theme.colors.mint : "#ffffff"}
            />

            {showDetail && (
                <>
                    <SlideDetailWrapper $show={isExpanded}>
                        <Vtitle>{helpRequest}</Vtitle>
                        <VDetail>{helpDetail}</VDetail>
                    </SlideDetailWrapper>

                    {extraCardData && (
                        <VolunteerCardBase
                            name={extraCardData.name}
                            age={extraCardData.age}
                            gender={extraCardData.gender}
                            isExpanded={false}
                            bgColor={extraCardData.bgColor || "#f0f0f0"}
                        >
                            {extraCardData.customText && <VDetail>{extraCardData.customText}</VDetail>}
                        </VolunteerCardBase>
                    )}
                </>
            )}
        </>
    );
};

export default MatchedVolunteerCard;