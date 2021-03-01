export interface SearchData {
    type: string,
    searchInput: string | number,
    perPage: number,
    page: number
  };
  
export interface ImageProps {
    id: string | number,
    previewURL: string,
    webformatURL: string,
    largeImageURL: string
};

export interface PaginationProps {
    searchData: SearchData,
    onPaginationChange: Function,
    totalPagesNumber: Number
};

