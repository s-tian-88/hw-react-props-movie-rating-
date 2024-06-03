import { Star } from "../Star";

type StarsProp = {
    count: number,
}

function Stars (props: StarsProp) {

    const { count } = props;

    if ( 5 < count || count < 1) return;
    const counts: number[] = Array.from({length: count}, (_, index) => index);

    return (
        <ul className="card-body-stars u-clearfix">
            { counts.map(o => <Star key={o} />) }
        </ul>
    )

}

export { Stars }
