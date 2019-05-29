import Page from '../../layouts/Main';
import OfficeCard from '../../components/office/OfficeCard';
import OfficeFooter from "../../components/office/OfficeFooter"
import styles from './styles';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import { StyleSheet, css } from 'aphrodite';
import {styles as officeStyles} from '../../styles/styles'

const officeList = [
	{
		title: 'Elwood',
		address: '90 Ormond Road, Elwood Vic 3184',		
		number: '03 9531 1245',
		image:'img_office_elwood.png'
	},
	{
		title: 'Port Melboume',
		address: '1/103D Bay Street, Port Melboumne Vic 3207',		
		number: '03 9646 4444',
		image:'img_office_portmelboume.png'
	},
	{
		title: 'Black Rock',
		address: '3 Bluff Road, Black Rock Vic 3193',		
		number: '03 9589 3133',
		image:'img_office_blackrock.png'
	},
];

const OfficesPage = (props) => {
	return (
		<Page>
			<main className={css(officeStyles.content)}>
				<div className={css(officeStyles.titleContainer)}>
					<Typography variant="display2" align="center" color="textPrimary">
						<span className={css(officeStyles.contentTitle)}>OUR OFFICES</span>
					</Typography>
					<Typography variant="display1" align="center" className={css(officeStyles.contentSubTitle)} color="textPrimary">
						We're right around the corner
          			</Typography>
				</div>
				<Grid container spacing={40} direction="column" justify="center" alignItems="center">
					{officeList.map(office => (
						<OfficeCard key={office.title} office={office} />
					))}
				</Grid>
			</main>
			<OfficeFooter/>
			<style jsx>{styles}</style>
		</Page>		
	)
};

export default OfficesPage;
