// Iterator Pattern Example

// Iterator interface
interface Iterator<T> {
    hasNext(): boolean;
    next(): T;
    current(): T;
}

// Aggregate interface
interface Aggregate<T> {
    createIterator(): Iterator<T>;
}

// Concrete Iterator
class PlaylistIterator implements Iterator<Song> {
    private position: number = 0;

    constructor(private playlist: Playlist) {}

    hasNext(): boolean {
        return this.position < this.playlist.getCount();
    }

    next(): Song {
        const song = this.playlist.getSong(this.position);
        this.position++;
        return song;
    }

    current(): Song {
        return this.playlist.getSong(this.position);
    }
}

// Song class
class Song {
    constructor(
        private title: string,
        private artist: string,
        private duration: number
    ) {}

    toString(): string {
        return `${this.title} by ${this.artist} (${this.duration}s)`;
    }
}

// Concrete Aggregate
export class Playlist implements Aggregate<Song> {
    private songs: Song[] = [];

    addSong(title: string, artist: string, duration: number): void {
        this.songs.push(new Song(title, artist, duration));
    }

    getSong(index: number): Song {
        return this.songs[index];
    }

    getCount(): number {
        return this.songs.length;
    }

    createIterator(): Iterator<Song> {
        return new PlaylistIterator(this);
    }
}

// Usage
const playlist = new Playlist();

playlist.addSong("Bohemian Rhapsody", "Queen", 354);
playlist.addSong("Stairway to Heaven", "Led Zeppelin", 482);
playlist.addSong("Hotel California", "Eagles", 391);

const iterator = playlist.createIterator();

while (iterator.hasNext()) {
    console.log(iterator.next().toString());
} 