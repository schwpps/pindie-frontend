import { Banner } from './components/Banner/Banner';
import { CardsListSection } from './components/CardsListSection/CardsListSection';
import { Promo } from './components/Promo/Promo';
import { getNormalizedGamesDataByCategory } from './api/api-utils.js';
import { endpoints } from './api/config';

export default async function Home() {
    const popularGames = await getNormalizedGamesDataByCategory(endpoints.games, 'popular');
    const newGames = await getNormalizedGamesDataByCategory(endpoints.games, 'new');

    return (
        <main className="main">
            <Banner />
            <CardsListSection id="popular" type="slider" title="Популярные" data={popularGames} />
            <CardsListSection id="new" type="slider" title="Новинки" data={newGames} />
            <Promo />
        </main>
    );
}
