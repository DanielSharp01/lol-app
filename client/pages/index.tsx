import React from 'react';
import Image from 'next/image'
import { page, summoner as summonerClass, level } from './index.module.scss';
import { gql, useQuery } from '@apollo/client';

const IndexPage = () => {
  const { loading, error, data } = useQuery(gql`
    query summonerQuery($name: String!) {
      summonerByName(name: $name) {
        name,
        profileIcon,
        summonerLevel
      }
    }
  `, { variables: { name: 'Tilted Fox' }});
  console.log(loading, error, data);
  const summoner = data?.summonerByName;
  return summoner ? <div className={page}>
    <div className={summonerClass}>
      <div>
        <Image src={`/profileicon/${summoner.profileIcon}`} alt={summoner.name} width={48} height={48}></Image>
      </div>
      <span className="typo-large">{summoner.name}</span>
      <div className={level}>{summoner.summonerLevel}</div>
    </div>
  </div> : <div className={page}>{'Loading'}</div>;
}

export default IndexPage
