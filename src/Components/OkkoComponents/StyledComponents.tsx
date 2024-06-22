import styled from "styled-components";

export const RightSectionContainer = styled.div<{FOTO1?: boolean}>`
width: 49%;
height: 100%;
position: relative;
background-repeat: no-repeat;
background-size: 100% 100%;
background-image: url(../../Assets/Images/OkkoCaseImages/EyeTablet.webp);
@media screen and (max-width: 1024px) {
}
@media screen and (max-width: 768px) {
    background-image: url(../../Assets/Images/OkkoCaseImages/EyeMobile.webp);
}
border: ${(props) => (props?.FOTO1 ? "1px solid red" : "1px solid #FFFFFF")};
}
`;
