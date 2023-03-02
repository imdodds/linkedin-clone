import React from 'react'
import '../styles/Widgets.css'
import InfoIcon from '@mui/icons-material/Info';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';

function Widgets() {

  const newsArticle = (heading, subtitle) => (
    <div className='widgets__article'>
      <div className='widgets__articleLeft'>
        <FiberManualRecordIcon />
      </div>

      <div className='widgets__articleRight'>
        <h4>{heading}</h4>
        <p>{subtitle}</p>
      </div>
    </div>
  )

  return (
    <div className='widgets'>
      <div className='widgets__header'>
        <h2>LinkedIn News</h2>
        <InfoIcon />
      </div>
      {newsArticle('Elon Musk has Big Fat Butt', 'Top news - 9999 readers')}
      {newsArticle('Tesla Full Self-Driving "Just One Year Away"', 'Cars & Auto - 2635 readers')}
      {newsArticle('Danny Devito Announces Run for President in 2024', 'Politics - 8374 readers')}
      {newsArticle('Justin Trudeau OnlyFans Leaked', 'Canada - 7329 readers')}
      {newsArticle('Toronto Maple Leafs Eliminated from Stanley Cup Playoffs', 'Sports - 1967 readers')}
    </div>
  )
}

export default Widgets
