import React from 'react';
import { TouchableOpacity } from 'react-native';

import { MaterialIcons } from '@expo/vector-icons';

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
  RoundView,
  RoundText,
  DateView,
  DateText,
  MatchView,
  MatchTeamText,
  MatchTeamShield,
} from './styles';

import sampImg from '../../assets/sampdoria.png';
import juvImg from '../../assets/juventus.png';
import interImg from '../../assets/inter-de-milao.png';
import milanImg from '../../assets/milan.png';

export default function Main() {
  return (
    <Container>
      <Category>
        <CategoryTitle>TORNEIO A - TABELA</CategoryTitle>

        <HeaderTable>
          <HeaderTableText>P</HeaderTableText>
          <HeaderTableText>J</HeaderTableText>
          <HeaderTableText>V</HeaderTableText>
          <HeaderTableText>E</HeaderTableText>
          <HeaderTableText>D</HeaderTableText>
          <HeaderTableText>SG</HeaderTableText>
        </HeaderTable>

        <TeamView>
          <Team>
            <PositionText>1</PositionText>
            <TeamShield source={sampImg} />
            <MatchTeamText>SAM</MatchTeamText>
          </Team>
          <Score>
            <ScoreText>1</ScoreText>
            <ScoreText>2</ScoreText>
            <ScoreText>3</ScoreText>
            <ScoreText>4</ScoreText>
            <ScoreText>5</ScoreText>
            <ScoreText>6</ScoreText>
          </Score>
        </TeamView>
        <TeamView>
          <Team>
            <PositionText>2</PositionText>
            <TeamShield source={juvImg} />
            <MatchTeamText>JUV</MatchTeamText>
          </Team>
          <Score>
            <ScoreText>7</ScoreText>
            <ScoreText>8</ScoreText>
            <ScoreText>9</ScoreText>
            <ScoreText>10</ScoreText>
            <ScoreText>11</ScoreText>
            <ScoreText>12</ScoreText>
          </Score>
        </TeamView>
        <TeamView>
          <Team>
            <PositionText>3</PositionText>
            <TeamShield source={interImg} />
            <MatchTeamText>INT</MatchTeamText>
          </Team>
          <Score>
            <ScoreText>13</ScoreText>
            <ScoreText>14</ScoreText>
            <ScoreText>15</ScoreText>
            <ScoreText>16</ScoreText>
            <ScoreText>17</ScoreText>
            <ScoreText>18</ScoreText>
          </Score>
        </TeamView>
        <TeamView>
          <Team>
            <PositionText>4</PositionText>
            <TeamShield source={milanImg} />
            <MatchTeamText>MIL</MatchTeamText>
          </Team>
          <Score>
            <ScoreText>19</ScoreText>
            <ScoreText>20</ScoreText>
            <ScoreText>21</ScoreText>
            <ScoreText>22</ScoreText>
            <ScoreText>23</ScoreText>
            <ScoreText>24</ScoreText>
          </Score>
        </TeamView>
        <TeamView>
          <Team>
            <PositionText>5</PositionText>
            <TeamShield source={sampImg} />
            <MatchTeamText>SAM</MatchTeamText>
          </Team>
          <Score>
            <ScoreText>25</ScoreText>
            <ScoreText>26</ScoreText>
            <ScoreText>27</ScoreText>
            <ScoreText>28</ScoreText>
            <ScoreText>29</ScoreText>
            <ScoreText>30</ScoreText>
          </Score>
        </TeamView>
        <TeamView>
          <Team>
            <PositionText>6</PositionText>
            <TeamShield source={juvImg} />
            <MatchTeamText>JUV</MatchTeamText>
          </Team>
          <Score>
            <ScoreText>30</ScoreText>
            <ScoreText>10</ScoreText>
            <ScoreText>20</ScoreText>
          </Score>
        </TeamView>
        <TeamView>
          <Team>
            <PositionText>7</PositionText>
            <TeamShield source={interImg} />
            <MatchTeamText>INT</MatchTeamText>
          </Team>
          <Score>
            <ScoreText>30</ScoreText>
            <ScoreText>10</ScoreText>
            <ScoreText>20</ScoreText>
          </Score>
        </TeamView>
        <TeamView>
          <Team>
            <PositionText>8</PositionText>
            <TeamShield source={milanImg} />
            <MatchTeamText>MIL</MatchTeamText>
          </Team>
          <Score>
            <ScoreText>30</ScoreText>
            <ScoreText>10</ScoreText>
            <ScoreText>20</ScoreText>
          </Score>
        </TeamView>
        <TeamView>
          <Team>
            <PositionText>9</PositionText>
            <TeamShield source={interImg} />
            <MatchTeamText>INT</MatchTeamText>
          </Team>
          <Score>
            <ScoreText>30</ScoreText>
            <ScoreText>10</ScoreText>
            <ScoreText>20</ScoreText>
          </Score>
        </TeamView>
        <TeamView>
          <Team>
            <PositionText>10</PositionText>
            <TeamShield source={milanImg} />
            <MatchTeamText>MIL</MatchTeamText>
          </Team>
          <Score>
            <ScoreText>30</ScoreText>
            <ScoreText>10</ScoreText>
            <ScoreText>20</ScoreText>
          </Score>
        </TeamView>
      </Category>

      <Category>
        <CategoryTitle>JOGOS</CategoryTitle>
        <RoundView>
          <TouchableOpacity onPress={() => {}}>
            <MaterialIcons name='navigate-before' size={24} color='#1e7a0e' />
          </TouchableOpacity>
          <RoundText>1ª RODADA</RoundText>
          <TouchableOpacity onPress={() => {}}>
            <MaterialIcons name='navigate-next' size={24} color='#1e7a0e' />
          </TouchableOpacity>
        </RoundView>

        <DateView>
          <DateText>20/10</DateText>
        </DateView>
        <MatchView>
          <MatchTeamText>SAM</MatchTeamText>
          <MatchTeamShield source={sampImg}></MatchTeamShield>
          <MatchTeamText>2</MatchTeamText>
          <MatchTeamText>X</MatchTeamText>
          <MatchTeamText>0</MatchTeamText>
          <MatchTeamShield source={milanImg}></MatchTeamShield>
          <MatchTeamText>MIL</MatchTeamText>
        </MatchView>

        <DateView>
          <DateText>20/10</DateText>
        </DateView>
        <MatchView>
          <MatchTeamText>SAM</MatchTeamText>
          <MatchTeamShield source={sampImg}></MatchTeamShield>
          <MatchTeamText>2</MatchTeamText>
          <MatchTeamText>X</MatchTeamText>
          <MatchTeamText>0</MatchTeamText>
          <MatchTeamShield source={milanImg}></MatchTeamShield>
          <MatchTeamText>MIL</MatchTeamText>
        </MatchView>

        <DateView>
          <DateText>20/10</DateText>
        </DateView>
        <MatchView>
          <MatchTeamText>SAM</MatchTeamText>
          <MatchTeamShield source={sampImg}></MatchTeamShield>
          <MatchTeamText>2</MatchTeamText>
          <MatchTeamText>X</MatchTeamText>
          <MatchTeamText>0</MatchTeamText>
          <MatchTeamShield source={milanImg}></MatchTeamShield>
          <MatchTeamText>MIL</MatchTeamText>
        </MatchView>

        <DateView>
          <DateText>20/10</DateText>
        </DateView>
        <MatchView>
          <MatchTeamText>SAM</MatchTeamText>
          <MatchTeamShield source={sampImg}></MatchTeamShield>
          <MatchTeamText>2</MatchTeamText>
          <MatchTeamText>X</MatchTeamText>
          <MatchTeamText>0</MatchTeamText>
          <MatchTeamShield source={milanImg}></MatchTeamShield>
          <MatchTeamText>MIL</MatchTeamText>
        </MatchView>

        <DateView>
          <DateText>20/10</DateText>
        </DateView>
        <MatchView>
          <MatchTeamText>SAM</MatchTeamText>
          <MatchTeamShield source={sampImg}></MatchTeamShield>
          <MatchTeamText>2</MatchTeamText>
          <MatchTeamText>X</MatchTeamText>
          <MatchTeamText>0</MatchTeamText>
          <MatchTeamShield source={milanImg}></MatchTeamShield>
          <MatchTeamText>MIL</MatchTeamText>
        </MatchView>
      </Category>
    </Container>
  );
}
