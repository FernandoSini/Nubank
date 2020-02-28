import React from 'react'

import { Container, TabsContainer, TabItem, TabText } from './styles';
import Icon from 'react-native-vector-icons/MaterialIcons'
import { TouchableOpacity, Linking } from 'react-native';

export default function Tabs({ translateY }) {
    //mexendo no transform para abaixar os tabs ao arrastar
    return (
        <Container style={{
            transform: [{
                translateY: translateY.interpolate({
                    inputRange: [0, 380],
                    outputRange: [0, 30],
                    extrapolate: 'clamp',
                }),
            }],
            opacity: translateY.interpolate({
                inputRange: [0, 380],
                outputRange: [1, 0.3],
                extrapolate: 'clamp',
            })
        }}>
            <TabsContainer>
                <TouchableOpacity onPress={() => Linking.openURL('https://github.com/fernandosini')}>
                    <TabItem>
                        <Icon name="person-add" size={24} color="#fff" />
                        <TabText>Indicar Amigos</TabText>
                    </TabItem>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => Linking.openURL('https://github.com/fernandosini')}>
                    <TabItem>
                        <Icon name="chat-bubble-outline" size={24} color="#fff" />
                        <TabText>Cobrar </TabText>
                    </TabItem>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => Linking.openURL('https://github.com/fernandosini')}>
                    <TabItem>
                        <Icon name="arrow-downward" size={24} color="#fff" />
                        <TabText>Depositar</TabText>
                    </TabItem>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => Linking.openURL('https://github.com/fernandosini')}>
                    <TabItem>
                        <Icon name="arrow-upward" size={24} color="#fff" />
                        <TabText>Transferir</TabText>
                    </TabItem>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => Linking.openURL('https://github.com/fernandosini')}>
                    <TabItem>
                        <Icon name="lock" size={24} color="#fff" />
                        <TabText>Bloquear Cartão</TabText>
                    </TabItem>
                </TouchableOpacity>
            </TabsContainer>
        </Container>
    )

};
