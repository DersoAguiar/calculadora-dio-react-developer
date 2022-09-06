import { DigitsContainer } from './styles'

const Digits = ({label, onClick}) => {
    return (
      <DigitsContainer tupe='button' onClick={onClick}>
        {label}
      </DigitsContainer>
    );
  }
  
  export default Digits;