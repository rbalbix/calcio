import React, { useState, useEffect } from 'react';
import { useSnackbar } from 'notistack';

import api from '../../services/api';

import MatchHeader from '../MatchHeader';
import RoundHeader from '../RoundHeader';
import Match from '../Match';

import {
  MatchContainer,
  MatchesView,
  Button,
} from './styles';

const Matches = ({ category, loadRank }) => {
  const { enqueueSnackbar } = useSnackbar();

  const [round, setRound] = useState(0);
  const [total, setTotal] = useState(0);
  const [totalRegular, setTotalRegular] = useState(0);
  const [matches, setMatches] = useState([]);

  const [loadingMatches, setLoadingMatches] = useState(false);

  const initialScoreFields = [
    { _id: null, scoreHome: '', scoreAway: '', game: '', leg: '' },
    { _id: null, scoreHome: '', scoreAway: '', game: '', leg: '' },
    { _id: null, scoreHome: '', scoreAway: '', game: '', leg: '' },
    { _id: null, scoreHome: '', scoreAway: '', game: '', leg: '' },
    { _id: null, scoreHome: '', scoreAway: '', game: '', leg: '' },
  ];

  const initialDateFields = [
    { _id: null, day: null },
    { _id: null, day: null },
    { _id: null, day: null },
    { _id: null, day: null },
    { _id: null, day: null },
  ];

  const initialPenaltyFields = [
    { _id: null, penaltyHome: '', penaltyAway: '' },
    { _id: null, penaltyHome: '', penaltyAway: '' },
    { _id: null, penaltyHome: '', penaltyAway: '' },
    { _id: null, penaltyHome: '', penaltyAway: '' },
    { _id: null, penaltyHome: '', penaltyAway: '' },
  ];

  const [scoreFields, setScoreFields] = useState(initialScoreFields);
  const [dateFields, setDateFields] = useState(initialDateFields);
  const [penaltyFields, setPenaltyFields] = useState(initialPenaltyFields);

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();

      let hasScoreFields = false;
      let hasDateFields = false;
      let hasPenaltyFields = false;

      for (const i in scoreFields) {
        if (
          scoreFields[i]._id !== null &&
          scoreFields[i].scoreHome !== '' &&
          scoreFields[i].scoreAway !== ''
        ) {
          hasScoreFields = true;
          break;
        }
      }

      for (const i in dateFields) {
        if (dateFields[i]._id !== null && dateFields[i].day !== null) {
          hasDateFields = true;
          break;
        }
      }

      for (const i in penaltyFields) {
        if (
          penaltyFields[i]._id !== null &&
          penaltyFields[i].penaltyHome !== '' &&
          penaltyFields[i].penaltyAway !== ''
        ) {
          hasPenaltyFields = true;
          break;
        }
      }

      if (hasScoreFields || hasDateFields || hasPenaltyFields) {
        await api.post('/match', {
          scoreFields,
          dateFields,
          penaltyFields,
          round,
          category,
        });

        loadRank();
        await loadMatches();

        setScoreFields([...initialScoreFields]);
        setDateFields([...initialDateFields]);
        setDateFields([...initialPenaltyFields]);

        document.querySelectorAll('input:checked').forEach(function (el) {
          el.checked = false;
        });

        enqueueSnackbar('Atualizado com sucesso !', {
          variant: 'success',
        });
      }
    } catch (err) {
      console.log(err);
      enqueueSnackbar('Falha ao atualizar, tente novamente !', {
        variant: 'error',
      });
    }
  };

  const handleInputChange = async (index, event, _id, game, leg) => {
    try {
      const values = [...scoreFields];
      values[index]._id = _id;
      if (event.target.name === 'scoreHome') {
        values[index].scoreHome = event.target.value;
      } else {
        values[index].scoreAway = event.target.value;
      }
      values[index].game = game;
      values[index].leg = leg;
      setScoreFields(values);

      // Verify penalty
      if (
        round > totalRegular &&
        values[index].scoreAway !== '' &&
        values[index].scoreHome !== ''
      ) {
        let scoreHome, scoreAway;
        const match = await api.get(`/match/${_id}`);
        if (match.leg === 1) {
          return;
        }
        const matchLeg = await api.get(`/match/leg/1/${_id}`);

        // FOR SEMI OR FINAL
        if (round >= totalRegular + 3) {
          if (
            matchLeg.data.scoreHome !== null &&
            matchLeg.data.scoreAway !== null
          ) {
            scoreHome =
              Number(matchLeg.data.scoreHome) + Number(values[index].scoreHome);
            scoreAway =
              Number(matchLeg.data.scoreAway) + Number(values[index].scoreAway);
          } else {
            if (leg === 1) {
              return;
            } else {
              const leg1 = scoreFields.filter(
                (score) => score.game === game && score.leg === 1
              );
              scoreHome =
                Number(leg1[0].scoreHome) + Number(values[index].scoreHome);
              scoreAway =
                Number(leg1[0].scoreAway) + Number(values[index].scoreAway);
            }
          }
        }

        // FOR QUARTER
        if (round === totalRegular + 1) {
          return;
        }
        if (round === totalRegular + 2) {
          scoreHome =
            Number(matchLeg.data.scoreHome) + Number(values[index].scoreHome);
          scoreAway =
            Number(matchLeg.data.scoreAway) + Number(values[index].scoreAway);
        }

        if (scoreHome === scoreAway) {
          document.querySelector(`.penalty-home${_id}`).style.display = 'block';
          document.querySelector(`.penalty-away${_id}`).style.display = 'block';
        } else {
          const penalties = [...penaltyFields];
          penalties[index].penaltyHome = '';
          penalties[index].penaltyAway = '';
          setPenaltyFields(penalties);
          document.querySelector(`.penalty-home${_id}`).value = '';
          document.querySelector(`.penalty-away${_id}`).value = '';
          document.querySelector(`.penalty-home${_id}`).style.display = 'none';
          document.querySelector(`.penalty-away${_id}`).style.display = 'none';
        }
      }
    } catch (err) {
      console.log(err);
      enqueueSnackbar('Falha ao atualizar, tente novamente !', {
        variant: 'error',
      });
    }
  };

  const handlePenaltyChange = (index, event, _id) => {
    const values = [...penaltyFields];
    values[index]._id = _id;
    if (event.target.name === 'penaltyHome') {
      values[index].penaltyHome = event.target.value;
    } else {
      values[index].penaltyAway = event.target.value;
    }
    setPenaltyFields(values);
  };

  const handleDateChange = (index, event, _id) => {
    const values = [...dateFields];

    values[index]._id = _id;
    values[index].day = event;

    setDateFields(values);
  };

  async function loadMatches() {
    setLoadingMatches(true);

    const response = await api.get('/match', {
      params: { category, round },
    });

    setTotal(parseInt(response.headers['x-total-count']));
    setTotalRegular(parseInt(response.headers['x-total-regular-count']));
    if (round === 0) setRound(parseInt(response.headers['x-round']));

    setLoadingMatches(false);
    setMatches(response.data);
  }

  async function loadPreviousMatches() {
    if (round - 1 <= 0) return;
    setRound(round - 1);
  }

  async function loadNextMatches() {
    if (round + 1 > total) return setRound(1);
    setRound(round + 1);
  }

  useEffect(() => {
    loadMatches();
    // eslint-disable-next-line
  }, [round]);

  return (
    <MatchContainer>
      <MatchHeader loadingMatches={loadingMatches} />
      <RoundHeader
        round={round}
        totalRegular={totalRegular}
        loadingMatches={loadingMatches}
        loadPreviousMatches={loadPreviousMatches}
        loadNextMatches={loadNextMatches}
      />

      <MatchesView>
        <form onSubmit={handleSubmit}>
          {matches.map((match, index) => (
            <Match key={match._id}
              match={match}
              index={index}
              scoreFields={scoreFields}
              penaltyFields={penaltyFields}
              dateFields={dateFields}
              handleInputChange={handleInputChange}
              handlePenaltyChange={handlePenaltyChange}
              handleDateChange={handleDateChange}
            />
          ))}
          <Button type="submit" disabled={loadingMatches}>
            ATUALIZAR
          </Button>
        </form>
      </MatchesView>
    </MatchContainer>
  );
};

export default Matches;
