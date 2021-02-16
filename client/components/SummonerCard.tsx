import React from 'react';
import Image from 'next/image'
import { card, mirror as mirrorClass, summonerInfo, items, item as itemClass, rankIndicator, stats, profile, level } from './SummonerCard.module.scss';
import { MatchSummoner } from '../model/MatchSummoner';

interface SummonerCardProps {
  summoner: MatchSummoner;
  mirror?: boolean;
}

function capitalize(str?: string) {
  return str ? str.slice(0, 1).toUpperCase() + str.slice(1).toLowerCase() : null;
}

const SummonerCard = ({summoner, mirror}: SummonerCardProps) => {
  return <div className={`${card} ${mirror && mirrorClass}`}>
      <div className={profile}>
        <Image src={`/champion/${summoner.champion}.png`} alt={summoner.name} width={42} height={42}></Image>
        <div className={level}>
          <div>
            <span>{summoner.championLevel}</span>
          </div>
        </div>
      </div>
      <div className={summonerInfo}>
        <span className="typo-medium bold">{summoner.name}</span>
        <div className={rankIndicator}>
          { summoner.rankedSoloDuo && <Image src={`/ranked-emblems/Emblem_${capitalize(summoner.rankedSoloDuo?.tier)}.png`} alt={summoner.rankedSoloDuo?.tier} width={32} height={32}></Image> }
          <span className="typo-small">{summoner.rankedSoloDuo ? `${capitalize(summoner.rankedSoloDuo.tier)} ${summoner.rankedSoloDuo.division} at ${summoner.rankedSoloDuo.lp} LP` : 'Unranked'}</span>
        </div>
      </div>
      <div className={stats}>
        <div className="typo-large">
          <span className="col-green">{summoner.kills}</span>&nbsp;/&nbsp;
          <span className="col-red">{summoner.deaths}</span>&nbsp;/&nbsp;
          <span className="col-gold">{summoner.assists}</span>
        </div>
        <div className="typo-small">{summoner.cs} CS, {Math.round(summoner.gold / 100) / 10}K gold</div>
        <div className="typo-small">{summoner.vision} Vision</div>
      </div>
      <div className={items}>
          { summoner.items.map((item, index) => <div className={itemClass}>{item?.id && <Image key={index} src={`/item/${item.id}.png`} alt={item.name} width={32} height={32}></Image> }</div>) }
      </div>
      <div className={itemClass}>{summoner.trinket && <Image src={`/item/${summoner.trinket.id}.png`} alt={summoner.trinket.name} width={32} height={32}></Image> }</div>
  </div>
}

export default SummonerCard
