import s from './music.module.scss';


const Music = (props) => {
    return (
        <div className={s.Music}>
            <p>First song</p>
            <p>Second song.</p>
            <p>Third song.</p>
        </div>
    );
}


export default Music;