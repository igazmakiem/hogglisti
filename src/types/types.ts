export interface ISong {
  id: number;
  preview: string;
  album: IAlbum;
  artist: IArtis;
  title: string;
}

export interface IAlbum {
  id: number;
  cover: string;
  link: string;
  title: string;
  tracklist: string;
}

export interface IArtis {
  id: number;
  name: string;
  link: string;
  picture: string;
  picture_medium: string;
}
