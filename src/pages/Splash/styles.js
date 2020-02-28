import styled from 'styled-components/native';

import { getStatusBarHeight } from 'react-native-iphone-x-helper'
export const Container = styled.SafeAreaView`
background:black;
/*background: #0000e5; azul */
padding-top:${getStatusBarHeight()}px;
height: 100%;
justify-content: center;
`;

export const Logo = styled.Image``;
