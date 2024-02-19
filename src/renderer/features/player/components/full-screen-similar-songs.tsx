import { SimilarSongsList } from '/@/renderer/features/similar-songs/components/similar-songs-list';
import { useCurrentSong } from '/@/renderer/store';

export const FullScreenSimilarSongs = () => {
    const currentSong = useCurrentSong();

    return currentSong ? (
        <SimilarSongsList
            fullScreen
            song={currentSong}
        />
    ) : null;
};
