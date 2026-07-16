import React from 'react';
import CountUpModule from 'react-countup';
const CountUp = CountUpModule.default || CountUpModule;

function AnimatedStat({ value }) {
  if (!value) return null;
  const strValue = String(value);

  const match = strValue.match(/^([^0-9]*)([0-9.,]+)([^0-9]*)$/);
  
  if (match) {
    const prefix = match[1] || "";
    const numStr = match[2].replace(/,/g, '');
    const suffix = match[3] || "";
    const num = parseFloat(numStr);
    
    const decimals = numStr.includes('.') ? numStr.split('.')[1].length : 0;

    return (
      <CountUp
        start={0}
        end={num}
        duration={2.5}
        separator=","
        decimals={decimals}
        prefix={prefix}
        suffix={suffix}
        enableScrollSpy={true}
        scrollSpyOnce={true}
      />
    );
  }

  return <span>{strValue}</span>;
}

export default AnimatedStat;
