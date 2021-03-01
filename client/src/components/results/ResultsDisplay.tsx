import { Grid, Row} from 'react-flexbox-grid';
import { ImageProps } from '../../interfaces/interfaces'

export const ResultsDisplay = (results: any) => {

  const renderImage = (image: ImageProps) => {
    return (
      <a href={image.largeImageURL} target="_blank">
        <img key={image.id} style={imageStyle} alt={image.previewURL} src={image.previewURL}/>
      </a>
    );
  }
  const imageStyle = {
    padding: "10px",
  }
  
  return (
    <Grid fluid>
        <Row center="sm" style={{justifyContent: 'center'}}>
          {results.results.map((image: ImageProps) => renderImage(image))}
        </Row>
    </Grid>
  );
  }
  
  