import React from 'react'
import Skeleton, {SkeletonTheme} from 'react-loading-skeleton'
function Loader() {
  return (
    <div className='card'>
        <SkeletonTheme color="#202020" highlightColor="grey">
            <Skeleton height={300} duration={2}/>
        </SkeletonTheme>
    </div>
  )
}

export default Loader