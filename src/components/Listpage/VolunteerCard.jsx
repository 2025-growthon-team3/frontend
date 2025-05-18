import {VContainer, VImg, VInfo} from "./VolunteerCard.styles.js";

const VolunteerCard=({id,name,profileImg})=>{
    return(
        <VContainer>
            <VImg src={profileImg}/>
            <VInfo>{id}: {name} </VInfo>
        </VContainer>
    )
}

export default VolunteerCard;