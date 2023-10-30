import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';
import { IoMoonOutline, IoTimeOutline } from 'react-icons/io5';
import { loadWeather } from '../../store/weather/weather-actions';
import { selectWeatherInfo } from '../../store/weather/weather-selection';

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
    const dispatch = useDispatch();
    const { status, error, deg, city } = useSelector(selectWeatherInfo);

    useEffect(()=>{
        
        dispatch(loadWeather()) 
   
      },[dispatch]);

    return (
       <Wrapper>
        <IoMoonOutline />
        {error && <h2>Can't fetch data</h2>}
        {status === 'loading' && '...'}
        {status === 'received' && (
            <>
            <Degrees $deg={deg.temp}>
                <DegValue>{Math.ceil(deg.temp)}</DegValue>
            <DegCelcius $deg={deg.temp}>°c</DegCelcius>
            </Degrees>
            {city}
            <IoTimeOutline />
            {`Wednesday, 10 january 2021`} 
            </>
            
        )}
       
       </Wrapper>
    )
}