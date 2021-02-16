import React from 'react';
import { page, team, header, headerCenter, teams } from './match.module.scss';
import { useRouter } from 'next/router';
import SummonerCard from '../../components/SummonerCard';
import { gql, useQuery } from '@apollo/client';
import { MatchSummoner } from '../../model/MatchSummoner';

function getTime(seconds: number): string {
  return Math.floor(seconds / 60).toString() + ':' + (seconds % 60).toString().padStart(2, '0');
}

const SummonerPage = () => {
  const router = useRouter();
  const { loading, error, data } = useQuery(gql`
    query matchById($id: String!) {
      matchById(id: $id) {
        gameMode
        gameLength
        blueTeam {
          win
          summoners {
            name,
            rankedSoloDuo {
              tier
              division
              lp
            }
          }
        }
        redTeam {
          win
          summoners {
            name
            items {
              name
              id
            }
            trinket {
              name
              id
            }
            stats {
              kills,
              deaths
              assists
              gold
              cs
              vision
            }
            rankedSoloDuo {
              tier
              division
              lp
            }
          }
        }       
      }
    }
  `, { variables: { id: router.query.id }});
  const match = data.matchById;
  return loading ? <div className={page}>
    <div className={header}>
      <div className="typo-large">
        <span className={"col-green"}>{ match.blueTeam.win ? 'Victory' : 'Defeat' }</span>
        <div>
          <span className="col-green">{match.blueTeam.kills}</span>&nbsp;/&nbsp;
          <span className="col-red">{match.blueTeam.deaths}</span>&nbsp;/&nbsp;
          <span className="col-gold">{match.blueTeam.assists}</span>
        </div>
      </div>
      <div className={`col-gray typo-large ${headerCenter}`}>
        <div>{match.gameMode}</div>
        <div>{getTime(match.gameLength)}</div>
      </div>
      <div className="typo-large">
        <span className={"col-red"}>{ match.redTeam.win ? 'Victory' : 'Defeat' }</span>
        <div>
          <span className="col-green">{match.redTeam.kills}</span>&nbsp;/&nbsp;
          <span className="col-red">{match.redTeam.deaths}</span>&nbsp;/&nbsp;
          <span className="col-gold">{match.redTeam.assists}</span>
        </div>
      </div>
    </div>
    <div className={teams}>
      <div className={team}>
        { match.blueTeam.summoners.map((summoner: MatchSummoner, index: number) => <SummonerCard key={index} mirror={true} summoner={summoner}></SummonerCard>) }
      </div>
      <div className={team}>
        { match.redTeam.summoners.map((summoner: MatchSummoner, index: number) => <SummonerCard key={index} mirror={true} summoner={summoner}></SummonerCard>) }
      </div>
    </div>
  </div> : 'Loading';
}

export default SummonerPage
