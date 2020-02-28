import styled from 'styled-components/native';
import { getStatusBarHeight } from 'react-native-iphone-x-helper'
import { Animated } from 'react-native'

export const Container = styled.SafeAreaView`
  background:black;
  /*background: #0000e5; azul */
  padding-top:${getStatusBarHeight()}px;
  height: 100%;
  justify-content: center;
`;
//no z-index quando o conteúdo for arrastado vai passar por cima dos outros componentes
export const Content = styled.View`
  max-height: 400px;
  z-index: 5; 
  margin-bottom: 50px;
`;

//apartir do position está fazendo o menuzin ficar por baixo do card 
export const Card = styled(Animated.View)`
    background: #fff;
    border-radius: 4px;
    margin: 0 20px;
    height: 100%;
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
`;

export const CardHeader = styled.View`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 30px;
`;


export const CardContent = styled.View`
    flex: 1;
    padding: 0 30px;
    justify-content: center;
    margin-bottom:50px;
    

`;


export const Title = styled.Text`
    font-size: 13px;
    color:#999
`;


export const Description = styled.Text`
      font-size:32px;
      margin-top:3px;
      color: #333;
`;

export const CardFooter = styled.View`
      padding: 30px;
      background: #eee;
      border-radius: 4px;

`;


export const Annotation = styled.Text`
      font-size: 12px;
      color:#333;
`;