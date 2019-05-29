import Grid from '@material-ui/core/Grid';
import Input from '@material-ui/core/Input';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import ListItem from '@material-ui/core/ListItem';
import Typography from '@material-ui/core/Typography';
import FormControl from '@material-ui/core/FormControl';
import { StyleSheet, css } from 'aphrodite';
import {styles} from '../../styles/styles'

const links =
{
  title: 'Quick links',
  linkList1: ['Company', 'Our Team', 'Careers at C&G', 'Property Management', 'Finance', 'Blog', 'Terms & Conditions', 'Privacy Policy'],
  linkList2: ['Buying', 'Selling', 'Renting', 'Sales Inspections', 'Rental Inspections', 'New Developments'],
};

const locations =
{
  title: 'Our locations',
  values: [
  { office: 'Elwood', address: '90 Ormond Road' }, 
  { office: 'Port Melboume', address: '1/103D Bay Street, Port Melboume' },
  { office: 'Black Rock', address: '3 Bluff Road, Black Rock' }, 
  { office: 'Mount Martha', address: '7A Bay Road, Mount Martha' }],
};

const socialItems = ["icon_social_facebook.png", "icon_social_twitter.png", "icon_social_instagram.png", "icon_social_pinterest.png", "icon_social_blog.png"];

const OfficeFooter = () => {
  return (
    <div style={{ marginTop: 50 }}>
      <div className={css(styles.footer)}>
        <Grid container spacing={32} justify="space-evenly">
          <Grid item xs={4} key={links.title}>
            <Typography className={css(styles.orangeContent)} variant="title" color="textPrimary" >
              {links.title}
            </Typography>
            <hr className={css(styles.line)} />
            <Grid container direction="row" style={{ flexGrow: 1 }}>
              <Grid item xs={6}>
                {links.linkList1.map(item => (
                  <ListItem button className={css(styles.listItem)} key={item}>
                    <Typography className={css(styles.whiteContent)} variant="subheading" color="textSecondary">
                      {item}
                    </Typography>
                  </ListItem>
                ))}

              </Grid>
              <Grid item xs={6}>
                {links.linkList2.map(item => (
                  <ListItem button className={css(styles.listItem)} key={item}>
                    <Typography className={css(styles.whiteContent)} variant="subheading" color="textSecondary">
                      {item}
                    </Typography>
                  </ListItem>
                ))}
              </Grid>
            </Grid>
          </Grid>

          <Grid item xs={3} key={locations.title}>
            <Typography className={css(styles.orangeContent)} variant="title" color="textPrimary">
              {locations.title}
            </Typography>
            <hr className={css(styles.line)} />
            {locations.values.map(item => (
              <ListItem button className={css(styles.listItem)} key={item.office}>
                <Grid container key={item.office} direction="row" style={{ flexGrow: 1 }}>
                  <Grid item style={{ flex: 1 }}>
                    <Typography className={css(styles.orangeContent)} variant="title" color="textSecondary">
                      {item.office}
                    </Typography>
                    <Typography className={css(styles.whiteContent)} variant="subheading">
                      {item.address}
                    </Typography>
                  </Grid>
                  <Grid item style={{ alignItems: 'center', justifyContent: 'center', display: 'flex' }}>
                    <img src="../static/images/icon_arrow_right.png" />
                  </Grid>
                </Grid>
              </ListItem>
            ))}
          </Grid>

          <Grid item xs={5} key="contact" className={css(styles.flexColumn)}>
            <div>
              <Typography className={css(styles.orangeContent)} variant="title" color="textPrimary" >
                Feel like a local
              </Typography>
              <hr className={css(styles.line)} />
            </div>
            <div style={{ flex:1}} className={css(styles.flexColumn)}>
              <div style={{flex:1}}>
                <Typography className={css(styles.whiteContent)} variant="title" color="textSecondary">
                  All the latest bayside property and real estate news direct from our team to your inbox...
                </Typography>
                <FormControl fullWidth>
                  <Grid container style={{ flexGrow: 1}}>
                    <Grid item style={{ flex: 1, marginRight:10 }}>
                      <Input
                        placeholder="Your Email"
                        className={css(styles.input)}
                        inputProps={{
                          classes: {
                            root: styles.input,
                            input: styles.input,
                          }
                        }}
                      />
                    </Grid>
                    <Grid item >
                      <Button variant="contained" color="primary" className={css(styles.sendButton)}>
                        Sign me up
      				    </Button>
                    </Grid>
                  </Grid>
                </FormControl>
              </div>
              <div>
                <Typography className={css(styles.whiteContent)} variant="title" color="textSecondary">
                  Data supplied by <span className={css(styles.orangeContent)}>AgentBox</span>
                </Typography>
                <Typography className={css(styles.whiteContent)} variant="title" color="textSecondary">
                  Designed and built by <span className={css(styles.orangeContent)}>TechEquipt</span>
                </Typography>
              </div>
            </div>
          </Grid>
        </Grid>
      </div>
      <div className={css(styles.bottomRow)}>
        <Typography variant="display3" color="textPrimary" style={{ flex: 1 }}>
          <span className={css(styles.whiteContent)}>C&G</span>
        </Typography>
        <Grid container className={css(styles.socialContainer)}>
          {socialItems.map(item => (
            <Button mini key={item} variant="fab" color="primary" aria-label={item} className={css(styles.socialbutton)}>
              <img src={"../static/images/" + item} />
            </Button>
          ))}
        </Grid>
      </div>
    </div>
  )
};

export default OfficeFooter;