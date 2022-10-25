
import {StatisticsList} from 'components/statistic/statistics';
import data from 'components/statistic/data.json';

export const StatSection = () => {
    return <section>
    <StatisticsList
        title='Upload stats'
        items = {data}/>
    </section>
}




