import React from 'react';
import QRCode from 'react-native-qrcode'
import {Alert, TouchableOpacity} from 'react-native'
import { Container, Code, Nav, NavItem, NavText, SignOutButton, SignOutButtonText } from './styles';
import Icon from 'react-native-vector-icons/MaterialIcons'

export default function Menu({ translateY }) {
    return (
        <Container style={{
            opacity: translateY.interpolate({
                inputRange: [0, 150],
                outputRange: [0, 1],
            })
        }}>
            <Code>
                <QRCode
                    value="https://github.com/fernandosini"
                    bgColor="#fff"
                    fgColor="#0000"
                />
            </Code>
            <Nav>
                <NavItem>
                    <Icon name="help-outline" size={20} color="#fff" />
                    <TouchableOpacity onPress={() => {Alert.alert('Me Ajuda', 'Irei para a tela de Ajuda')}}>
                    <NavText>Me Ajuda</NavText>
                    </TouchableOpacity>
                </NavItem>
                <NavItem>
                    <Icon name="person-outline" size={20} color="#fff" />
                    <TouchableOpacity onPress={() => {Alert.alert('Perfil', 'Irei para Tela de Perfil')}}>
                    <NavText>Perfil</NavText>
                    </TouchableOpacity>
                </NavItem>
                <NavItem>
                    <Icon name="credit-card" size={20} color="#fff" />
                    <TouchableOpacity onPress={() => {Alert.alert('Configurando o cartão', 'Irei para a tela de configuração do Cartão')}}>
                    <NavText>Configurar cartão</NavText>
                    </TouchableOpacity>
                </NavItem>
                <NavItem>
                    <Icon name="smartphone" size={20} color="#fff" />
                    <TouchableOpacity onPress={() => {Alert.alert('Configurações do App', 'Irei para a tela de Configurações do App')}}>
                    <NavText>Configurações do App</NavText>
                    </TouchableOpacity>
                </NavItem>
            </Nav>

            <SignOutButton onPress={() => {Alert.alert('Não está funcionando ainda!', 'Vou Sair') }}>
                <SignOutButtonText> Sair</SignOutButtonText>
            </SignOutButton>
        </Container>
    )

};
