import { StarsInterface } from './StarsInterface'
import Star from './Star'

export function Stars({ count = 0 } : StarsInterface) {
  let id = 0;

  const isValid = count <= 5 && count >= 1 ? true : false;

  const addStarsArray = () => {
    const stars = [];

    for (let i = 1; i <= count; i++) {
      stars.push(<Star key={ id++ } />);
    }

    return stars
  }

  const renderStars = isValid ? addStarsArray() : undefined;

  return (
    <ul className="card-body-stars u-clearfix">{ renderStars }</ul>
  )
}
