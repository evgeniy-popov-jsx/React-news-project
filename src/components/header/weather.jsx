import styled from 'styled-components';
import { IoMoonOutline, IoTimeOutline } from 'react-icons/io5';

const Wrapper = styled.div`
    display: flex;
    gap: 0.5rem;
`;
const Degrees = styled.div`
     position: relative;
     width: 15px;
     margin-right: ${({$deg})=> ($deg <= -10 ? 0.8 : 0.5)}rem;
`;
const DegValue = styled.div`
    text-align: center;
`; 
const DegCelcius = styled.div`
    position: absolute;
    top: -7px;
    left: ${({$deg}) => ($deg <= -10 ? 18 : 12)}px;
    font-size: 14px;
`;

export const Weather = () => {

    const deg = -30;

    return (
       <Wrapper>
        <IoMoonOutline />
        <Degrees $deg={deg}>
            <DegValue>{deg}</DegValue>
            <DegCelcius $deg={deg}>°c</DegCelcius>
        </Degrees>
        {`New York`}
        <IoTimeOutline />
        {`Wednesday, 10 january 2021`}
       </Wrapper>
    )
}