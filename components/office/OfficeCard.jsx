import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import CardMedia from '@material-ui/core/CardMedia';
import { StyleSheet, css } from 'aphrodite';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent'
import Button from '@material-ui/core/Button';
import {styles} from '../../styles/styles'

const OfficeCard = (props) => {
  const { office } = props;
  return (
    <Grid item style={{ width: '100%' }} >
      <CardMedia
        className={css(styles.cardMedia)}
        image={"./static/images/" + office.image}
        title={office.title}
      >
        <Grid container direction="column" justify="center" style={{ display: 'flex', height: '100%' }}>
          <Grid item style={{ flex: 1 }}></Grid>
          <Grid container direction="row" justify="center" style={{ marginBottom: 20 }}>
            <Grid item style={{ backgroundColor: '#ff8124', padding: 10 }} >
              <Typography  className={css(styles.cardTitle)} variant="display1" align="left" color="textPrimary">
                {office.title}
              </Typography>
            </Grid>
            <Grid item style={{ backgroundColor: '#fff', padding: 10 }}>
              <Typography className={css(styles.cardContent)} variant="title" align="left" color="textPrimary" >
                {office.address}
              </Typography>
              <Typography variant="title" align="left" color="textPrimary">
                <span style={{ color: '#ff8124' }}>T</span> <span style={{ fontStyle: 'italic' }}>{office.number}</span>
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </CardMedia>

      <Card className={css(styles.cardMobile)}>
        <CardMedia
          className={css(styles.cardMediaMobile)}
          image={"./static/images/" + office.image}
          title={office.title}
        />
        <CardContent>
          <Typography style={{ color: '#ff8124' }} variant="display1" align="left" color="textPrimary" >
            {office.title}
          </Typography>
          <Typography variant="title" align="left" color="textPrimary" >
            {office.address}
          </Typography>
          <Typography variant="title" align="left" color="textPrimary">
            <span style={{ color: '#ff8124' }}>T</span> <span style={{ fontStyle: 'italic' }}>{office.number}</span>
          </Typography>
          <Button variant="contained" color="primary" className={css(styles.viewButton)}>
              View Office
      		</Button>
        </CardContent>
      </Card>
    </Grid>
  )
};

export default OfficeCard;