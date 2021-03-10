import classes from './Music.module.css';

const Music = () => {
    return (
        <main>
            <section>
                <div>Альбомы</div>
            </section>
            <section>
                Треки
                <div className={classes.samurai}>
                    <a href='https://www.youtube.com/watch?v=Xtcv6G-pVHI&ab_channel=1001STONED'><img src='https://i.imgur.com/rWRN0EU.png'></img></a>
                    <h6>Samurai</h6>
                </div>
            </section>
        </main>
    )
}

export default Music