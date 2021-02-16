import React from 'react';
import { gql, useQuery } from '@apollo/client';
import { useRouter } from 'next/router';
import SummonerCard from '../../components/SummonerCard';
import { page } from './summoner.module.scss';

const SummonerPage = () => {
const router = useRouter();
const { loading, error, data } = useQuery(gql`
    query summonerQuery($name: String!) {
      summonerByName(name: $name) {
        name
        profileIcon
        summonerLevel
        rankedSoloDuo {
          tier
          division
          lp
        }
      }
    }
  `, { variables: { name: router.query.name ?? '' }});
  console.log(loading, error, data);
  const summoner = { ...data?.summonerByName };
  summoner.champion = 'Ahri';
  summoner.championLevel = 13;
  summoner.stats = { kills: 3, deaths: 0, assists: 2 };
  summoner.lane = 'MID';
  summoner.stats.gold = 14521;
  summoner.stats.cs = 245;
  summoner.stats.vision = 32;
  summoner.items = [{ name: "Boots of Speed", id: "1001" }, null, null, null, null, null];
  summoner.trinket = { name: "Stealth Ward", id: "3340"  };
  return <div className={page}>
    { !loading ? <SummonerCard mirror={true} summoner={summoner}></SummonerCard> : 'Loading'}
  </div>;
}

export default SummonerPage
