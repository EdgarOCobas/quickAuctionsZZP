import './AllAuctions.css';

const DATA=[
    {
        "id" : 1,
        "itemName" : "Gucci",
        "startingPrice" : 200,
        "currentPrice": 300,
        "currentWinner": null,
        "endDate": "2022-06-16T22:11:04.8701633"
    },
    {
        "id": 2,
        "itemName": "Szyna",
        "startingPrice": 200,
        "currentPrice": 300,
        "currentWinner": 2,
        "endDate": "2022-6-16T22:11:04.8703186"
    },
    {
        "id": 3,
        "itemName": "Noz",
        "startingPrice": 200,
        "currentPrice": 300,
        "currentWinner": 2,
        "endDate": "2022-06-16T22:11:04.870319"
    }
]


function AllAuctionsPage() {
    return (
        <section className='auctions-section'>
            <h1>Wszystkie Aukcje</h1>
            {[<li>Item1</li>, <li>Item2</li>]}
        </section>
    );
}
export default AllAuctionsPage;