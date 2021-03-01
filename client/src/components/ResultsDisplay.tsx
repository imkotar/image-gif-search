import { Grid, Row} from 'react-flexbox-grid';

interface ImageProps {
    id: string | number,
    previewURL: string,
    webformatURL: string,
    largeImageURL: string
}

export const ResultsDisplay = (results: any) => {

  const renderImage = (image: ImageProps) => {
    return (
      <div>
        <img key={image.id} style={imageStyle} alt={image.previewURL} src={image.previewURL} />
      </div>
    );
  }
  const imageStyle = {
    padding: "10px",
  };
  return (
    <div>
    <Grid fluid>
        <Row center="sm" style={{justifyContent: 'center'}}>
          {results.results.map((image: ImageProps) => renderImage(image))}
        </Row>
    </Grid>
    </div>
  );
  }
  
  