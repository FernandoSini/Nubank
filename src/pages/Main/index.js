import React from 'react';
import Header from '~/components/Header'
import {
  Container, Content, Card, CardHeader, CardContent, CardFooter, Title, Annotation, Description
} from './styles';
import Tabs from '~/components/Tabs'
import Icon from 'react-native-vector-icons/MaterialIcons'
import Menu from '~/components/Menu'

import { Animated } from 'react-native'
import { PanGestureHandler, State } from 'react-native-gesture-handler' // pan-gesture-handler detecta a ação de arrastar
import { SafeAreaView } from 'react-navigation';



export default function Main() {
  let offset = 0; // guardar a informação de quantos pixels o usuário arrastou para baixo ou paracima

  const translateY = new Animated.Value(0); // variavel para controlar e atualizar  muitas vezes o css e manter perfomance lisa
  const animatedEvent = Animated.event( // animated event vai captar a posição que o usuário está arrastando o card e vai passar para translateY
    [
      {
        nativeEvent: { // native event contem as propriedades do translateY e translateX
          translationY: translateY, // toda vez que  acontecer um evento de arrastar o valor de translation y vai ser passado para translate x
        },
      },
    ],
    { useNativeDriver: true }, // vai usar o driver nativo de animações do reactive native

  );
  //função para captar ação de scroll e dar efeitos
  function onHandlerStateChanged(event) {
    //pegando o estado anterior do evento e comparar com active, estou vendo se o estado anterior do evento que disparou era ativo, quer dizer que acabou a animação, não esta mais ativa
    if (event.nativeEvent.oldState === State.ACTIVE) {
      let opened = false;
      const { translationY } = event.nativeEvent;
      offset += translationY; //atualizando o offeset com o valor atual dos pixels

      if (translationY >= 100) { // pegando o total de pixels que o usuario arrastou
        opened = true;
      } else { //vai resetar 
        translateY.setValue(offset)
        translateY.setOffset(0);
        offset = 0;
      }

      //fazendo a animação automatica após os 100 pixels
      Animated.timing(translateY, {
        toValue: opened ? 430 : 0, // se estiver aberta vai pra 380 se nao volta pro 0 que é o ponto inicial
        duration: 200,
        useNativeDriver: true,
      }).start(() => {
        offset = opened ? 430 : 0;
        translateY.setOffset(offset);
        translateY.setValue(0);
      });

    }
  }
  //o transform é usado para transformar um elemento e translatey vai mover no eixo y
  //interpolate é o caso que vai setar os limites de arrastar o card
  //no Input range eu seto quais são os valores limites que o arrasto(translateY) pode chegar, ou seja vai passar os valores para o translateY
  //o extrapolate vai  controlar se fugir dos valores de x e y, e o clamp não deixa acontecer
  return (
    <SafeAreaView>
      <Container>
        <Header />
        <Content>
          <Menu translateY={translateY} />

          <PanGestureHandler
            onGestureEvent={animatedEvent}
            onHandlerStateChange={onHandlerStateChanged}>
            <Card style={{
              transform: [{
                translateY: translateY.interpolate({
                  inputRange: [-200, 0, 430],
                  outputRange: [-50, 0, 430],
                  extrapolate: 'clamp',
                }),
              }],
            }}>
              <CardHeader>
                <Icon name="attach-money" size={28} color="#666" />
                <Icon name="visibility-off" size={28} color="#666" />
              </CardHeader>
              <CardContent>
                <Title>Saldo Disponível</Title>
                <Description>R$195.000,000</Description>
              </CardContent>
              <CardFooter>
                <Annotation>Transferência de R$ 20,00 recebida por Fernando as 20:00</Annotation>
              </CardFooter>
            </Card>
          </PanGestureHandler>
        </Content>
        <Tabs translateY={translateY} />
      </Container>
    </SafeAreaView>
  )
}
