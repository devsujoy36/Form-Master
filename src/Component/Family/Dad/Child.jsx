/* eslint-disable react/prop-types */

import Special from "./Special";

const Child = ({ name, special }) => {

  return (
    <div>
      <h1 className="text-xl font-semibold text-center">{name}</h1>
      {special && <Special specialName={'Special'} />}
    </div>
  )
}

export default Child;