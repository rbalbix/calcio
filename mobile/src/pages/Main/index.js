import React from 'react';
import { TouchableOpacity } from 'react-native';

import { useNavigation } from '@react-navigation/native';

import {
  Container,
  Category,
  CategoryTitle,
  HeaderTable,
  HeaderTableText,
  TeamView,
  Team,
  PositionText,
  TeamShield,
  TeamText,
  Score,
  ScoreText,
} from './styles';

import sampImg from '../../assets/sampdoria.png';
import juvImg from '../../assets/juventus.png';
import interImg from '../../assets/inter-de-milao.png';
import milanImg from '../../assets/milan.png';

export default function Main() {
  const navigation = useNavigation();

  function navigateToCategory(category) {
    navigation.navigate('Category', { category });
  }

  // RETIRAR ISSO. SO PARA TESTE
  const category = 'categoria';

  return (
    <Container>
      <Category>
        <TouchableOpacity
          onPress={() => {
            navigateToCategory({ category });
          }}
        >
          <CategoryTitle>TORNEIO A</CategoryTitle>
        </TouchableOpacity>

        <HeaderTable>
          <HeaderTableText>P</HeaderTableText>
          <HeaderTableText>V</HeaderTableText>
          <HeaderTableText>SG</HeaderTableText>
        </HeaderTable>

        <TeamView>
          <Team>
            <PositionText>1</PositionText>
            <TeamShield source={sampImg} />
            <TeamText>SAMPDORIA</TeamText>
          </Team>
          <Score>
            <ScoreText>30</ScoreText>
            <ScoreText>10</ScoreText>
            <ScoreText>20</ScoreText>
          </Score>
        </TeamView>
        <TeamView>
          <Team>
            <PositionText>2</PositionText>
            <TeamShield source={juvImg} />
            <TeamText>JUVENTUS</TeamText>
          </Team>
          <Score>
            <ScoreText>30</ScoreText>
            <ScoreText>10</ScoreText>
            <ScoreText>20</ScoreText>
          </Score>
        </TeamView>
        <TeamView>
          <Team>
            <PositionText>3</PositionText>
            <TeamShield source={interImg} />
            <TeamText>INTERNAZIONALE</TeamText>
          </Team>
          <Score>
            <ScoreText>30</ScoreText>
            <ScoreText>10</ScoreText>
            <ScoreText>20</ScoreText>
          </Score>
        </TeamView>
        <TeamView>
          <Team>
            <PositionText>4</PositionText>
            <TeamShield source={milanImg} />
            <TeamText>MILAN</TeamText>
          </Team>
          <Score>
            <ScoreText>30</ScoreText>
            <ScoreText>10</ScoreText>
            <ScoreText>20</ScoreText>
          </Score>
        </TeamView>
      </Category>

      <Category>
        <TouchableOpacity
          onPress={() => {
            navigateToCategory({ category });
          }}
        >
          <CategoryTitle>TORNEIO B</CategoryTitle>
        </TouchableOpacity>

        <HeaderTable>
          <HeaderTableText>P</HeaderTableText>
          <HeaderTableText>V</HeaderTableText>
          <HeaderTableText>SG</HeaderTableText>
        </HeaderTable>

        <TeamView>
          <Team>
            <PositionText>1</PositionText>
            <TeamShield source={sampImg} />
            <TeamText>SAMPDORIA</TeamText>
          </Team>
          <Score>
            <ScoreText>30</ScoreText>
            <ScoreText>10</ScoreText>
            <ScoreText>20</ScoreText>
          </Score>
        </TeamView>
        <TeamView>
          <Team>
            <PositionText>2</PositionText>
            <TeamShield source={juvImg} />
            <TeamText>JUVENTUS</TeamText>
          </Team>
          <Score>
            <ScoreText>30</ScoreText>
            <ScoreText>10</ScoreText>
            <ScoreText>20</ScoreText>
          </Score>
        </TeamView>
        <TeamView>
          <Team>
            <PositionText>3</PositionText>
            <TeamShield source={interImg} />
            <TeamText>INTERNAZIONALE</TeamText>
          </Team>
          <Score>
            <ScoreText>30</ScoreText>
            <ScoreText>10</ScoreText>
            <ScoreText>20</ScoreText>
          </Score>
        </TeamView>
        <TeamView>
          <Team>
            <PositionText>4</PositionText>
            <TeamShield source={milanImg} />
            <TeamText>MILAN</TeamText>
          </Team>
          <Score>
            <ScoreText>30</ScoreText>
            <ScoreText>10</ScoreText>
            <ScoreText>20</ScoreText>
          </Score>
        </TeamView>
      </Category>
    </Container>
  );
}
