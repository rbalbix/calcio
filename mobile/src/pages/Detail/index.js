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
            <TeamShield
              source={{
                uri:
                  'https://rb-calcio.herokuapp.com/files/shields/sampdoria.png',
              }}
            />
            <MatchTeamText>SAM</MatchTeamText>
          </Team>
          <Score>
            <ScoreText>1</ScoreText>
            <ScoreText score>2</ScoreText>
            <ScoreText score>3</ScoreText>
            <ScoreText score>4</ScoreText>
            <ScoreText score>5</ScoreText>
            <ScoreText score>-6</ScoreText>
          </Score>
        </TeamView>
        <TeamView>
          <Team>
            <PositionText>2</PositionText>
            <TeamShield
              source={{
                uri:
                  'https://rb-calcio.herokuapp.com/files/shields/sampdoria.png',
              }}
            />
            <MatchTeamText>JUV</MatchTeamText>
          </Team>
          <Score>
            <ScoreText>7</ScoreText>
            <ScoreText score>8</ScoreText>
            <ScoreText score>9</ScoreText>
            <ScoreText score>10</ScoreText>
            <ScoreText score>11</ScoreText>
            <ScoreText score>-12</ScoreText>
          </Score>
        </TeamView>
        <TeamView>
          <Team>
            <PositionText>3</PositionText>
            <TeamShield
              source={{
                uri:
                  'https://rb-calcio.herokuapp.com/files/shields/sampdoria.png',
              }}
            />
            <MatchTeamText>INT</MatchTeamText>
          </Team>
          <Score>
            <ScoreText>13</ScoreText>
            <ScoreText score>14</ScoreText>
            <ScoreText score>15</ScoreText>
            <ScoreText score>16</ScoreText>
            <ScoreText score>17</ScoreText>
            <ScoreText score>18</ScoreText>
          </Score>
        </TeamView>
        <TeamView>
          <Team>
            <PositionText>4</PositionText>
            <TeamShield
              source={{
                uri:
                  'https://rb-calcio.herokuapp.com/files/shields/sampdoria.png',
              }}
            />
            <MatchTeamText>MIL</MatchTeamText>
          </Team>
          <Score>
            <ScoreText>19</ScoreText>
            <ScoreText score>20</ScoreText>
            <ScoreText score>21</ScoreText>
            <ScoreText score>22</ScoreText>
            <ScoreText score>23</ScoreText>
            <ScoreText score>-24</ScoreText>
          </Score>
        </TeamView>
        <TeamView>
          <Team>
            <PositionText>5</PositionText>
            <TeamShield
              source={{
                uri:
                  'https://rb-calcio.herokuapp.com/files/shields/sampdoria.png',
              }}
            />
            <MatchTeamText>SAM</MatchTeamText>
          </Team>
          <Score>
            <ScoreText>25</ScoreText>
            <ScoreText score>26</ScoreText>
            <ScoreText score>27</ScoreText>
            <ScoreText score>28</ScoreText>
            <ScoreText score>29</ScoreText>
            <ScoreText score>-30</ScoreText>
          </Score>
        </TeamView>
        <TeamView>
          <Team>
            <PositionText>6</PositionText>
            <TeamShield
              source={{
                uri:
                  'https://rb-calcio.herokuapp.com/files/shields/sampdoria.png',
              }}
            />
            <MatchTeamText>JUV</MatchTeamText>
          </Team>
          <Score>
            <ScoreText>30</ScoreText>
            <ScoreText score>10</ScoreText>
            <ScoreText score>20</ScoreText>
            <ScoreText score>-70</ScoreText>
            <ScoreText score>10</ScoreText>
            <ScoreText score>20</ScoreText>
          </Score>
        </TeamView>
        <TeamView>
          <Team>
            <PositionText>7</PositionText>
            <TeamShield
              source={{
                uri:
                  'https://rb-calcio.herokuapp.com/files/shields/sampdoria.png',
              }}
            />
            <MatchTeamText>INT</MatchTeamText>
          </Team>
          <Score>
            <ScoreText>30</ScoreText>
            <ScoreText score>10</ScoreText>
            <ScoreText score>20</ScoreText>
            <ScoreText score>30</ScoreText>
            <ScoreText score>10</ScoreText>
            <ScoreText score>20</ScoreText>
          </Score>
        </TeamView>
        <TeamView>
          <Team>
            <PositionText>8</PositionText>
            <TeamShield
              source={{
                uri:
                  'https://rb-calcio.herokuapp.com/files/shields/sampdoria.png',
              }}
            />
            <MatchTeamText>MIL</MatchTeamText>
          </Team>
          <Score>
            <ScoreText>30</ScoreText>
            <ScoreText score>10</ScoreText>
            <ScoreText score>20</ScoreText>
            <ScoreText score>30</ScoreText>
            <ScoreText score>10</ScoreText>
            <ScoreText score>20</ScoreText>
          </Score>
        </TeamView>
        <TeamView>
          <Team>
            <PositionText>9</PositionText>
            <TeamShield
              source={{
                uri:
                  'https://rb-calcio.herokuapp.com/files/shields/sampdoria.png',
              }}
            />
            <MatchTeamText>INT</MatchTeamText>
          </Team>
          <Score>
            <ScoreText>30</ScoreText>
            <ScoreText score>10</ScoreText>
            <ScoreText score>20</ScoreText>
            <ScoreText score>30</ScoreText>
            <ScoreText score>10</ScoreText>
            <ScoreText score>20</ScoreText>
          </Score>
        </TeamView>
        <TeamView>
          <Team>
            <PositionText>10</PositionText>
            <TeamShield
              source={{
                uri:
                  'https://rb-calcio.herokuapp.com/files/shields/sampdoria.png',
              }}
            />
            <MatchTeamText>MIL</MatchTeamText>
          </Team>
          <Score>
            <ScoreText>30</ScoreText>
            <ScoreText score>10</ScoreText>
            <ScoreText score>20</ScoreText>
            <ScoreText score>30</ScoreText>
            <ScoreText score>10</ScoreText>
            <ScoreText score>20</ScoreText>
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
          <MatchTeamShield
            source={{
              uri:
                'https://rb-calcio.herokuapp.com/files/shields/sampdoria.png',
            }}
          ></MatchTeamShield>
          <MatchTeamText>25</MatchTeamText>
          <MatchTeamText>X</MatchTeamText>
          <MatchTeamText>30</MatchTeamText>
          <MatchTeamShield
            source={{
              uri:
                'https://rb-calcio.herokuapp.com/files/shields/sampdoria.png',
            }}
          ></MatchTeamShield>
          <MatchTeamText>MIL</MatchTeamText>
        </MatchView>

        <DateView>
          <DateText>20/10</DateText>
        </DateView>
        <MatchView>
          <MatchTeamText>SAM</MatchTeamText>
          <MatchTeamShield
            source={{
              uri:
                'https://rb-calcio.herokuapp.com/files/shields/sampdoria.png',
            }}
          ></MatchTeamShield>
          <MatchTeamText>2</MatchTeamText>
          <MatchTeamText>X</MatchTeamText>
          <MatchTeamText>0</MatchTeamText>
          <MatchTeamShield
            source={{
              uri:
                'https://rb-calcio.herokuapp.com/files/shields/sampdoria.png',
            }}
          ></MatchTeamShield>
          <MatchTeamText>MIL</MatchTeamText>
        </MatchView>

        <DateView>
          <DateText>20/10</DateText>
        </DateView>
        <MatchView>
          <MatchTeamText>SAM</MatchTeamText>
          <MatchTeamShield
            source={{
              uri:
                'https://rb-calcio.herokuapp.com/files/shields/sampdoria.png',
            }}
          ></MatchTeamShield>
          <MatchTeamText>2</MatchTeamText>
          <MatchTeamText>X</MatchTeamText>
          <MatchTeamText>0</MatchTeamText>
          <MatchTeamShield
            source={{
              uri:
                'https://rb-calcio.herokuapp.com/files/shields/sampdoria.png',
            }}
          ></MatchTeamShield>
          <MatchTeamText>MIL</MatchTeamText>
        </MatchView>

        <DateView>
          <DateText>20/10</DateText>
        </DateView>
        <MatchView>
          <MatchTeamText>SAM</MatchTeamText>
          <MatchTeamShield
            source={{
              uri:
                'https://rb-calcio.herokuapp.com/files/shields/sampdoria.png',
            }}
          ></MatchTeamShield>
          <MatchTeamText>2</MatchTeamText>
          <MatchTeamText>X</MatchTeamText>
          <MatchTeamText>0</MatchTeamText>
          <MatchTeamShield
            source={{
              uri:
                'https://rb-calcio.herokuapp.com/files/shields/sampdoria.png',
            }}
          ></MatchTeamShield>
          <MatchTeamText>MIL</MatchTeamText>
        </MatchView>

        <DateView>
          <DateText>20/10</DateText>
        </DateView>
        <MatchView>
          <MatchTeamText>SAM</MatchTeamText>
          <MatchTeamShield
            source={{
              uri:
                'https://rb-calcio.herokuapp.com/files/shields/sampdoria.png',
            }}
          ></MatchTeamShield>
          <MatchTeamText>2</MatchTeamText>
          <MatchTeamText>X</MatchTeamText>
          <MatchTeamText>0</MatchTeamText>
          <MatchTeamShield
            source={{
              uri:
                'https://rb-calcio.herokuapp.com/files/shields/sampdoria.png',
            }}
          ></MatchTeamShield>
          <MatchTeamText>MIL</MatchTeamText>
        </MatchView>
      </Category>
    </Container>
  );
}
