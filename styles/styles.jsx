import { StyleSheet } from 'aphrodite';

export const styles = StyleSheet.create({
	/* Office */
	content: {
		width: '90%',
		marginLeft: 20,
		marginRight: 20,		
		maxWidth: 1200,
		marginLeft: 'auto',
		marginRight: 'auto',
		'@media (max-width: 700px)': {
			width: '100%',      
		  },		
	},
	titleContainer: {
		maxWidth: 600,
		margin: '0 auto',
		paddingTop: 40,
		paddingBottom: 30,
	},
	contentTitle: {
		color: '#ff8124',
		fontSize: 40,
		'@media (max-width: 700px)': {
			width: '100%',      
			fontSize: 30,
		},	
	},
	contentSubTitle: {		
		fontSize: 30,
		'@media (max-width: 700px)': {
			width: '100%',      
			fontSize: 20,
		},	
	},

	/* OfficeCard */
	cardMedia: {
	  display: 'inherit',
	  height: 600,
	  '@media (max-width: 700px)': {
		display: 'none',
	  },
	},
	cardMobile: {
	  display: 'none',
	  '@media (max-width: 700px)': {
		display: 'inherit'
	  },
	},
	cardMediaMobile: {
	  height: 300,
	},
	viewButton: {    
	  backgroundColor: '#ff8124',
	  color: '#fff',
	  textTransform: 'none',
	  fontSize: 20,
	  marginTop: 10,
	  padding: 10,
	  paddingLeft: 20,
	  paddingRight: 20,
	},
	cardTitle:{
	  color: '#fff', display: 'flex', justifyContent: 'center', fontSize: 40,
	  '@media (max-width: 700px)': {
		fontSize: 25
	  },
	},
	cardContent:{
	  fontSize: 20,
	  '@media (max-width: 700px)': {
		fontSize: 10
	  },
	},

	/* OfficeFooter */
	bottomRow: {
		backgroundColor: '#ff8124',
		padding: 20,
		display: 'flex',
		alignItems: 'center',
		flexDirection: 'row',
		'@media (max-width: 700px)': {
		  flexDirection: 'column'
		},
	  },
	  input: {
		borderWidth: 1,
		padding: 5,
		paddingLeft: 10,
		fontSize: 20,
		borderColor: '#ff8124',
		borderStyle: 'solid',
		color: '#fff',
		margin: 0,
		marginTop: 20,
		width: '100%'
	  },
	  socialbutton: {
		margin: 0,
		marginLeft: 10,
		color: '#ff8124',
		backgroundColor: '#fff'
	  },
	  socialContainer: {
		justify: "flex-end", width: 'auto'
	  },
	  sendButton: {    
		backgroundColor: '#ff8124',
		color: '#fff',
		textTransform: 'none',
		fontSize: 20,
		marginTop: 20,
		padding: 10,
		paddingLeft: 20,
		paddingRight: 20,
	  },
	  footer: {
		padding: 50,
		paddingLeft: 20,
		paddingRight: 20,
		backgroundColor: '#221e1f',
		'@media (max-width: 700px)': {
		  display: 'none'
		},
	  },
	  line: {
		backgroundColor: '#ff8124',
		height: 1
	  },
	  orangeContent: {
		color: '#ff8124'
	  },
	  whiteContent: {
		color: '#fff'
	  },
	  listItem: {
		paddingLeft: 0, color: '#fff',
		width: '100%',
		padding: 0,
		paddingBottom: 5,
		paddingTop: 5
	  },
	  flexColumn:{
		display: 'flex', flexDirection: 'column'
	  }
  });

  export const headerTheme = theme => ({
	menuButton: {
	  textTransform: 'none',
	  fontSize: 25,
	  fontWeight: 'bold',
	  whiteSpace: 'nowrap',
	  [theme.breakpoints.down('700')]: {      
		fontSize: 15,
	  }
	},
  
	toolbarTitle: {
	  flex: 1,
	  height: 120,
	  display: 'flex',
	  alignItems: 'center',
	  justifyContent: 'left',
	  fontSize: 50,
	  paddingLeft: 0,
	  [theme.breakpoints.down('700')]: {
		paddingLeft: 45,
		fontSize: 30,
		height: 80,
		justifyContent: 'center',
	  },
	},
  
	sectionDesktop: {
	  display: 'none',
	  [theme.breakpoints.up('md')]: {
		display: 'flex',
	  },
	},
	sectionMobile: {
	  display: 'flex',
	  [theme.breakpoints.up('md')]: {
		display: 'none',
	  },
	},
  });