import React from 'react';
import { MdNavigateBefore, MdNavigateNext } from 'react-icons/md';

import {
  RoundView,
  RoundText,
  PrevNextRound,
} from './styles';

const RoundHeader = ({ round,
  totalRegular,
  loadingMatches,
  loadPreviousMatches,
  loadNextMatches }) => {

  return (
    <RoundView>
      <PrevNextRound
        onClick={() => loadPreviousMatches()}
        type="button"
        disabled={loadingMatches}
      >
        <MdNavigateBefore size={36} color="#1E7A0E" />
      </PrevNextRound>
      <RoundText>
        {round === totalRegular + 1
          ? 'QUARTAS (IDA)'
          : round === totalRegular + 2
            ? 'QUARTAS (VOLTA)'
            : round === totalRegular + 3
              ? 'SEMIFINAL'
              : round === totalRegular + 4
                ? 'FINAL'
                : round === 0
                  ? ''
                  : `${round}ª RODADA`}
      </RoundText>
      <PrevNextRound
        onClick={() => loadNextMatches()}
        type="button"
        disabled={loadingMatches}
      >
        <MdNavigateNext size={36} color="#1E7A0E" />
      </PrevNextRound>
    </RoundView>)
}

export default RoundHeader;
