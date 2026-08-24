import './MusicPlayer.css';

const MusicPlayer = ({ audioRef, isPlaying, onToggle }) => {
    return (
        <button
            className={`music-player ${isPlaying ? 'music-player--playing' : ''}`}
            type="button"
            onClick={onToggle}
            aria-label={isPlaying ? 'Выключить музыку' : 'Включить музыку'}
        >
            <span className="music-player__icon">
                {isPlaying ? '♪' : '❚❚'}
            </span>
        </button>
    );
};

export default MusicPlayer;