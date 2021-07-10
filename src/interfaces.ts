export interface IIconProps {
  name: 'action' | 'comedy' | 'documentary' | 'drama' | 'horror' | 'family'
  color: string
}

export interface IGenreResponseProps {
  id: number
  name: 'action' | 'comedy' | 'documentary' | 'drama' | 'horror' | 'family'
  title: string
}

export interface IMovieProps {
  imdbID: string
  Title: string
  Poster: string
  Ratings: Array<{
    Source: string
    Value: string
  }>;
  Runtime: string
}

export interface IContentProps {
  movies: IMovieProps[]
  selectedGenre: IGenreResponseProps
}

export interface ISideBarProps {
  genres: IGenreResponseProps[]
  handleClickButton: Function
  selectedGenreId: number
}
