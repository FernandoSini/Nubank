import styled from 'styled-components/native';
import { Animated,StyleSheet } from 'react-native';

export const Container = styled(Animated.ScrollView)`
margin: 0 30px;
`;

export const Code = styled.View`
        background:#fff;
        overflow: hidden;
        padding: 10px;
        align-self: center;
        
`;


export const Nav = styled.View`
        margin-top: 30px;
        border-top-width: ${StyleSheet.hairlineWidth}px;
        border-top-color: #fff;
`;


export const NavItem = styled.View`
    flex-direction: row;
    align-items: center;
    padding: 12px 0;
    border-bottom-width: ${StyleSheet.hairlineWidth}px;
    border-bottom-color: #fff;
    
`;

export const NavText = styled.Text`
    font-size: 15px;
    color: #fff;
    margin-left: 20px;
    `;

export const SignOutButton = styled.TouchableOpacity`
    border-width: ${StyleSheet.hairlineWidth}px;
    border-color: #fff;
    border-radius: 4px;
    justify-content: center;
    align-items: center;
    padding: 12px;
    margin-top: 30px;
`;
export const SignOutButtonText = styled.Text`
    color: #fff;
    font-weight: bold;
    font-size: 13px;

`;